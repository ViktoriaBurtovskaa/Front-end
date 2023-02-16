// 1. Написать функцию, при вызове которой отправляется fetch-запрос по адресу https://jsonplaceholder.typicode.com/todos
// 2. Вывести в консоль то, что придет по запросу
const todos_container = document.querySelector('.todos_container')

const render = json => {
const todos_cards = json.map(({title, completed}) => {
    const card = document.createElement('div');
    const task = document.createElement('p');
    const status = document.createElement('p');

    const statusText = completed ? 'done': 'not done';

    task.innerText = `Task: ${title}`
    status.innerText = `Status: ${statusText} `
    card.classList.add('todo_card')
    card.style.backgroundColor = completed ? 'lightgreen' : 'lightgray';

    card.append(task,status)
    return card
    })
  todos_container.append(...todos_cards)
}

const getAllTasks = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => res.json())
    .then(json => render(json))
}

getAllTasks()