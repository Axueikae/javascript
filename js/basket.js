let li = document.createElement('li');
li.classList.add('.basket__item');
let elementstart = document.querySelector('.basket__list');
let zagolovok = document.createElement('h3');
let zagolovoktext = document.createTextNode('Аризона Рп');
zagolovok.appendChild(zagolovoktext)
let dnsshop = document.createElement('img')
dnsshop.src = "http://sun9-65.userapi.com/s/v1/if1/z2QfjmJ2rt5UoWcq1TFRxUeeR2Uy-J09PmxXcam3vG3xGq0ObUEcvb2u975zofXS59pWC1Kq.jpg?size=200x200&quality=96&crop=0,0,399,399&ava=1"
let footer = document.createElement('h3');
let footertext = document.createTextNode('365550000₽');
let textp = document.querySelectorAll('.basket__item')[1]
let btn = document.createElement('button')
let btntext = document.createTextNode('-');
btn.appendChild(btntext)
btn.setAttribute('onclick','minus()')
console.log(textp)
footer.appendChild(footertext)
function plus() {
	elementstart.appendChild(li)
	li.appendChild(zagolovok)
	console.log('fsdfsdfsfd')
	li.appendChild(dnsshop)
	li.appendChild(footer)
	textp.classList.add('basket___textp')
	li.appendChild(btn)
}
function minus() {
  	btn.parentNode.remove()
  	textp.classList.remove('basket___textp')
}