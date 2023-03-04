const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const navList = document.querySelectorAll('.nav__list a');
const body = document.querySelector('body');
const burgerList = document.querySelectorAll('.burger__line');
const burgerListv2 = document.querySelector('.nav__list')
let bodyGColor = '';
let hColor = '';
let oColor = '';

if (localStorage.getItem('bg-color') !==null || localStorage.getItem('header-color') !== null
	|| localStorage.getItem('bg-color') !== null) {
	bodyGColor = localStorage.getItem('bg-color');
	hColor = localStorage.getItem('header-color');
    oColor = localStorage.getItem('other-color');
	body.style.background = bodyGColor;
	header.style.background = hColor;
	footer.style.background = hColor;
	body.style.color = oColor;
	header.style.color = oColor;
	footer.style.color = oColor;
	navList.forEach((index) => {
		index.style.color = oColor
	})
}

function chooseDark() {
	console.log('dark')
	header.style.background = '#1f1f1f';
	header.style.transition = '0.3 ease-out 0.5s';
	navList.forEach((index) => {
       console.log(index)
       index.style.color = '#ffffff';
       index.style.transition = '0.3s ease-out 0.2s';
	})
	burgerList.forEach((index) => {
       console.log(index)
       index.style.background = '#ffffff';
       index.style.transition = '0.3s ease-out 0.2s';
	})
	burgerListv2.style.background = '#1f1f1f'
	footer.style.background = '#1f1f1f';
	footer.style.transition = '0.3 ease-out 0.5s';
	footer.style.color = '#ffffff';
	body.style.background = '#1f1f1f';
	body.style.color = '#ffffff';
	header.style.border = '1px solid white';
	header.style.color = '#ffffff'
	localStorage.setItem('bg-color', '#1f1f1f');
	localStorage.setItem('header-color', '#1f1f1f');
	localStorage.setItem('other-color','#ffffff');
}
function chooseWhite() {
	header.style.background = '#ffffff';
	header.style.transition = '0.3 ease-out 0.5s';
		navList.forEach((index) => {
       console.log(index)
       index.style.color = '#1f1f1f';
       index.style.transition = '0.3s ease-out 0.2s';
	})
	 burgerList.forEach((index) => {
	    console.log(index)
	    index.style.background = '#1f1f1f';
	    index.style.transition = '0.3s ease-out 0.2s';
	})
	burgerListv2.style.background = '#ffffff'
	footer.style.background = '#ffffff';
	footer.style.transition = '0.3 ease-out 0.5s';
	footer.style.color = '#1f1f1f';
	body.style.background = '#ffffff';
	body.style.color = '#1f1f1f';
	header.style.border = '1px solid black';
	header.style.color = '#1f1f1f'
	localStorage.setItem('bg-color', '#ffffff');
	localStorage.setItem('header-color', '#ffffff');
	localStorage.setItem('other-color','#1f1f1f');
	console.log('white')
}
