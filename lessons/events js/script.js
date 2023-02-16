let btn = document.querySelector('.btn_elem');

// function handle() {
//     console.log(101);
// }

// btn.onclick = handle
// btn.addEventListener('click', handle)
// btn.addEventListener('click', () => console.log('test'))

// btn.removeEventListener('click', handle)
// Types of events

// btn.addEventListener('dblclick', () => console.log('doubleclick'))
// btn.addEventListener('mousedown', () => console.log('mousedown'))
// btn.addEventListener('mouseup', () => console.log('mouseup'))
// btn.addEventListener('click', () => console.log('click'))

// btn.addEventListener('mouseout', () => console.log('mouseout'))
// btn.addEventListener('mousever', () =>  console.log('mouseover'))

// // document.body.addEventListener('keydown' , () => console.log('keydowm'))

// // Задание: по нажатию на кнопку, необходимо заменить цвет с brown на darkgreen.
// // При воторном нажатии необходимо вернуть старый цвет (brown)
// const changeColor = () => container.style.backgroundColor == "brown" ? container.style.backgroundColor = "darkgreen" :  container.style.backgroundColor = "brown";

// btn.addEventListener('click', clickHandler)

// let container = document.querySelector('.container')

// // function clickHandler() {
// //     container.style.backgroundColor = ( container.style.backgroundColor == 'darkgreen') ? 'brown' : 'darkgreen';
// // }

// //2 solution
// let mode = true;
// function clickHandler() {
//     mode = !mode
//     container.style.backgroundColor = (mode) ? 'brown' : 'darkgreen';
// }

//Object event

// document.body.addEventListener('keydown',  (event) => {
//     console.log(event.key)
//     console.log(event.code)
//     console.log(event.keyCode)
// })

// Задание. Реализуте горячую клавишу SHIFT(любой) + кнопка L (любой регистр), которая 
// заменит текстовое сво-во заголовка на дату, которая отражает текущий момент времени (HH:MM:SS)
const h_elem = document.querySelector('h1')
// document.body.addEventListener('keydown',  (event) => {
//     if (event.shiftKey &&  event.key.toUpperCase() === 'L') {
//         h_elem.innerText = new Date().toLocaleTimeString()
//     }
// })

// document.body.addEventListener('keydown',  (event) => {
//     if (event.shiftKey &&  event.code == 'KeyL') {
//         let date = new Date()
//         h_elem.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//         }
//     })


document.body.addEventListener('click',  (event) => {
    console.log( event.target.parentElement)
})
