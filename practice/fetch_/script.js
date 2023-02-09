const rootElem = document.querySelector('.root');

const render = products => {
    const products_cards = products.map(({title, description, price})  => {
        const card = document.createElement('div');
        const titleElem = document.createElement('p');
        const priceElem = document.createElement('p');
        const descrElem = document.createElement('p');
        const imgElem = document.createElement('img');
        
        titleElem.innerText = `Title: ${title}`; 
        descrElem.innerText = `Description: ${description}`;
        priceElem.innerText = `Price: ${price}`;
        
        imgElem.setAttribute('src', images[0])
        imgElem.setAttribute('alt', title)

        card.classList.add('card');
        imgElem.classList.add('image')

        card.style.border = price >= 500 ? '3px dashed red' : '3px dashed green'

        card.append(titleElem, descrElem, priceElem);
        return card
    });
    rootElem.append(...products_cards);
}


fetch('https://dummyjson.com/products').then(res => res.json()).then(json => render(json.products))
