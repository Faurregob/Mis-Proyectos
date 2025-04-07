let numContainer = document.getElementById("num");
let value = 0;
let btnInc = document.querySelector('.incrementar');
let btnDec = document.querySelector('.decrementar');

btnInc.addEventListener('click', () => {value++; numContainer.textContent = value;}); 
btnDec.addEventListener('click', () => {value--; numContainer.textContent = value;});


