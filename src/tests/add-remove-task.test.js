import {
  Task,
  createTaskAddToLocal,
  removeTaskHelper,
  removeCompletedTasksFromLocal,
} from '../modules/addTaskToLocal.js';
import editTask from '../modules/edit-task.js';
import { statusUpdateHelper } from '../modules/status-update.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  setItem(key, value) {
    if (key && value) {
      this.store[key] = String(value);
    }
  }

  getItem(key) {
    return this.store[key] || null;
  }
}
const localStorage = new LocalStorageMock();

describe('This has all tests pertaining to adding data to local storage', () => {
  test('Testing if single task is created as expected', () => {
    const task = new Task();
    task.completed = false;
    task.description = 'description';
    task.id = 1;
    expect(task).toEqual({
      description: 'description',
      completed: false,
      id: 1,
    });
  });

  test('Check if data is stored on local storage', () => {
    localStorage.setItem('import', JSON.stringify(['computers']));
    expect(localStorage.getItem('import')).toBeTruthy();
  });

  test('Check if stored data is what we are expecting', () => {
    expect(JSON.parse(localStorage.getItem('import'))).toEqual(['computers']);
  });

  test('Adding task to local storage should return 1', () => {
    createTaskAddToLocal('Meditation', localStorage);
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    expect(onLocal.length).toBe(1);
  });

  test('Adding more values to the local storage ', () => {
    createTaskAddToLocal('Watch football', localStorage);
    createTaskAddToLocal('Read a book ', localStorage);
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    expect(onLocal.length).toBe(3);
  });
});

describe('Changing the toggle states from false to true for every item that is clicked', () => {
  test('check if user clicks on check box, the state is reflected on  local storage', () => {
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    onLocal[0].completed = true;
    onLocal[2].completed = true;
    expect(onLocal[0].completed).toBe(true);
    expect(onLocal[1].completed).toBe(false);
    expect(onLocal[2].completed).toBe(true);
  });
});

describe('Removing data from local storage ', () => {
  test('check if there is data on local storage ', () => {
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    expect(onLocal[2].id).toBe(3);
  });

  test('check if one completed item is removed the changes are reflected on local storage', () => {
    removeTaskHelper(1, localStorage);
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    const secId = onLocal[1].id;
    expect(secId).not.toBe(1);
  });

  test('The values stored in the local storage should be 2', () => {
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    expect(onLocal.length).toBe(2);
  });

  test('Remove all completed tasks', () => {
    createTaskAddToLocal('Task 3', localStorage);
    createTaskAddToLocal('Task 4', localStorage);
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    onLocal[2].completed = true;
    onLocal[3].completed = true;
    localStorage.setItem('todo-tasks', JSON.stringify(onLocal));
    const balance = removeCompletedTasksFromLocal(localStorage);
    expect(balance.length).toEqual(2);
  });
});

// testing for the editing a task, updating it,  mock some dom manipulation functions

describe('editing task description', () => {
  test('check if task on local can be edited', () => {
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    const editedLocal = editTask('New task', 2, onLocal);
    expect(editedLocal[0].description).toBe('New task');
    localStorage.setItem('todo-tasks', JSON.stringify(editedLocal));
  });

  test('Check if edited changes persist on local storage ', () => {
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    expect(onLocal[0].description).toBe('New task');
  });
});

describe('update status', () => {
  test('check if function updates status ', () => {
    statusUpdateHelper(2, localStorage);
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    expect(onLocal[0].completed).toBe(true);
  });

  test('check if function is able to toggle the previous marked state', () => {
    statusUpdateHelper(2, localStorage);
    const onLocal = JSON.parse(localStorage.getItem('todo-tasks'));
    expect(onLocal[0].completed).toBe(false);
  });
});
