'use strict';

const addTaskBtn = document.querySelector('.addTask > button');
const inputTaskElement = document.querySelector('.addTask > input');
const userListElement = document.querySelector('.taskList');

inputTaskElement.oninput = ({ target: { value } }) => {
  if (value) {
    inputTaskElement.classList.remove('invalid');
    inputTaskElement.classList.add('valid');
  } else {
    inputTaskElement.classList.remove('valid');
    inputTaskElement.classList.add('invalid');
  }
};

addTaskBtn.addEventListener('click', addTaskHandler);

function addTaskHandler(e) {
  const { value } = inputTaskElement;

  const newTaskListItem = createTaskListItem('li', value);

  userListElement.append(newTaskListItem);
}

function createTaskListItem(elementType, value) {
  const item = document.createElement(elementType);

  const span = document.createElement('span');
  span.textContent = value;
  item.append(span);

  const btn = document.createElement('button');
  btn.textContent = 'Delete task';
  btn.onclick = ({ target }) => {
    target.parentElement.remove();
  };
  item.append(btn);

  return item;
}
