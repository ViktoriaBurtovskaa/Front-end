// В программе объявлена переменная order, которая хранит объект. 
// Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде массива. 
// Результат выведите в консоль. 
// Пример значений переменных:
 let order = { 
    productName: "Велосипед", 
    customerName: "Саша", 
    salesName: "Петя", 
    totalPrice: 15000 
} 
const descriptor = Object.entries(Object.getOwnPropertyDescriptor(order, 'totalPrice'))
console.log(descriptor);

// Пример результата: 
// [['value', 15000], ['writable', true], ['enumerable', true], ['configurable', true]]

// В программе задан объект employees, который содержит ряд свойств и методов. 
// Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. 
// Имена методов добавляться не должны.
//  Пример значений переменных:
let employees = { 
    firstName: "Петя", 
    lastName: "Иванов", 
    ratePerDay: 2500, 
    workingDays: 5, 

    getSalary() { 
        console.log(employees.ratePerDay * employees.workingDays 
        )} 
} 

let properties = [];
    for (let key in employees) {
        if(typeof employees[key] != 'function'){
            properties.push(key)
        }
}
// 2 variant
let propertiess = [];
for (let key in employees) {
    if(typeof employees[key] == 'function'){
       Object.defineProperties(employees,key,{enumerable : false})
    }
}

let string = Object.keys(employees).join(', ')

console.log(string) 


// Пример результата: firstName, lastName, ratePerDay, workingDays


// В программе объявлены переменные name и phone, которые хранят строки. 
// В name указано название заведения, а в phone — его номер телефона. 
// Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, 
// которое проверяет значение свойства phone на вхождение знака + в начале строки. 
// Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. 
// Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
// Получившийся экземпляр класса запишите в переменную deliveryName. 

// Пример значений переменных: 
let name = "Pizza" 
let phone = "81234567890" 

// Пример результата: false

class Delivery{
    constructor(name, phone){
        this.name = name,
        this.phone = phone
    }
    get validPhone(){
        return this.phone.startsWith('+')  
    }
}

let deliveryName =  new Delivery('macDonalds', '+748383892230');

// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. 
// Создайте новый класс User, который наследуется от класса Permissions. 
// Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.


// Входные данные:
class Permission {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}
class User extends Permission{
    
    constructor(name){
        super()
        this.name = name
    }
}
const user1 = new User('Viktoriia')
console.log(user1);