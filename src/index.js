import './styles/index.scss';
import tasks from './modules/tasks.js';
import headerInput from './modules/header-input.js';
import createListItem from './modules/todo-item.js';
import createInput from './modules/editable.js';

const todoListPlaceHolder = document.querySelector('.todo-list-placeholder');
todoListPlaceHolder.prepend(headerInput());

const populateList = (list) => {
  list.forEach((item) => {
    const { description, id } = item;
    document
      .querySelector('.todo-list')
      .appendChild(createListItem(id, description));
  });
};

const finishedTasksById = new Set();

const handleOnCheck = () => {
  document.querySelectorAll('.checkbox').forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      const checkBox = e.target;
      checkBox.parentElement.children[0].classList.add('active');
      checkBox.parentElement.children[2].classList.add('active');
      finishedTasksById.add(Number(checkBox.id));
    });
  });
};

const handleItemMenuClick = () => {
  document.querySelectorAll('.menu').forEach((menu) => {
    menu.addEventListener('click', (e) => {
      const parent = e.target.parentElement;
      const valueToEdit = parent.children[2].textContent;

      parent.children[1].setAttribute('disabled', 'true');

      parent.removeChild(parent.children[2]);
      parent.removeChild(parent.children[parent.children.length - 1]);

      const [input, deleteIcon] = createInput(valueToEdit);
      parent.appendChild(input);
      parent.appendChild(deleteIcon);
      input.focus();
      parent.classList.add('active');

      deleteIcon.addEventListener('click', () => {
        parent.parentElement.removeChild(parent);
      });
    });
  });
};

const clearAllCompleted = () => {
  const notCompleted = tasks.filter((task) => !finishedTasksById.has(task.id));
  document.querySelector('.todo-list').innerHTML = '';
  populateList(notCompleted);
};

window.addEventListener('load', () => {
  populateList(tasks);
  handleOnCheck();
  handleItemMenuClick();

  document.querySelector('.clear-tasks').addEventListener('click', () => {
    clearAllCompleted();
    handleOnCheck();
    handleItemMenuClick();
  });
});
