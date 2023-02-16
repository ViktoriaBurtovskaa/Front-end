
// 3. Через дом наполнить users_container данными, полученными из ответа на запрос - отобразить в браузере имя и телефон пользователя
const user_container = document.querySelector('.user_container')
let user_id = 1;

const render = ({name, phone}) => {
    user_container.innerText = ''
    const userData = document.createElement('p')
    userData.innerText = `${name} ${phone}`
    user_container.append(userData);
}

// 1. Написать функцию, которая принимает id и при вызове которой отправляется fetch-запрос по адресу https://jsonplaceholder.typicode.com/users/id
// 2. Вывести в консоль то, что придет по запросу
const getUser = id =>  {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(json => render(json))//{}
}

getUser(user_id)

//4. На кпоки повесить слушатели событий. при клике на левую мы отправляем запрос на id текущего юзера - 1, при клике на праву - на id текущего юзера + 1
const [left_btn, right_btn] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () =>{
if (user_id === 1) {
    user_id = 10
}
    getUser(--user_id)
})
    
    
right_btn.addEventListener('click', () => () =>{
    if (user_id === 10) {
        user_id = 1
    }
        getUser(++user_id)
})

