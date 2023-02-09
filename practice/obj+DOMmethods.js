// // // 1. Создать функцию, которая принимает в качестве аргументов объект и ключ объекта и возвращает значение по этому ключу

// // const user = {
// //     firstname: 'Oleg',
// //     age: 30
// //   }
  
// //   const product = {
// //     title: 'Apple',
// //     price: 500,
// //     country: 'Germany'
// //   }
  
// //   console.log(objValue(user, 'firstname')); // 'Oleg'
// //   console.log(objValue(user, 'age')); // 30
  
// //   console.log(objValue(product, 'price')); // 500
// //   console.log(objValue(product, 'country')); // 'Germany'
  

// function objectValue(obj, key) {
//     return obj[key];
// }

// const objValue = (obj, key) => obj[key];

// const user = {
//     firstname: "Oleg",
//     age: 30,
// }

// const product = {
//          title: 'Apple',
//          price: 500,
//          country: 'Germany'
//    }


// product.price = 700;
// console.log(product);
// product.price += 700;
// console.log(product);

// const users = [
//     {
//         first_name: "Ivan",
//         last_name: "Ivanov",
//         age: 30,
//         salary: 500
//     }, 
//     {
//         first_name: "Olga",
//         last_name: "Petrova",
//         age: 12,
//     }, 
// ]
// console.log(users[0].hasOwnProperty("salary"));   

// const salaries = users.map(el => el.salary ? "+" : "-")
// console.log(salaries);


// const change_age = () => {
//     const target_obj= users.find(el => el.age === 30);
//     target_obj.age = 85;
//     return target_obj;
// }

// console.log( change_age(users));

// --------------------------------------------------------------------------------------------------------------------

const products = [
    {
      id: 1,
      title: 'Apple',
      price: 500,
      discount: 0.15
    },
    {
      id: 2,
      title: 'Orange',
      price: 400,
      discount: 0.05
    },
    {
      id: 3,
      title: 'Pineapple',
      price: 560,
      discount: 0.25
    },
    {
      id: 4,
      title: 'Kiwi',
      price: 50,
      discount: 0.1
    },
    {
      id: 5,
      title: 'Lime',
      price: 120,
      discount: 0.07
    }
  ]

  const product = {
    id: 5,
    title: 'Lime',
    price: 120,
    discount: 0.07
};
const root = document.querySelector(".root");

// 1. Используя объект product, для товара создать карточку (title, price)
// const card = document.createElement("div");
// const titleElem = document.createElement("p");
// const priceElem = document.createElement("p");

// const {title, price } = product;
// titleElem.innerText = `Title: ${title}`;
// priceElem.innerText = `Price: ${price}`;

// card.append(titleElem, priceElem);
// root.append(card)

//   // 2. Используя массив products, для каждого товара создать карточку (title, price)

// // products.forEach(({price,title}) => {
// //     const card = document.createElement("div");
// //     const titleElem = document.createElement("p");
// //     const priceElem = document.createElement("p");

// //     titleElem.innerText = `Title: ${title}`;
// //     priceElem.innerText = `Price: ${price}$`;

// //     card.append(titleElem, priceElem);
// //     })
// //     root.append(...cards)

// const cards = products.map(({price,title}) => {
//     const card = document.createElement("div");
//     const titleElem = document.createElement("p");
//     const priceElem = document.createElement("p");

//     titleElem.innerText = `Title: ${title}`;
//     priceElem.innerText = `Price: ${price}$`;

//     card.append(titleElem, priceElem);
//     return card
//     })
//     root.append(...cards)

    // 4. Используя массив products, для каждого товара, цена которого больше или равно 500, создайте карточку товара со следующей информацией - Наименование, старая цена, цена со скидкой. Стилизовать старую цену - сделать ее серого цвета. А новую цену - красного цвета и крупнее шрифт

const expensiveProducts = products.filter(el => el.price >= 500);
expensiveProducts.forEach(({title, price, discount}) => {
    const card = document.createElement("div");
    const titleElem = document.createElement("p");
    const oldPriceElem = document.createElement("p");
    const newPriceElem = document.createElement("p");

    const discountPrice = price - (price * discount);
    titleElem.innerText = `Title: ${title}`;
    oldPriceElem.innerText = `Old Price: ${price}$`;
    newPriceElem.innerText = `New Price: ${discountPrice}$`;

    oldPriceElem.classList.add("old_price");
    // newPriceElem.classList.add("new_price");
    newPriceElem.style.color = discountPrice > 423 ? "red" : "green";

    card.append(titleElem, oldPriceElem, newPriceElem);
    root.append(card);
});

