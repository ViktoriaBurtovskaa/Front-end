// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), 
//которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру:
// Пример:
 let someObjj = {
 key1: 'value1',
 key2: 'value2',
 key3: 'value3',
 key4: 'value4',
 }

 function getKeys(obj) {
    let keys = [];
    for (const key in obj) {
        keys.push(key)
    }
    return keys;
}

console.log(getKeys(someObjj));

// Результат: ['key1','key2','key3','key4']

// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение
// Пример: [1,2,3,4,5]
    function getAvg(arr) {
    return arr.reduce((avg, el) => avg + el, 0) / arr.length;
    }
console.log(getAvg([1,2,3,4,5]));
// Результат: 3


// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’
//Пример: 
let arr = [1,true,'3','value1',9,'key']

    function countString(arr) {
       let count = 0;
       arr.forEach(el => {
        if (typeof el == 'string') {
        count++
        }
       });
       console.log(count); 
    }
  countString(arr)
// Результат: 3

// Задан объект someObj с произвольными сво-ми. 
//Напишите функцию getEntries(), которая в качестве аргумента получает объект 
//и возвращает результат работы метода Object.entries() согласно примеру:

// Пример:
 let someObj = {
 key1: 'value1',
 key2: 'value2',
 key3: 'value3',
 key4: 'value4',
}

function getEntries(obj){
    let arrEntries = [];
   for (const key in obj) {
    arrEntries.push([key, obj[key]])
   }
  return arrEntries;
}
console.log(getEntries(someObj)); 
// Примечание: Использовать класс Object нельзя

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]

// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

	
// Пример: 
const array = [1,true,'3','value1',9,'key'];
const obj = {};

array.forEach((el,i) => {
	obj[`key${+i + 1}`] = el;
});
console.log(obj);


// 	Результат: 
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }
	

