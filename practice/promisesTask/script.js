// const getUserByID = (id) => {
//     let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`;
//     let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
//     fetch(urlUser)
//     .then(res => (res.status == 404) ? console.log('User is not exist') : res.json() 
//     // {
//     //     if (res.status === 404) {
//     //         console.log('User is not exist');
//     //     } else{
//     //        return res.json();
//     //     } 
//     //     }
//     )
//     .then(data => {
//         if (data) {
//             let userPost = {
//                 user:  { name: data.name, email: data.email},
//                 posts: []
//             } 
//             fetch(urlPost)
//             .then(res => res.json())
//             .then(data => {
//                 // data.forEach(elem => userPost.posts.push(elem)
//                 userPost.posts = [...data]
//                 console.log(userPost);
//             })
//         }
//     })
// }

 async function getUserById1(id) {
     let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`;
     let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

     let resUser = await fetch(urlUser);

     if (resUser.status == 404) {
        getErrorMessage('User is nor exist')
        return
     }
     let dataUser = await resUser.json();

     let dataPosts = await fetch(urlPost).then(res => res.json());

     let userPosts = {
         user: {name: dataUser.name, email: dataUser.email},
         posts:  [...dataPosts]
     }
     render(userPosts);
 }

//  const promise = Promise.all(
//      [ fetch(`https://jsonplaceholder.typicode.com/users`), 
//        fetch(`https://jsonplaceholder.typicode.com/users`)
//      ]
//  )

//  promise.then((ress) => Promise.all(ress.map(elem => elem.json())))
//  .then(([res1,res2]) => Promise.all(([res1.json(), res2.json()])))

// getUserById1(5)

// Создать функцию, которая генерирует div с данными о пользователе и всеми его постами. Возвращаемая карточка должна иметь следующую структуру. 

// <div class=”user-container”>
//  <div class=”user”>
//   <p>Имя пользователя</p>
//   <p>Почта пользователя</p>
//  </div>
//  <div class=”posts”>
//   <div class=”item”>
//    <p>Название поста</p>
//    <p>Текст поста</p>
//   </div>
//   <div class=”item”>
//    <p>Название поста</p>
//    <p>Текст поста</p>
//   </div>
//   ….….
//  </div>
// </div>

// const root = document.querySelector('#root');

//  const render = json =>{

//    json.forEach(({name, email}) => {
//    const userContainer = document.createElement("div");
//    const userElem = document.createElement("div");
//    const nameElem = document.createElement("p");
//    const emailElem = document.createElement("p");

//    const postsElem = document.createElement("div");
//    const postItemElem = document.createElement("div");
//    const postNameElem = document.createElement("p");
//    const postTextElem = document.createElement("p");

//     nameElem.innerText = `Name: ${name}`
//     emailElem.innerText = `Username: ${email}`

//         cardElem.classList.add('card');
//         userElem.append(nameElem, emailElem);
//         postsElem.append(postItemElem)
//         postItemElem(postNameElem,postTextElem)
//         userContainer.append(userElem, postsElem);
//         rootElem.append(userContainer);
//      });
//  }

function render(obj) {
  //preparing user-container div
  container_div.innerHTML = ''

  const userElem = document.createElement("div");
  userElem.className = 'user';
  const nameElem = document.createElement("p");
  const emailElem = document.createElement("p");
  
  const postsElem = document.createElement("div");
  postsElem.className = 'posts'

  container_div.append(userElem);
  container_div.append(postsElem);
  //    const postItemElem = document.createElement("div");
  //    const postNameElem = document.createElement("p");
  //    const postTextElem = document.createElement("p");

  Object.values(obj.user).forEach(elem => {
    let p_elem = document.createElement('p');
    p_elem.innerText = elem
    userElem.append(p_elem)
  })


  obj.posts.forEach(elem => {
    let div_item = document.createElement('div');
    div_item.className = 'item';
    postsElem.append(div_item)

    let p_elem_title = document.createElement('h3');
    let p_elem_text = document.createElement('p');

    p_elem_title.innerText = elem.title
    p_elem_text.innerText = elem.body
    div_item.append(p_elem_title, p_elem_text)
  });
}

// -------------------------------
let root_div = document.querySelector('#root')

// создание контейнера
let container_div = document.createElement('div')
container_div.className = 'user-container'
root_div.append(container_div)

// Задание: Напишите фунцию getErrorMessage(), которая построит внутри container_div элемент с текстовым значеием ошибки 
// 'Пользователь не найден.' 
// Можно использовать класс user

function getErrorMessage(text) {
  container_div.innerHTML = '';

  const userElem = document.createElement("div");
  userElem.className = 'user';
  container_div.append(userElem);
  
  let p_elem = document.createElement("p");
  p_elem.innerText = text;
  userElem.append(p_elem)
}
// -----------------------------
// Task 4
// Написать функционал, который позволит по кнопкам (<- и ->) 
// инкрементероивать и декрементировать аргумент функции getUserById

// Функцию getUserById так же необходимо адаптировать под этот функционал
let queue = 1;

let [buttonDecr, buttonIncr] = document.querySelectorAll('button');

buttonDecr.onclick = () => handle('decr')
buttonIncr.onclick = () => handle('incr')


getUserById1(2)

// Доп-задание: 
// Между кнопками отобразите информацию текущего пользователя (его id)

function handle(type) {
  if (type == 'decr') {
    buttonDecr.onclick = () => getUserById1(--queue)
  } else if(type == 'incr'){
    buttonDecr.onclick = () => getUserById1(++queue)
  }
   // 4 task
   let b_elem = document.querySelector('b');
   b_elem.innerText = queue;
}
 