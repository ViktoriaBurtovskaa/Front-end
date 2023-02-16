// 1. Написать функцию, которая принимает айди в качества аргумента
// и при вызове которой отправляется fetch-запрос по ссылке https://dummyjson.com/users/id
// 2. Выести ответ по запросу в консоль
//3. Из полученных данных сформировать карточку юзера: фото, имя, фамилия, возраст, почта
//4. Стилизовать карточку. Если возраст человека >= 18, то цвет карточки сделать светло-зеленым, если меньше - светло-серым
// 5. В html-документ добавить форму с 1 числовым инпутом и кнопкой
// 6. При отправке формы выводить в консоль введенное в инпут значение
const container = document.querySelector('.container');

const user_form = document.querySelector('.user_form');

user_form.addEventListener('submit', event => {
  event.preventDefault();
  getUser(event.target.id.value);
  event.target.id.value = '';
});

const render = ({image, firstName, lastName, age, email}) => {
    container.innerText = '';
    const userCard = document.createElement('div');
    const userPhoto = document.createElement('img');
    const userName = document.createElement('p');
    const userAge = document.createElement('p');
    const userEmail = document.createElement('a');
    
    userName.innerText = `${firstName} ${lastName}`;
    userAge.innerText = `Age: ${age}`;
    userEmail.innerText = email
    
    userEmail.setAttribute('href',  `mailto:${email}`);
    userPhoto.setAttribute('src', image)
    userPhoto.setAttribute('alt', `${firstName} ${lastName}`)
    
    userCard.classList.add('user_card');
    userCard.style.backgroundColor = age >= 30 ? 'lightgreen' : 'lightgray';
    
    container.append(userCard);
    userCard.append(userPhoto,userName,userAge, userEmail)
}

const getUser = (id) => {
    fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(json => render(json))
}

