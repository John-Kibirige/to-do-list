import menuIcon from '../assets/menu.svg';
import checkIcon from '../assets/check.svg';

const createTodoItem = (id, description) => {
  const li = document.createElement('li');
  li.classList.add('list-item');

  li.innerHTML = `
       <img src="${checkIcon}" alt="finished task" class="finished-task">
       <input type="checkbox" id="${id}" class="checkbox" />
       <label for="#${id}">${description}</label>
       <img class="menu" src="${menuIcon}" alt="3-dot menu" />
    `;
  return li;
};

export default createTodoItem;
