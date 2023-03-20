let menu = document.querySelector('.menu')
let content = document.querySelector('.content')


menu.addEventListener('click', console.log(123))
let setModal = true

function openMenu() {
    if (!setModal) {
    let menu_elems = ['Home', 'About', 'COntacts', 'Q&A', 'Feedback']
    let modal_div = document.createElement('div')
    modal_div.className = 'modal'
    for (let elem of menu_elems) {
        let p_elem = document.createElement('p')
        p_elem.innerText = elem
        modal_div.append(p_elem)
    }
        content.after(modal_div)
    } else{
        let modal = document.querySelector('.modal')
        modal.remove()
    }
    setModal = !setModal
}

