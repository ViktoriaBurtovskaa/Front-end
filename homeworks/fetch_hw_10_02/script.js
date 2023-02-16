let url = "https://dummyjson.com/products";

// fetch
fetch(url).then(res => res.json()).then(json => render(json.products))
const container = document.querySelector('.container')

//render
function render(products) {
    const product = products.map(({images, title, price, rating, description}) => {
        const card = document.createElement('div')
        
        const productImg = document.createElement('img');
        const productTitle = document.createElement('p');
        const productPrice = document.createElement('p');
        const productRating = document.createElement('span');
        const starsRating = document.createElement('div');
        const productDescription = document.createElement('p');


        productImg.setAttribute('src', images[0]);
        productTitle.innerText = `Title: ${title}`;
        productPrice.innerText = `Price: ${price}$`;
        productDescription.innerText = description;

        productRating.innerHTML = getRating(rating);
       
        card.classList.add('product_card');
        productTitle.classList.add('product_title');
        productImg.classList.add('product_img');
        productDescription.classList.add('product_descr');


        card.append(productImg, productTitle, productPrice, starsRating);
        starsRating.append(productRating)

        card.addEventListener('mouseover', () => {
          card.appendChild(productDescription);
        });
        
        card.addEventListener('mouseout', () => {
          card.removeChild(productDescription);
        });
        
        return card;
    })
    container.append(...product)
}

//rating
function getRating(n) {
    n = Math.round(n);
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= n) {
        stars += '<span class="fa fa-star active" aria-hidden="true"></span>';
      } else {
        stars += '<span class="fa fa-star" aria-hidden="true"></span>';
      }
    }
    return stars;
  }
