class Task {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

const createTaskAddToLocal = (description, local) => {
  let onLocalStorage = local.getItem('todo-tasks');
  if (!onLocalStorage) {
    const task = new Task(description, false, 1);
    local.setItem('todo-tasks', JSON.stringify([task]));
  } else {
    onLocalStorage = JSON.parse(onLocalStorage);
    const task = new Task(description, false, onLocalStorage.length + 1);
    local.setItem('todo-tasks', JSON.stringify([...onLocalStorage, task]));
  }
};

const addTaskToLocal = (description) => {
  createTaskAddToLocal(description, window.localStorage);
};

const removeTaskHelper = (id, local) => {
  let fromLocalStorage = JSON.parse(local.getItem('todo-tasks'));
  if (fromLocalStorage.length) {
    fromLocalStorage = fromLocalStorage.filter((task) => {
      const condition = task.id !== id;
      return condition;
    });
  }

  local.setItem('todo-tasks', JSON.stringify(fromLocalStorage));
};

const removeItemFromLocal = (id) => {
  removeTaskHelper(id, window.localStorage);
};

const removeCompletedTasksFromLocal = (local) => {
  let fromLocalStorage = JSON.parse(local.getItem('todo-tasks'));
  if (fromLocalStorage.length) {
    fromLocalStorage = fromLocalStorage.filter(
      (task) => task.completed === false,
    );
    return fromLocalStorage;
  }
  return [];
};

export {
  addTaskToLocal,
  Task,
  createTaskAddToLocal,
  removeItemFromLocal,
  removeTaskHelper,
  removeCompletedTasksFromLocal,
};
