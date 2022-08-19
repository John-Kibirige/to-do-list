const editTask = (newDescription, id, fromLocal) => {
  fromLocal = fromLocal.map((task) => {
    if (task.id === id) {
      const obj = {
        ...task,
        description: newDescription,
        completed: false,
      };
      return obj;
    }
    return task;
  });
  return fromLocal;
};

export default editTask;
