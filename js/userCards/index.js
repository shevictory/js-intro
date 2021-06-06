'use strict';

let users = [
  {
    id: 1,
    name: 'username1',
    surname: 'usersurname1',
    imageSrc: 'https://www.nlb.by/upload/iblock/d1a/smile.jpg',
  },
  {
    id: 2,
    name: 'username2',
    surname: 'usersurname2',
    imageSrc:
      'https://cs9.pikabu.ru/post_img/big/2018/03/26/9/1522079829169777726.png',
  },
  {
    id: 3,
    name: 'username3',
    surname: 'usersurname3',
    imageSrc:
      'https://vignette.wikia.nocookie.net/ducktales/images/7/74/Ducktales_06.jpg/revision/latest/scale-to-width-down/340?cb=20180409180646&path-prefix=ru',
  },
  {
    id: 4,
    name: 'username4',
    surname: 'usersurname4',
    imageSrc:
      'https://trikky.ru/wp-content/blogs.dir/1/files/2015/09/5b8aaf330c8183eeb86885c914360eaba0c180b9f83c48d2d386027b295f69f9___jpg____4_fbf72a031.jpg',
  },
  {
    id: 5,
    name: 'username5',
    surname: 'usersurname5',
    imageSrc: 'https://cdn.shazoo.ru/420122_eu8aWQwsNq_overwatch.jpg',
  },
];

let userListElem = document.getElementById('userList');
//console.log(userListElem);
//console.log(typeof userListElem);

appendUsersListItems(userListElem, users);

function appendUsersListItems(userListElem, users) {
  users.forEach(user => {
    userListElem.append(createUserListItemElem(user));
  });
}

//let listItem = document.createElement('li');
//userListElem.append(listItem);

function createUserListItemElem(user) {
  let userListElem = document.createElement('li');

  let userCardWrapElem = document.createElement('div');
  userCardWrapElem.classList.add('userCardWrap');
  userListElem.append(userCardWrapElem);

  let userPictureContainerElem = document.createElement('div');
  userPictureContainerElem.classList.add('userImageContainer');
  userCardWrapElem.append(userPictureContainerElem);

  let userPictureElem = document.createElement('img');
  userPictureElem.classList.add('userImage');
  userPictureElem.setAttribute(
    'src',
    user.imageSrc ? user.imageSrc : './img/icon.png'
  ); // почему не берет адрес запасной картинки (./assets/images/icons/ у Юли)
  userPictureElem.setAttribute('alt', 'userlogo');
  userPictureContainerElem.append(userPictureElem);

  let userFullNameElem = document.createElement('div');
  userFullNameElem.innerText = `${user.name} ${user.surname}`;
  userCardWrapElem.append(userFullNameElem);

  return userListElem;
}

// как прикрутить
function createDeleteButtonElem({ id: userId }) {
  let deleteButtonElem = document.createElement('img');
  deleteButtonElem.classList.add('delete');
  deleteButtonElem.setAttribute('src', './../img/icon.png');
  deleteButtonElem.setAttribute('alt', 'delete');
  deleteButtonElem.addEventListener('click', event => {
    event.stopPropagation();
    let userListItemElem = document.getElementById(userId);
    userListItemElem.remove();
  });
  return deleteButtonElem;
}
