// --------
// let user1 = {
//     name: 'Alex',
//     age: 30,
//     salary: 1500,
//     sayHi(){
//         console.log(`Пользователь ${user1.name} говорит привет!`)
//     }
// }

// let user2 = {
//     name: 'Neena',
//     age: 25,
//     salary: 2000,
//     sayHi(){
//         console.log(`Пользователь ${user2.name} говорит привет!`)
//     }
// }

// user1.sayHi()
// user2.sayHi()

// Шаблонизация через Function declaration
// function createUser(name, age, salary){
//     return {
//         name,
//         age,
//         salary,
//         sayHi(){
//             console.log(`Пользователь ${this.name} говорит привет!`)
//         }
//     }
// }

// let user1 = createUser("Alex", 30, 1500)
// console.log(user1);

// user1.sayHi();

// //  template class
// class User{
//     constructor(name,age,salary){
//         this.name = name
//         this.age = age
//         this.salary = salary
//         this.hasJob = true
//     }
//     sayHi(){
//         console.log(`Пользователь ${this.name} говорит привет!`)
//     }
// }

// let user11 = new User("Alexa", 20, 1500);
// console.log(user11);

// // Напишите класс MathNum, который будет определять в экземплярах: 
// // 1) Свойство number - числовое значение
// // 2) Метод quad(), который должен выводить в консоль квадрат сво-ва number
// // 3) Метод sqrt(), который должен выводить в консоль корень сво-ва number

// class MathNum{
//     constructor(num){
//         if (typeof num != "number") {
//             console.log("Error: num is not a number");
//         } else{
//             this.number = num
//         }
//     }
//     squad (){
//         console.log(Math.pow(this.number,2));
//     }
//     sqrt (){
//         console.log(Math.pow(this.number,0.5));
//     }
// }

// const num = new MathNum(3)
// num.squad()

// class Example{
//     constructor(prop){
//         this.prop = prop
//     }
//     method(){
//         console.log("method");
//     }
//     //static method
//     static staticMethod(){
//         console.log("method");
//     }
// }

// let ex = new Example("test");

// // Задача 1
// // 1) Создать класс Object2
// // 2) Сделать полную копию метода values() примечание (метод должен быть статичным, метод должен передавать объект и возвращать новый массив)


// class Object2{
//     static values(obj){
//         let objArr = [];
//         for (const key in obj) {
//           objArr.push(obj[key])
//         }
//         return objArr;
//     }
//     static entries(obj){
//         let objArr = [];
//         for (let key in obj) {
//             objArr.push([key,obj[key]])  
//             }
//             return objArr;
//         }
//     }

//  let user = {name: 'name', salary: 100}
//  console.log(Object.values(user))
//  console.log(Object2.entries(user))
//  console.log(Object2.values(user))

 class Users{
    static count = 0


    constructor(name, age){
        this.name = name
        this,age = age
        ++Users.count
    }
 }

 let user_11 = new Users("Alex", 30);
 let user_12 = new Users("Alex", 30);
 let user_13 = new Users("Alex", 30);

console.log(Users.count);

// get set
let pet = {
    name: "Sharik",
    breed: "Pudel",
    get nameBreed(){
        return `${this.name} - is a ${this.breed}`
    }
}

console.log(pet.nameBreed); //Sharik - is a Pudel

let objj = {
    numbers: ["One", "Two", "Tree", "Four"],
   get lastValue(){
    return this.numbers[this.numbers.length - 1]
    },

}

// Задача:
// задан объект obj. Определите новое сво-во которое будет хранить разницу первого и последнего элемента массива array

//  let obj = {
//      numbers: [50,40,30,10],
//     get difference(){
//         return Math.abs(this.array[0] - this.array[this.array.length - 1]);
//     },
//     set setArray(value){
//        this.numbers = value;
//     }
//  }
//  console.log(obj.difference);

//  class User{
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }
//     get getAge(){
//         return `Year of birth ${this.name} - ${new Date().getFullYear() - this.age}`
//     }
//     set setAge(year){
//         this.age = new Date().getFullYear() - year
//     }
//  }
//  let aUser = new User("Alex",25)
//  user_11.setAge = 1984
//  console.log(aUser.getAge, aUser.age);


class User{
    #string = 'test'
    get readString(){
        return this.#string;
    }

    set setString(value){
        if (typeof value != 'string') {
            throw new Error('non-valid');
        } else{
            this.#string = value
        }
    }
}