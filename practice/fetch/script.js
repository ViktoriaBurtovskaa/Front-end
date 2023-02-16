// api https://reqres.in/
// page 1 https://reqres.in/api/users?page=1

// 1. Написать fetch-запрос по ссылке https://reqres.in/api/users?page=1 и выводить на страницу карточку с пользователем (картинка + имя)
const users_container = document.querySelector('.users_container');

const render = users => {
    users_container.innerText = '';
    const users_card = users.map(({first_name, avatar}) => {
        const card = document.createElement('div');
        const avatarElem = document.createElement('img');
        const nameElem = document.createElement('p');

        avatarElem.setAttribute('src', avatar);
        avatarElem.setAttribute('alt', first_name);

        nameElem.innerText = first_name;

        card.append(avatarElem, nameElem)
        return card;
    })
    users_container.append(...users_card)
}

const getUsers = (num) => {
    fetch(`https://reqres.in/api/users?page=${num}`)
    .then(res => res.json())
    .then(json => render(json.data));
}

getUsers(1);

const [first_btn, second_btn] = document.querySelectorAll('.triggers button');
first_btn.addEventListener('click', () => getUsers(1))
second_btn.addEventListener('click', () => getUsers(2))

