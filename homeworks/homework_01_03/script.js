const burger = document.querySelector('.burger');
const nav__list = document.querySelector('.nav__list');
const fixedBlocks = document.querySelectorAll('.fixed');

if (burger) {
	burger.addEventListener('click', function () {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		if (document.body.classList.contains('lock')) {
			burger_close();
		} else {
			burger_open(paddingOffset);
		}
	});
	nav__list.childNodes.forEach((el) => {
		el.addEventListener('click', () => {
			if (el.parentElement.classList.contains('active')) burger_close();
		});
	});
}

function burger_open(element) {
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = element;
	});
	document.body.style.paddingRight = element;
	document.body.classList.add('lock');
	burger.classList.add('active');
	nav__list.classList.add('active');
}

function burger_close() {
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = '0';
	});
	document.body.style.paddingRight = '0';
	document.body.classList.remove('lock');
	burger.classList.remove('active');
	nav__list.classList.remove('active');
}

// Form ========================================
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const dataList = new FormData(e.target);
	const data = Object.fromEntries(dataList);
	console.log(data);
	e.target.reset();
});

// Sliders =============================================

function setHandling(slider_wrapper, num) {
	const wrapper_name = slider_wrapper.className.split(' ')[0].split('__')[0];
	let slide_counter = 0;
	const slider_navigation = document.createElement('div');
	const slider_paginations = document.createElement('ul');

	for (let i = 0; i < num; i++) {
		const btn = document.createElement('button');
		btn.className =
			i == 0
				? `pagination__btn pagination__btn--${wrapper_name} active`
				: `pagination__btn pagination__btn--${wrapper_name}`;

		btn.addEventListener('click', (e) => {
			e.preventDefault();
			slide_counter = i;
			mooveSlide(slide_counter, slider_wrapper);
		});
		slider_paginations.append(btn);
	}

	const slider_buttons = document.createElement('div');
	const btn_prev = document.createElement('button');
	const btn_next = document.createElement('button');

	slider_navigation.className = 'slider__navigation';
	slider_paginations.className = 'slider__paginations';
	slider_buttons.className = 'slider__buttons';
	btn_prev.classList.add('slider__button', `slider__button--${wrapper_name}`);
	btn_next.classList.add('slider__button', `slider__button--${wrapper_name}`);

	btn_prev.innerText = '<';
	btn_next.innerText = '>';

	btn_prev.addEventListener('click', (e) => {
		e.preventDefault();
		slide_counter == 0 ? (slide_counter = num - 1) : --slide_counter;
		mooveSlide(slide_counter, slider_wrapper);
	});

	btn_next.addEventListener('click', (e) => {
		e.preventDefault();
		slide_counter == num - 1 ? (slide_counter = 0) : ++slide_counter;
		mooveSlide(slide_counter, slider_wrapper);
	});

	slider_buttons.append(btn_prev, btn_next);
	slider_navigation.append(slider_paginations, slider_buttons);
	return slider_navigation;
}

function mooveSlide(position, slider_wrapper) {
	slider_wrapper.nextSibling.childNodes.forEach((el) =>
		el.childNodes.forEach((elem) => {
			elem.classList.remove('active');
		})
	);

	let slider_width = slider_wrapper.firstChild.offsetWidth;

	slider_wrapper.style.left = `${-1 * position * slider_width}px`;

	slider_wrapper.nextSibling.firstChild.childNodes[position].classList.add(
		'active'
	);
}

function renderSlider(slider, data) {
	const slider_name = slider.className.split(' ')[0].split('__')[0];
	const slider__wrapper = document.createElement('ul');

	slider__wrapper.classList.add(`${slider_name}__wrapper`, 'slider__wrapper');

	for (let elem of data) {
		const slide_elem = document.createElement('li');
		const slide_container = document.createElement('div');

		slide_elem.classList.add('slide');
		slide_container.classList.add('slide__container');

		slide_elem.style.minWidth = slider.offsetWidth + 'px';

		slide_container.append(...elem);
		slide_elem.append(slide_container);
		slider__wrapper.append(slide_elem);

		window.addEventListener('resize', function (e) {
			slide_elem.style.minWidth = slider.offsetWidth + 'px';
		});
	}

	slider.append(slider__wrapper, setHandling(slider__wrapper, data.length));
}

// Head Slider ******* =================================
const head_slider_data = [
	{
		title: 'Бухгалтерские услуги в вашем городе',
		event: 'Наша презентация',
	},
	{
		title: 'Бухгалтерские услуги в вашем городе',
		event: 'Наша презентация',
	},
	{
		title: 'Бухгалтерские услуги в вашем городе',
		event: 'Наша презентация',
	},
	{
		title: 'Бухгалтерские услуги в вашем городе',
		event: 'Наша презентация',
	},
];

const head__slider = document.querySelector('.head__slider');

