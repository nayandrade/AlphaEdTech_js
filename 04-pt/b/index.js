const button = document.querySelector('button');
const inputMin = document.querySelector('#min');
const inputMax = document.querySelector('#max');
const resultado = document.querySelector('h1');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault(); 
    let minValue = inputMin.value;
    let maxValue = inputMax.value;
    handdleData(minValue, maxValue);
}

function handdleData(minValue, maxValue) {
    minValue.indexOf(',') > -1 ? (minValue = minValue.replace(',', '.')) : minValue;
    maxValue.indexOf(',') > -1 ? (maxValue = maxValue.replace(',', '.')) : maxValue;
    minValue = parseFloat(minValue);
    maxValue = parseFloat(maxValue);
    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue || !Number.isInteger(minValue) || !Number.isInteger(maxValue)) {
        resultado.textContent = 'Valores inválidos';
    } else {
        let result = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
        resultado.innerHTML = `Seu número sorteado foi ${result}`;
    }    
}

