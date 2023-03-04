let buyf = 0;
const btn = document.getElementById('btn')
// let price = btn.previouseSibling.previousSibling.innerHTML;
 let price = document.querySelector('.product-price').innerHTML;
let basket = 0;
const basketPrice = document.querySelector('.price')
price = price.replace(/ /g, '');
price = parseInt(price);
console.log(price);


if (localStorage.getItem('basket') !== null ||
	localStorage.getItem('buyf') !==null)  {
	basket = localStorage.getItem('basket');
	basketPrice.innerHTML = basket;

	buyf = localStorage.getItem('buyf');
	buyf = parseInt(buyf);
	if (!buyf) {
    btn.style.background = '../img/images.jpg';
		btn.innerHTML = 'Тебя заскамили получай в подарок самп рп';
	 	btn.style.color = 'blue';
		btn.style.border = 'none';
	} else {
        btn.style.background = '../img/images.jpg';
		btn.innerHTML = 'КУПИТЬ У МЕНЯ САМЕ МЕЙСОНА СОЗДАТЕЛЯ АРИЗОНЫ(мам купи!!)';
	 	btn.style.color = 'black';
		btn.style.border = 'none';
	}
}

function buy() {
	if (!buyf) {
	 	btn.style.background = '../img/images.jpg';
		btn.innerHTML = 'Тебя заскамили получай в подарок самп рп';
	 	btn.style.color = 'blue';
		btn.style.border = 'none';
		buyf = 1;
		basket = parseInt(basket) + price;
	} else {
        btn.style.background = '../img/images.jpg';
		btn.innerHTML = 'КУПИТЬ У МЕНЯ САМЕ МЕЙСОНА СОЗДАТЕЛЯ АРИЗОНЫ(мам купи!!)';
	 	btn.style.color = 'black';
		btn.style.border = 'none';
		buyf = 0;
		basket = parseInt(basket) - price;
	}
	basketPrice.innerHTML = basket;
	localStorage.setItem('basket', basket); 
	localStorage.setItem('buyf', buyf);
}