const head_slides = head_slider_data.map(({ title, event }) => {
	const h2_elem = document.createElement('h2');
	const button_elem = document.createElement('button');

	h2_elem.classList.add('title', 'head__title');
	button_elem.classList.add('button');

	h2_elem.innerText = title;
	button_elem.innerText = event;

	return [h2_elem, button_elem];
});
renderSlider(head__slider, head_slides);

// Client Slider ******* =================================
const client_slider_data = [
	{ url: './media/clients/microsoft.png', alt: 'LOGO microsoft' },
	{ url: './media/clients/apple.png', alt: 'LOGO apple' },
	{ url: './media/clients/linux.png', alt: 'LOGO linux' },
	{ url: './media/clients/android.png', alt: 'LOGO android' },
	{ url: './media/clients/microsoft.png', alt: 'LOGO microsoft' },
	{ url: './media/clients/apple.png', alt: 'LOGO apple' },
	{ url: './media/clients/linux.png', alt: 'LOGO linux' },
	{ url: './media/clients/android.png', alt: 'LOGO android' },
	{ url: './media/clients/microsoft.png', alt: 'LOGO microsoft' },
	{ url: './media/clients/apple.png', alt: 'LOGO apple' },
	{ url: './media/clients/linux.png', alt: 'LOGO linux' },
	{ url: './media/clients/android.png', alt: 'LOGO android' },
	{ url: './media/clients/microsoft.png', alt: 'LOGO microsoft' },
	{ url: './media/clients/apple.png', alt: 'LOGO apple' },
	{ url: './media/clients/linux.png', alt: 'LOGO linux' },
	{ url: './media/clients/android.png', alt: 'LOGO android' },
];
const client_short_data = [
	{ url: './media/clients/microsoft.png', alt: 'LOGO microsoft' },
	{ url: './media/clients/apple.png', alt: 'LOGO apple' },
	{ url: './media/clients/linux.png', alt: 'LOGO linux' },
	{ url: './media/clients/android.png', alt: 'LOGO android' },
];

const clients__slider = document.querySelector('.clients__slider');

let units = window.innerWidth <= 800 ? 1 : client_slider_data.length / 4;

let client_slides = [];
if (units == 1) {
	client_slides = getClients(units, client_short_data);
} else {
	client_slides = getClients(units, client_slider_data);
}

function getClients(units, array) {
	const clients_data = [];
	let arr = [];
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		let elem = array[i];
		const unit = document.createElement('img');
		unit.className = 'unit__img';
		unit.src = elem.url;
		unit.alt = elem.alt;
		if (count == units) {
			clients_data.push(arr);
			arr = [];
			count = 0;
		}
		arr.push(unit);
		count++;
	}
	clients_data.push(arr);
	return clients_data;
}

renderSlider(clients__slider, client_slides);

// Review Slider ******* =================================
const review_slider_data = [
	{
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
		avatar: './media/reviews/ivanova.png',
		full_name: 'Екатерина Иванова',
		position: 'Директор ООО “Раз-два”',
	},
	{
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
		avatar: './media/reviews/DartVaider.png',
		full_name: 'Екатерина Иванова',
		position: 'Директор ООО “Раз-два”',
	},
	{
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
		avatar: './media/reviews/HomerSimpson.png',
		full_name: 'Екатерина Иванова',
		position: 'Директор ООО “Раз-два”',
	},
	{
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
		avatar: './media/reviews/Spangebob.png',
		full_name: 'Екатерина Иванова',
		position: 'Директор ООО “Раз-два”',
	},
];

const reviews__slider = document.querySelector('.reviews__slider');

const review_slides = review_slider_data.map(
	({ text, avatar, full_name, position }) => {
		const text_elem = document.createElement('p');
		const person_elem = document.createElement('div');
		const avatar_elem = document.createElement('img');
		const data_elem = document.createElement('div');

		const name_elem = document.createElement('span');
		const position_elem = document.createElement('span');

		text_elem.classList.add('review__text');
		person_elem.classList.add('review__person');
		avatar_elem.classList.add('review__avatar');
		data_elem.classList.add('review__person-data');
		name_elem.classList.add('review__name');
		position_elem.classList.add('review__position');

		text_elem.innerText = text;
		avatar_elem.src = avatar;
		name_elem.innerText = full_name;
		position_elem.innerText = position;

		data_elem.append(name_elem, position_elem);
		person_elem.append(avatar_elem, data_elem);
		return [text_elem, person_elem];
	}
);

renderSlider(reviews__slider, review_slides);

// ==============================

window.addEventListener('resize', function () {
	const slider_wrappers = document.querySelectorAll('.slider__wrapper');
	let position = '';
	slider_wrappers.forEach((el) => {
		const btns = el.nextElementSibling.firstChild.childNodes;
		btns.forEach((elem, index) => {
			if (elem.classList.contains('active')) position = index;
		});
		let size = el.firstChild.style.minWidth.slice(0, -2);
		let left_position = `${-1 * position * size}px`;
		el.style.left = left_position;
	});
});