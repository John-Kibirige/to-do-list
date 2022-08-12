import refreshImage from '../assets/refresh.svg';
import enterImage from '../assets/enter.svg';

const createHeaderInput = () => {
  const titleInputContainer = document.createElement('div');
  titleInputContainer.classList.add('title-input-container');

  titleInputContainer.innerHTML = `
        <div class="title-cont">
          <h2 class="todo-title">Today's To Do</h2>
          <img src="${refreshImage}" alt="Refresh" />
        </div>

        <form action="#" class="header-form" id="form">
          <input type="text" id="add-list" placeholder="Add your list ..." required/>
          <img src="${enterImage}" alt="enter-item" />
        </form>
    `;

  return titleInputContainer;
};

export default createHeaderInput;
