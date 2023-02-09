//  Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. Примечание: инициализация дат должна быть внутри функции
function checkDate() {
    let today = new Date();
    let dayToday = today.getDate();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let lastDayOfMonth = new Date(year,month, 0).getDate();
    let rest = lastDayOfMonth - dayToday;
    return `${rest} ${rest > 1 ? "days" : "day"} left until the end of the month`;
}
console.log(checkDate());

function checkDate1() {
    let dateNow = new Date();
    let dateNext = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 1);
    let result = (dateNext.getTime() - dateNow.getTime()) / (1000 * 60 *60 * 24);
    console.log(Math.floor(result));
}
checkDate1()

//  Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
//  Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
//  Если пятница была вчера - “Пятница была вчера”
//  Если пятница будет завтра - “Завтра пятница!”
//  Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

function isItFridayToday() {
    let today = new Date();
    let currentDay = today.getDay();
    if (currentDay === 5) {
    console.log( "Сегодня пятница!");
    }
    else if (currentDay === 6)  {
    console.log("Пятница была вчера"); 
    }
    else if (currentDay === 4)  {
    console.log("Завтра пятница!"); 
    }
    else{
        console.log(`Пятница будет через ${5 - currentDay} ${currentDay == 0 ? "дней" : "дня"}`);
    }
}
isItFridayToday();

function isItFriday() {
    let day = new Date().getDay();
    let array = ["Пятница будет через 5 дней",
    "Пятница будет через 4 дня",
    "Пятница будет через 3 дня",
    "Пятница будет через 2 дня",
    "Завтра пятница!",
    "Сегодня пятница!",
    "Пятница была вчера"
]
    console.log(array[day]);
}

//  Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:

//  Пример:
  let prices = [ 
  'Цена товара - 1200$', 
  'Стоимость - 500$', 
  'Цена не определена', 
  '9999',
  'Ценовая категория - больше 300$',
  'Цена за услугу 500 EUR',
   ]

console.log(getInfo(prices))

//  Результат: [3,3]

function getInfo(prices) {
    let newArr = [];
    let countWord = 0;
    let countSign = 0;
        prices.forEach(el => {
            let checkWord = el.substring(0,el.indexOf(' '));
        if (checkWord.startsWith("Цена")) {
            countWord++;
        }
        if ( el.slice(-1) === "$") {
            countSign++;
        }
    });
    newArr.push(countWord);
    newArr.push(countSign);
    return newArr;
}

//  Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру: 
  let arrays = [ 
  '89840959944 exampleonemain@mail.ru', 
  '+79840959933 forreason@yandex.net', 
  'somemail@mail.ru', 
  '89840959900 example@gmil.ru', 
  '+79840959911', 
  'grandthere@mail.ru',
  'jetpackfor@gmail.ru',
   '89840959922 some@yandex.com',
   ]

function sortInfo(arr) {
    let phones = [];
    let emails = [];
    arr.forEach(el => {
    const dividedArr= el.split(" ");
        dividedArr.forEach(elem => {
            if (elem.includes("@")) {
                emails.push(elem);
            }
            else{
                phones.push(elem);
            }
        });
    })
    console.log(phones,emails);
}
sortInfo(arrays);
//  Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922'] ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']


//  Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

//  Пример:
  	let cards = [ 
  '4000 0012 0056 9499', 
  '4000 0013 5456 7379', 
  '4000 0014 1456 9869', 
  '4000 0015 3466 7859', 
  '4000 0016 3556 6899', 
  '4000 0017 4456 4699'
  ]
function hideDigits() {
    let newCards = [];
    cards.forEach(el => {
    const hiddenCards = el.replace(el.substring(4,15), "*****"); 
    newCards.push(hiddenCards)
    })
    return newCards;
}
console.log(hideDigits());
//  Результат: [
//  '4000*****9499',
//  '4000*****7379',
//  '4000*****9869',
//  '4000*****7859',
//  '4000*****6899',
//  '4000*****4699'
//  ]

cards = cards.map(elem => elem.replace(elem.slice(4,-4), "*".repeat(5)));
console.log(cards);