const statusUpdateHelper = (currentId, local) => {
  let localStorage = JSON.parse(local.getItem('todo-tasks'));
  localStorage = localStorage.map((task) => {
    if (task.id === currentId) {
      return {
        ...task,
        completed: !task.completed,
      };
    }
    return task;
  });
  local.setItem('todo-tasks', JSON.stringify(localStorage));
};

const statusUpdate = (currentId) => {
  statusUpdateHelper(currentId, window.localStorage);
};

export { statusUpdate, statusUpdateHelper };
