import menuIcon from '../assets/menu.svg';

const createTodoItem = (id, description) => {
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.id = `list${id}`;

  li.innerHTML = `
       <input type="checkbox" id="${id}" class="checkbox" />
       <label for="#${id}" id="task${id}">${description}</label>
       <img class="menu" src="${menuIcon}" alt="3-dot menu" />
    `;
  return li;
};

export default createTodoItem;
