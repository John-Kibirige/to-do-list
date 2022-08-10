import deleteIcon from '../assets/delete.svg';

const editableList = (valueToEdit) => {
  const input = document.createElement('input');
  input.classList.add('edit-field');
  input.setAttribute('value', `${valueToEdit}`);

  const img = document.createElement('img');
  img.classList.add('img-delete');
  img.setAttribute('alt', 'delete');
  img.src = deleteIcon;

  return [input, img];
};

export default editableList;
