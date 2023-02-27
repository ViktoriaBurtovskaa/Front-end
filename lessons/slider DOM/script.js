const div_root = document.querySelector('#root')

let slider_index = 0;

const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-06/thumbs/1624078784_49-phonoteka_org-p-oboi-na-rabochii-stol-zima-krasivie-krasiv-58.jpg',
    'https://oir.mobi/uploads/posts/2021-04/thumbs/1619749242_16-oir_mobi-p-samie-krasivie-zhivotnie-mira-zhivotnie-kr-17.jpg',
    'https://oir.mobi/uploads/posts/2019-11/1574901056_pejzazhi-250.jpg',
    'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg'
]

const frame = document.createElement('div')
const cards = document.createElement('div')
const triggers = document.createElement('div')

const left_btn  = document.createElement('button')
const right_btn  = document.createElement('button')

left_btn.innerText = '<'
right_btn.innerText = '>'

triggers.className = 'trigger'

triggers.append(left_btn,right_btn)


for (const elem of images) {
   let card = document.createElement('div')
   card.className = 'card'
   card.style.backgroundImage = `url(${elem})`
   cards.append(card)
} 

frame.className = 'frame'
cards.className = 'cards'

frame.append(cards,triggers)
div_root.append(frame) 

function goRight() {
    if (slider_index < images.length - 1) {
        slider_index++
        cards.style.left = `${-1 * slider_index * 500}px`
    } else{
        slider_index = 0
        cards.style.left = `${-1 * slider_index * 500}px`
    }
}

function goLeft() {
    if (slider_index != 0) {
        slider_index--
        cards.style.left = `${-1 * slider_index * 500}px`
    } else{
        slider_index = images.length - 1
        cards.style.left = `${-1 * slider_index * 500}px`
    }
}
  
right_btn.addEventListener('click', goRight)
left_btn.addEventListener('click', goLeft)

function create_rounds() {
    const container = document.createElement('div')
    container.className = 'rounds' 

    for (let i = 0; i < images.length; i++) {
        const btn = document.createElement('button')
        container.append(btn)

        btn.addEventListener('click', () => {
            slider_index = i
            cards.style.left = `${-1 * slider_index * 500}px`

            const buttons = btn.parentElement.childNodes
            buttons.forEach(elem => elem.classList.remove('active'))

            btn.classList.add('active')
        })
    }
    frame.append(container)
}

create_rounds()
