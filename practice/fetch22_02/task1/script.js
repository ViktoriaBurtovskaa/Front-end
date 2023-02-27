const products_container = document.querySelector('.products_container');
const add_product_form = document.querySelector('.add_product_form');

const create_new_product = 

add_product_form.addEventListener('submit', event => {
    event.preventDefault();
    const {title, price} = event.target;
    const product_item ={
        title: title.value,
        price: +price.value,
    }
    add_product(product_item)
    title.value = '';
    price.value = '';
})

const cards_render = (json) => {
    const products_cards = json.map(({images,title,price}) => {
        const cardElem = document.createElement('div');
        const imgElem = document.createElement('img');
        const titleElem = document.createElement('p');
        const priceElem = document.createElement('p');

        titleElem.innerText = `Title: ${title}`
        priceElem.innerText = `Price: ${price}`
        
        imgElem.src = images[0];
        imgElem.alt = title;

        cardElem.classList.add('product_card')

        cardElem.append(imgElem, titleElem, priceElem)
        return cardElem
    });
    products_container.append(...products_cards)
}


fetch('https://dummyjson.com/products').then(res => res.json()).then(json => cards_render(json.products))

const add_product = (obj_from_form) => {
    fetch('https://dummyjson.com/products/add',{
            method:"POST",
            body:JSON.stringify(obj_from_form),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
