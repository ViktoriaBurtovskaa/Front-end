// 1. Написать функцию, которая принимает айди в качества аргумента
// и при вызове которой отправляется fetch-запрос по ссылке https://dummyjson.com/users/id
// 2. Выести ответ по запросу в консоль
//3. Из полученных данных сформировать карточку юзера: фото, имя, фамилия, возраст, почта
//4. Стилизовать карточку. Если возраст человека >= 18, то цвет карточки сделать светло-зеленым, если меньше - светло-серым
//5. Добавить две кнопки < > в html-документ
//6. При перезагрузке странице прогружается первый юзер
//7. При клике на правую кнопку айдишник увеличивается на 1 и отправлется новый запрос с измененным значением айди. При клике на левую - уменьшается на 1 и отправляется новый запрос

const container = document.querySelector('.container');

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

let id_num = 1;
getUser(id_num)

const [left_btn, right_btn] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () =>{
    if (id_num === 1) {
        id_num = 31;
    }
    getUser(--id_num)
})

right_btn.addEventListener('click', ()  =>{
    if (id_num === 30) {
        id_num = 0;
    }
    getUser(++id_num)
})
