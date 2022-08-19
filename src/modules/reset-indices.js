import { storeToLocal } from './save-retrieve.js';

const resetIndices = (fromLocalStorage) => {
  // reset the ids of the remaining tasks
  fromLocalStorage = fromLocalStorage.map((task, index) => {
    const result = {
      ...task,
      id: index + 1,
    };
    return result;
  });

  storeToLocal(fromLocalStorage);
};

export default resetIndices;
