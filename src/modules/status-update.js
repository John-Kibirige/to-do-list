const statusUpdate = (currentId) => {
  let localStorage = JSON.parse(window.localStorage.getItem('todo-tasks'));
  localStorage = localStorage.map((task) => {
    if (task.id === currentId) {
      return {
        ...task,
        completed: !task.completed,
      };
    }
    return task;
  });

  window.localStorage.setItem('todo-tasks', JSON.stringify(localStorage));
};

export default statusUpdate;
