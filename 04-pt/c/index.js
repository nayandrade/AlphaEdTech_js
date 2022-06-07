const button = document.querySelector('button');
const inputNumber = document.querySelector('#number');
const resultado = document.querySelector('h1');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault(); 
    let myNumber = inputNumber.value;
    handdleData(myNumber);
}

function handdleData(myNumber) {
    myNumber.indexOf(',') > -1 ? (myNumber = myNumber.replace(',', '.')) : myNumber;
    myNumber = parseFloat(myNumber);
    let maxValue = Math.floor(myNumber);
    let minValue = Math.ceil(myNumber);
    if (isNaN(myNumber) || Number.isInteger(myNumber) ) {
        resultado.textContent = 'Valores inválidos';
    } else {
        resultado.innerHTML = `Seu número inteiro máximo é ${maxValue} e o mínimo é ${minValue}`;
    }    
}