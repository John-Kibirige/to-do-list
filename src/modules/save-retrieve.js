const storeToLocal = (array) => {
  window.localStorage.setItem('todo-tasks', JSON.stringify(array));
};

const retrieveFromLocal = () => {
  const fromLocal = window.localStorage.getItem('todo-tasks');
  return fromLocal;
};

export { storeToLocal, retrieveFromLocal };
