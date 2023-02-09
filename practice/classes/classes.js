// 1. Реализовать класс Car со следующими свойствами:
// company_name, model, color, country, volume
// Создать экземпляр этого класса
// Вывести в консоль все свойства созданного экземпляра класса

class Car{
    constructor(company_name, model, color, country, volume){
        this.company_name = company_name;
        this.model = model;
        this.color = color;
        this.country = country;
        this.volume = volume;
    }
    // Реализовать метод get_car_info, который будет выводить в консоль строку в формате: <Модель> (<Компания>, <Страна>): <Объем>.
    get_car_info(){
        return `${this.model} (${this.company_name}, ${this.country}): ${this.volume}  `
    }
}

let lexus = new Car("Toyota", "Lexus RX450h", "black", "Japan", 3.5)
console.log(lexus.get_car_info());

// 2. Реализуйте класс Group (групп), который будет иметь следующие свойства: 
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы
class Group{
    constructor(name, major, number = 15 ){ 
        this.name = name;
        this.major = major;
        this.number = number;
    }
    add_student(){ 
    return this.number++;
    }
    delete_student(){ 
    return this.number++;
    }
}
const group1 = new Group("37m", "Frontnend")
const group2 = new Group("37-38m", "Backnend", 33)
group1.add_student()
group2.delete_student()
console.log(group1);
console.log(group2);

// 3. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
//rate (ставка за день работы), days (количество отработанных дней). 
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализйуте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней amount)
class Worker{
    constructor(name, surname, rate, days ){ 
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;

    }
    getSalary(){ 
        return this.rate * this.days;
    }
    add_days(amount){ 
        this.days+=amount;
    }
    delete_days(amount){ 
        this.days-=amount;
    }
}

const worker1 = new Worker("Alex", "Aloy", 15, 199);
const worker2 = new Worker("Ivan", "Ivanov", 15, 10);
console.log(worker1.getSalary() + worker2.getSalary());

// Реализуйте класс Student (студент), который будет иметь следующие свойства:
// name (имя), lastname(фамилия), major (специализация), grade (оценка)
// Реализйуте метод get_info (выводит в консоль строку 'Имя: <Имя>, Фамилия: <Фамилия>, Специализация <специализация>, Средний балл: <оценка>')
// Реализуйте методы change_grade_up и change_grade_down, которые будет изменять свойство grade на переданное значение

class Student {
    constructor(name, lastname, major, grade){
      this.name = name,
      this.lastname = lastname,
      this.major = major,
      this.grade = grade
    }
  
    getInfo(){
      console.log(`Имя: ${this.name}, Фамилия: ${this.lastname}, Специализация: ${this.major}, Средний балл: ${this.grade}`)
    }
  
    change_grade_up(amount) {
      this.grade += amount
    }
  
    change_grade_down(amount) {
      this.grade -= amount
    }
  }
  
  const student1 = new Student('Anton', 'Ushanov', 'JS', 4.5);

// 2. Написать функцию, которая будет создавать экземпляры класса Student и собирать их в один массив

const students = [];

create_student = (name, lastname, major, grade) => {
    const student = new Student(name, lastname,major,grade);
    students.push(student)
};

create_student('Anton', 'Ushanov', 'JS', 4.5);
create_student('Irina', 'Petrova', 'Python', 3.5);
console.log(students);