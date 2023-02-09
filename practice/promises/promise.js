// let a = 44;

// let my_promise = new Promise((res,rej) => {
//     setTimeout(() => {
//         res(a = 33);
//     },2000);
// }).then(() => console.log(a))

// // 1. Используя Math.random(), выводить в консоль "все хорошо", если Math.random() сгененрирует число больше или равно 0.5, или выводить "все плохо" - если сгенерирует число меньше 0.5
// const random_promise = new Promise((resolve, reject) => {
//     const random_num = Math.random()
//     if (random_num >= 0.5) {
//         resolve()
//     } else{
//         reject()
//     }
// });

// random_promise.then(
//     (value) => console.log(value + 'all is good'),
//     (value) => console.log('bad' + value)
// )

// fetch('https://jsonplaceholder.typicode.com/users') // отправляю запрос
//   .then(resp => resp.json()) // получаю ответ, преобразовываю в json
//   .then(json => console.log(json)) // беру сформированный json и что-то с ним делаю (вывожу в консоль)

//   // 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/users
// // 2. Из полученного массива для каждого юзера сформировать карточку с именем, фамилией и юзернэймом

// const rootElem = document.querySelector('.root');

// const render_users = json =>{
//     json
//     .sort((a,b) => a.username.localeCompare(b.username))
//     json.forEach(({name, username}) => {
//         const cardElem = document.createElement("div");
//         const nameElem = document.createElement("p");
//         const usernameElem = document.createElement("p");

//         nameElem.innerText = `Name: ${name}`
//         usernameElem.innerText = `Username: ${username}`

//         cardElem.classList.add('card');

//         cardElem.append(nameElem, usernameElem);
//         rootElem.append(cardElem);

//     });
// }

// fetch('https://jsonplaceholder.typicode.com/users') // отправляю запрос
//   .then(res => res.json()) // получаю ответ, преобразовываю в json
//   .then(json => render_users(json))

// 03.02
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let data = [1,2,3]
//         console.log(data);
//         resolve(data)
//     }, 2000 )
// })
// promise
//     .then((data) => {
//         data.push(4)
//         console.log(data);
//         return data;

//     })
//     .then((data) => {
//       return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         data.shift()
//         console.log(data, "last");
//         resolve(data);
//     })
// })
//     })
//     .then((data) => {
//         data[0] = 'Alex'
//         console.log(data);
//     })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let data = [1,2,3]
//         console.log(data);
//         resolve(data)
//         reject('Failed to fetch')
//     }, 2000 )
// })

// promise
//     .then(data => console.log(data, "then"))
//     .catch(er => console.error(er))
//     .finally(() => console.log("finally"))

//     // fetch
// let url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))



//async await
// async function fetchUsers() {
//     let url = 'https://jsonplaceholder.typicode.com/users'
//     let res = await fetch(url)
//     let data = await res.json()
//     console.log(data);
// }

//.....................................................get , post запросы

//GET получитт данные и не изменять ничего, просто прочитать 

// let url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))

// let url = 'http://51.250.8.198:8000/api/get_all/'
// fetch(url)
//       .then(res => res.json())
//       .then(data => console.log(data))


// POST позволяет и(зменять данные, если фетч передает 2 запроса это пост
const createPost = (title, text) => {
    let url = 'http://51.250.8.198:8000/api/create/'

 let data = {
       title,
       text
 }    

 fetch(url, {
       method: 'POST',
       headers: {
             'Content-Type': 'application/json;charset=utf-8' 
       },
       body: JSON.stringify(data)
})
}

// let url = 'http://51.250.8.198:8000/api/create/'

// let data = {
//       title: 'telran',
//       text: 'Урок 37-38'
// }

// fetch(url, {
//       method: 'POST',
//       headers: {
//             'Content-Type': 'application/json;charset=utf-8' 
//       },
//       body: JSON.stringify(data)
// })


//------------------------------------------------------------------
//DELETE
//let url = 'http://51.250.8.198:8000/api/drop/11'
// fetch(url, {
    //       method: 'DELETE',
    //      headers: {
    //             'Content-Type': 'application/json;charset=utf-8' 
    //       },
    // }) 

    const deleteBYID = (id) => {
        let url =`http://51.250.8.198:8000/api/drop/${id}`
         fetch(url, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json;charset=utf-8' 
            },
        })
    }
// __________________________обработчик ошибок try catch
// try{
//     let a = 10 + b
//  } catch{
//      console.log("we solve the problem")
// }

// async function fetchUsers() {
//     try{
//         let url = 'https://jsonplaceholder.typicode.com/users'
//         let res = await fetch(url)
//         let data = await res.json()
//         console.log(data);
//      } catch (error){
//          console.log("damn")
//     }
// console.log("...");
// }














