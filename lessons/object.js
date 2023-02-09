
// // Задача 1 
// // Используя цикл, выведите все значения объекта с числовым набором данных.

// // // // Примеp
// //  let obj = {
// //     char1 : 1,
// //     char2 : 'string',
// //     char3 : 3,
// //     char4 : true,
// //     char5 : 'false',
// //     char6 : 1,
// //  }
// // Результат:
// // 1
// // 3
// // 1


//     // for (let key in obj) {
//     //     if (typeof obj[key] == "number") {
//     //         console.log(obj[key]);
//     //     }
//     // }
// // Используя цикл, выведите значения сво-св, у которых 
// // значение ключа завершатся на четное число. 

// // Пример:
// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1,
//  }

// for (const key in obj) {
//     const lastChar = +key.slice(key.length - 1);
//     if (lastChar % 2 == 0) {
//        console.log(obj[key]);
        
//     }
// }
// // Результат:
// // string
// // true
// // 1

// // copy objects
// let obj1 = {name: "Tigran", age: 30};
// //1.
// // let obj2 = Object.assign({}, obj1)
// //2.
// // let obj2 = {...obj1};
// //3.
// let obj1Copy = JSON.parse(JSON.stringify(obj1));

// console.log(obj1Copy);

// // Задача 1
// // Заданы три объекта: 
//  let user_11 = {id: 1}
//  let user_12 = {username: 'user'}
//  let user_2 = {
//      id: 1,
//      username: 'user'
//  }
// // Задача: объедините user_11 и user_12 в один объект 
// // и сравните результат с объектом user_2. 
// // В качестве ответа необходимо получить булевый тип
// let user_11_12 = Object.assign({}, user_11, user_12);
// console.log(JSON.stringify(user_11_12) == JSON.stringify(user_2));
// // Задача 2: 
// // Напишите функцию checkObj(obj), которая проверяет, действительно 
// // ли объект obj пустой {}. Функция должна вернуть булевый тип
// // Подсказка: можно попробовать преобразовать объект в массив

// let user1 = {} 
// let user2 = {id: 1}
// function checkObj(obj) {
//     let objArr = Object.keys(obj);
//         if (objArr.length === 0) {
//             return false;
//         }
//         return true;
// }
// function checkObj2(obj) {
//     return Object.keys(obj).length == 0;
// }
// function checkObj3(obj) {
//     return JSON.stringify(obj)== {}; 
// }

// console.log(checkObj(user1));
// console.log(checkObj(user2));

// function checkObjectLength(obj1,obj2) {
//     let objKeys1Length = Object.keys(obj1).length;
//     let objKeys2Length = Object.keys(obj2).length;
//     if (objKeys1Length == objKeys2Length) {
//         return true
//     }
// return false;
// }

// function checkObjectLength1(obj1,obj2) {
//  return Object.keys(obj1).length == Object.keys(obj2).length;
// }

// console.log(checkObjectLength({test: 10},{great: 10} ));


// let array = [
//     {id : 1, name: 'Tigran'},
//     [2, 'Alex'],
//     {id: 3, name: 'Neena'},
//     [3, 'Steven']
// ]

// // Задание: сформируйте из массива array два новых массива usersArray и usersObjs,
// // элементы которых будут содержать вложенный массив и объект соответственно
// let userArray =array.filter(elem => Array.isArray(elem));
// let usersObj = array.filter(elem => !Array.isArray(elem));

//---------------------------------------------------------------
// Деструктуризация
let objj = {a: 10,b: 20,c: 30}; 
let {a,b,c} = objj; 

let array = [2, 3, 4, 5]
let arrayCopy = [...array, 2345]
console.log(arrayCopy);
let arrayCopy1 = [...array, 2345, ...array]
console.log(arrayCopy1);


