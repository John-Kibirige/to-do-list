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
  console.log('This is the local storage at this point ', localStorage);
};

export default statusUpdate;
