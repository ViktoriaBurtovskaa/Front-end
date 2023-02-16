// сoздание и удаление и пермещение элементов по DOM-узлам
//------------------------------------
//Coздание элементов

// 1) Элемент нужно создать
    // 1. Coздание элементов(createElement)
    // 2. Заполнение элемента(innerText,className....)
    // 3. Вставка элемента в DOM

// 2) Элемент уже существует
    // 1. Поиск элементов(querySelector)
    // 2. Изменение элемента по ТЗ(перемещение, удаление)

// const div_elem = document.querySelector('.div_elem')
// let p_elems = document.querySelectorAll('p')
// p_elems.forEach((elem) => elem.className = `elem${elem.innerText}`)

// Задание 1. 
// 1. Создайте ul список внутри body и поместите туда 3 li элемента с текстовым сво-вом (1,2,3)
// let list = document.createElement('ul');
// document.body.prepend(list)

// for (let i = 1; i <= 3; i++) {
//     let list_item = document.createElement('li')
//     list_item.innerText = i
//     list.append(list_item);
// }
// ------------------------
// задание 1
// Сформировать содержимое li(3) элемента в полужирный шрифт
// let list_elem4 = document.body.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling
// list_elem4.innerHTML = '<b>3</b>'

// let li_3 = document.body.firstElementChild.firstElementChild.lastElementChild.previousElementSibling
// li_3.innerHTML = `<b>${li_3.innerText}</b>`
// console.log(li_3);
// задание 2
// Заменить содержимое заголовка h2 на обычный текст
// let div_h2 = document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
// div_h2.innerText = div_h2.innerText.replace(/<(?!b\s*\/?)[^>]+>/g, '')
// console.log(div_h2);

let h2_elem = document.body.firstElementChild.lastElementChild.firstElementChild
h2_elem.innerHTML = h2_elem.innerText
console.log(h2_elem);