'use strict';

const getUsersOptions = {
  results: 100,
  page: 1,
  seed: 'abc',
};

const rootElement = document.getElementById('root');

rootElement.append(generatePrevPageBtn());
rootElement.append(generateNextPageBtn());

loadUsers();

function generatePrevPageBtn() {
  const prevPageBtn = document.createElement('button');
  prevPageBtn.textContent = '<';
  prevPageBtn.onclick = e => {
    const { page } = getUsersOptions;
    if (page > 1) {
      getUsersOptions.page--;
    }
    loadUsers();
  };
  return prevPageBtn;
}

function generateNextPageBtn() {
  const nextPageBtn = document.createElement('button');
  nextPageBtn.textContent = '>';

  nextPageBtn.onclick = e => {
    getUsersOptions.page++;
    loadUsers();
  };
  return nextPageBtn;
}

function loadUsers(params) {
  fetch(
    `https://randomuser.me/api/?results=${getUsersOptions.results}
                             &page=${getUsersOptions.page}
                             &seed=${getUsersOptions.seed}`
  )
    .then(result => result.json())
    .then(({ results }) => renderUsers(results))
    .catch(err => renderError(err));
}

function renderUsers(users) {
  console.log('users :>> ', users);
}

function renderError(err) {
  const errElement = document.createElement('div');
  errElement.textContent = 'Your content hasn`t downloaded successfully(';
  rootElement.prepend(errElement);
}
