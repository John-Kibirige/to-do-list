import './styles/index.scss';
import headerInput from './modules/header-input.js';
import createListItem from './modules/todo-item.js';
import createInput from './modules/editable.js';
import addTaskToLocal from './modules/addTaskToLocal.js';
import statusUpdate from './modules/status-update.js';

const todoListPlaceHolder = document.querySelector('.todo-list-placeholder');
todoListPlaceHolder.prepend(headerInput());

const populateList = (list) => {
  list.forEach((item) => {
    const { description, id, completed } = item;
    const todoList = document.querySelector('.todo-list');
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
        statusUpdate(checkBoxId);
      } else {
        label.classList.remove('active');
        statusUpdate(checkBoxId);
      }
    });
  });
};

const deleteSingleItem = (deleteIcon, parent) => {
  deleteIcon.addEventListener('click', () => {
    parent.parentElement.removeChild(parent);
    // we also update the local storage accordingly
    const refId = parent.children[0].id;

    let fromLocalStorage = window.localStorage.getItem('todo-tasks');
    if (fromLocalStorage.length) {
      fromLocalStorage = JSON.parse(fromLocalStorage);

      fromLocalStorage = fromLocalStorage.filter((task) => {
        const condition = task.id !== Number(refId);
        return condition;
      });

      // reset the ids of the remaining tasks
      fromLocalStorage = fromLocalStorage.map((task, index) => {
        const result = {
          ...task,
          id: index + 1,
        };
        return result;
      });

      window.localStorage.setItem(
        'todo-tasks',
        JSON.stringify(fromLocalStorage),
      );
    }
  });
};

// update task after being edited
const updateEdited = (checkBoxId, input, menuClickEvent) => {
  let fromLocal = JSON.parse(window.localStorage.getItem('todo-tasks'));

  fromLocal = fromLocal.map((task) => {
    if (task.id === checkBoxId) {
      const obj = {
        ...task,
        description: input.value,
        completed: false,
      };
      return obj;
    }
    return task;
  });
  // we can as well rerender the updated item to the ui
  document.querySelector('.todo-list').innerHTML = '';
  populateList(fromLocal);
  handleOnCheckboxClick();
  menuClickEvent();

  window.localStorage.setItem('todo-tasks', JSON.stringify(fromLocal));
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

      input.addEventListener('change', (e) => {
        e.preventDefault();
        updateEdited(checkBoxId, input, handleItemMenuClick);
      });

      // delete item
      deleteSingleItem(deleteIcon, parent);
    });
  });
};

const clearAllCompleted = () => {
  let fromLocalStorage = window.localStorage.getItem('todo-tasks');
  if (fromLocalStorage.length) {
    fromLocalStorage = JSON.parse(fromLocalStorage);

    fromLocalStorage = fromLocalStorage.filter(
      (task) => task.completed === false,
    );
    // we update the ui after after clearing all tasks
    document.querySelector('.todo-list').innerHTML = '';
    populateList(fromLocalStorage);
    handleOnCheckboxClick();
    handleItemMenuClick();

    // reset the ids of the remaining tasks
    fromLocalStorage = fromLocalStorage.map((task, index) => {
      const result = {
        ...task,
        id: index + 1,
      };
      return result;
    });
    window.localStorage.setItem('todo-tasks', JSON.stringify(fromLocalStorage));
  }
};

const renderFromLocal = () => {
  let fromLocalStorage = window.localStorage.getItem('todo-tasks');
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
  document.querySelector('.header-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const todoValue = e.target.querySelector('#add-list');
    addTaskToLocal(todoValue.value);
    renderFromLocal();
    todoValue.value = '';
  });
};

window.addEventListener('load', () => {
  renderFromLocal();
  createTodo();

  document.querySelector('.clear-tasks').addEventListener('click', () => {
    clearAllCompleted();
  });
});
