let products_container = document.querySelector('.products_container')

const getProductFetch = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(json => render(json))
}
let defaultId = 1;
getProductFetch(1)


const render = ({ images, title, price, rating}) => {
    const card = document.createElement('div')
        
    const productImg = document.createElement('img');
    const productTitle = document.createElement('p');
    const productPrice = document.createElement('p');
    const productRating = document.createElement('span');
    const starsRating = document.createElement('div');

    productImg.setAttribute('src', images[0]);
    productTitle.innerText = `Title: ${title}`;
    productPrice.innerText = `Price: ${price}$`;
console.log(rating);
    productRating.innerHTML = drawRating(rating);
   
    card.classList.add('product_card');
    productTitle.classList.add('product_title');
    productImg.classList.add('product_img');
 

    card.append(productImg, productTitle, productPrice, starsRating);
    starsRating.append(productRating)
    products_container.append(card)
}

function drawRating(rating) {
    let fullStars = Math.floor(rating); // количество заполненных звезд
    let halfStar = rating % 1 >= 0.5; // флаг, указывающий на наличие половинки звезды
    let emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // количество пустых звезд

    let stars = '';
    for (let i = 1; i <= fullStars; i++) {
      stars += '<i class="fas fa-star yellow"></i>'; // filled yellow star
    }
    if (halfStar) {
      stars += 'fas fa-star-half-alt'; // half-filled yellow star
    }
    for (let i = 1; i <= emptyStars; i++) {
      stars += '<i class="far fa-star"></i>'; // empty star
    }
    return stars;
}


