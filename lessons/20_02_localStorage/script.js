//localStorage

// console.log(localStorage);

//Инизиализайия записи в localStorage
// localStorage.setItem('user', 'Hello, world!')

//удаление одной записи по ключу
// localStorage.removeItem('user')

// удаление всех записей
// localStorage.clear()

//получение даных с localStorage
// let row = localStorage.getItem('user')
// console.log(row);

//--------------------------------------------------------

// let obj = {
//     name: 'Alex',
//     age: 25,
//     salary: 1500
// }

// localStorage.setItem('form', JSON.stringify(obj))

//Задача. Опишите две функции: writeLocalStorage и readLocalStorage. 
//Функции должны записывать или считывать объекты в localStorage соответственно.
// function writeLocalStorage(obj) {
//     localStorage.setItem('user', JSON.stringify(obj))
//     readLocalStorage(res)
// }
// writeLocalStorage(obj)

// function readLocalStorage() {
//     return JSON.parse(localStorage.getItem('user'))
// }

//Practice
//Create form, whid add a note in array and draw element
//add localStorage to use after 
// 3. Создайте кнопку, которая будет хранить тектсовое сво-во "Удалить всех пользователей" и очищать localStorage


let form = document.querySelector('#form_elem')
let div_root = document.querySelector('#root')
let clearButton = document.createElement('button')
clearButton.innerText = 'Delete all users'

let div_container = document.createElement('div')
div_container.className = 'users_container'
div_root.append(div_container)
div_container.before(clearButton)


// clearButton.addEventListener('click', () => localStorage.clear())
clearButton.onclick = () =>{
    localStorage.removeItem('user')
   users = []
   render(users)
}
  
let storageData = JSON.parse(localStorage.getItem('user'))
let users = storageData ?? []
render(users)

form.onsubmit = (e) => {
    e.preventDefault()
    let dataList = new FormData(e.target)
    let data = Object.fromEntries(dataList)
    users.push(data)
    localStorage.setItem('user', JSON.stringify(users))
    render(users)

    //после события очищаем форму от даных
    form.reset()
}

function render(array) {
    div_container.innerHTML = '';
    for (let elem of array) {
        let div_card = document.createElement('div')
        let p_fullname = document.createElement('p')

        div_card.className = 'user_card'
        p_fullname.innerText = `${elem.name} ${elem.lastname}`

        div_card.append(p_fullname)
        div_container.append(div_card) 
    }
}

