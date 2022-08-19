import './styles/index.scss';
import headerInput from './modules/header-input.js';
import createListItem from './modules/todo-item.js';
import createInput from './modules/editable.js';
import {
  addTaskToLocal,
  removeItemFromLocal,
  removeCompletedTasksFromLocal,
} from './modules/addTaskToLocal.js';
import { statusUpdate } from './modules/status-update.js';
import { storeToLocal, retrieveFromLocal } from './modules/save-retrieve.js';
import resetIndices from './modules/reset-indices.js';
import validateForm from './modules/formValidation.js';
import editTask from './modules/edit-task.js';

const todoList = document.querySelector('.todo-list');

const todoListPlaceHolder = document.querySelector('.todo-list-placeholder');
todoListPlaceHolder.prepend(headerInput());

const populateList = (list) => {
  list.forEach((item) => {
    const { description, id, completed } = item;
    const listItem = createListItem(id, description);
    if (completed) {
      listItem.querySelector(`#task${id}`).classList.add('active');
      listItem.children[0].checked = true;
    }
    todoList.appendChild(listItem);
  });
};

const handleOnCheckboxClick = () => {
  document.querySelectorAll('.checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const checkBoxId = Number(checkbox.id);
      const label = checkbox.parentElement.children[1];

      if (checkbox.checked) {
        label.classList.add('active');
      } else {
        label.classList.remove('active');
      }
      statusUpdate(checkBoxId);
    });
  });
};

const deleteSingleItem = (deleteIcon, parent) => {
  deleteIcon.addEventListener('click', () => {
    parent.parentElement.removeChild(parent);
    // we also update the local storage accordingly
    const refId = parent.children[0].id;

    const fromLocalStorage = retrieveFromLocal();
    removeItemFromLocal(+refId);
    resetIndices(fromLocalStorage);
  });
};

// update task after being edited
const updateEdited = (checkBoxId, input, menuClickEvent) => {
  let fromLocal = JSON.parse(retrieveFromLocal());
  fromLocal = editTask(input, checkBoxId, fromLocal);
  // we can as well rerender the updated item to the ui
  document.querySelector('.todo-list').innerHTML = '';
  populateList(fromLocal);
  handleOnCheckboxClick();
  menuClickEvent();

  storeToLocal(fromLocal);
};

// handles both update and deletion of a single task
const handleItemMenuClick = () => {
  document.querySelectorAll('.menu').forEach((menu) => {
    menu.addEventListener('click', (e) => {
      const parent = e.target.parentElement;
      const valueToEdit = parent.children[1].textContent;

      parent.children[0].setAttribute('disabled', 'true');
      const checkBoxId = Number(parent.children[0].id);

      parent.removeChild(parent.children[1]);
      parent.removeChild(parent.children[parent.children.length - 1]);

      const [input, deleteIcon] = createInput(valueToEdit);
      parent.appendChild(input);
      parent.appendChild(deleteIcon);
      const end = valueToEdit.length;
      input.setSelectionRange(end, end);
      input.focus();
      parent.classList.add('active');

      // if the user edits the value, update to new value and update local storage
      let newValue = input.value;
      input.addEventListener('change', (e) => {
        e.preventDefault();
        newValue = input.value;
      });

      input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          if (newValue) {
            updateEdited(checkBoxId, newValue, handleItemMenuClick);
          }
        }
      });

      // delete item
      deleteSingleItem(deleteIcon, parent);
    });
  });
};

const clearAllCompleted = () => {
  const fromLocalStorage = removeCompletedTasksFromLocal(window.localStorage);
  if (fromLocalStorage.length > 0) {
    // we update the ui after after clearing all tasks
    document.querySelector('.todo-list').innerHTML = '';
    populateList(fromLocalStorage);
    handleOnCheckboxClick();
    handleItemMenuClick();

    // reset the ids of the remaining tasks
    resetIndices(fromLocalStorage);
  }
};

const renderFromLocal = () => {
  let fromLocalStorage = retrieveFromLocal();
  if (fromLocalStorage !== null && fromLocalStorage.length) {
    fromLocalStorage = JSON.parse(fromLocalStorage);
    // we update the ui after after clearing all tasks
    document.querySelector('.todo-list').innerHTML = '';
    populateList(fromLocalStorage);
    handleOnCheckboxClick();
    handleItemMenuClick();
  }
};

const createTodo = () => {
  const create = () => {
    const todoInput = document.querySelector('#add-list');
    if (todoInput.value.trim().length === 0) {
      validateForm(todoInput);
      return;
    }
    addTaskToLocal(todoInput.value);
    renderFromLocal();
    todoInput.value = '';
  };

  document.querySelector('.header-form').addEventListener('submit', (e) => {
    e.preventDefault();
    create();
  });
  document.querySelector('.enter-icon').addEventListener('click', () => {
    create();
  });
};

window.addEventListener('load', () => {
  renderFromLocal();
  createTodo();

  document.querySelector('.clear-tasks').addEventListener('click', () => {
    clearAllCompleted();
  });
});
