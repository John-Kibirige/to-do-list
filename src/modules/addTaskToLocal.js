class Task {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

const addTaskToLocal = (description) => {
  let onLocalStorage = window.localStorage.getItem('todo-tasks');
  if (!onLocalStorage) {
    const task = new Task(description, false, 1);
    window.localStorage.setItem('todo-tasks', JSON.stringify([task]));
  } else {
    onLocalStorage = JSON.parse(onLocalStorage);
    const task = new Task(description, false, onLocalStorage.length + 1);
    window.localStorage.setItem(
      'todo-tasks',
      JSON.stringify([...onLocalStorage, task]),
    );
  }
};

export default addTaskToLocal;
