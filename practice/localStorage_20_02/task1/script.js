// 1. Дан массив. Сформировать новый массив, в который попадут только имена, длина которых равна 4 символам. Записать этот массив в локал сторадж.

// const firstnames = ['Anton', 'Irina', 'Olga', 'Ivan', 'Antonina'];

// const firstnames_short = firstnames.filter(el => el.length === 4);

// localStorage.setItem('firstnames_short', JSON.stringify(firstnames_short));

// 2. Дан массив с товарами. Сформировать карточки товаров и отобразить их в браузере
// Добавить форму с двумя инпутами для сбора данных о названии продукта и его цене. По умолчанию все добавляемые продукты долдны иметь свойство in_stock со значением true
// При отправке формы выводить собранные данные из формы в консоль в виде объекта
// При отправке формы отрисовывать карточку из собранных данных
// При обновлении страницы добавленные карточки не пропадают
const goods = [
    {
      id: 1, 
      product: 'iPhone 14',
      price: 1500,
      in_stock: true
    },
    {
      id: 2, 
      product: 'Samsung A53',
      price: 1000,
      in_stock: true
    },
    {
      id: 3, 
      product: 'Huawei 11',
      price: 900,
      in_stock: true
    },
    {
      id: 4, 
      product: 'Nokia N4',
      price: 500,
      in_stock: false
    },
    {
      id: 5, 
      product: 'iPhone 12',
      price: 1100,
      in_stock: false
    }
  ]

let root = document.querySelector('.root')
let add_product_name = document.querySelector('.add_product_form')

const stored_goods = JSON.parse(localStorage.getItem('goods')) ?? goods

add_product_name.addEventListener('submit', event => {
    event.preventDefault();
    const {product,price} = event.target;
    stored_goods.push({
        id: Date.now(),
        product: product.value,
        price: price.value,
        in_stock: true
    });
    localStorage.setItem('goods', JSON.stringify(goods))
    render_cards(goods)
    product.value = ''
    price.value = ''
})

const render_cards = goods_arr => {
    root.innerText = ''
    const goods_card = goods_arr.map(({product,price,in_stock}) => {
    const card = document.createElement('div')
    const titleElem = document.createElement('p')
    const priceElem = document.createElement('p')
    const inStockElem = document.createElement('p')

    titleElem.innerText = `Title: ${product}`
    priceElem.innerText = `Title: ${price}`
    inStockElem.innerText = `Title: ${in_stock ? 'available' : 'not available'}`

    card.classList.add('cards')
    card.style.backgroundColor = in_stock ? 'lightgreen' : 'lightgray'

    card.append(titleElem,priceElem,inStockElem)
    return card
})
root.append(...goods_card)
} 

render_cards(stored_goods)

