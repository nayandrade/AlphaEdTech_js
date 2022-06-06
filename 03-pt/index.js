const button = document.querySelector('button');
const inputPrimeiroValor = document.querySelector('#first');
const inputSegundoValor = document.querySelector('#second');
const inputOperator = document.querySelector('select');
const resultado = document.querySelector('h1');

button.addEventListener('click', (e) => clicar(e));
function clicar(e) {
    e.preventDefault();
    let primeiroValor = inputPrimeiroValor.value;
    let segundoValor = inputSegundoValor.value;
    let operator = inputOperator.value;
    calcResult(primeiroValor, segundoValor, operator)
}

function calcResult(primeiroValor, segundoValor, operator) {
    let resultadoFinal = eval(primeiroValor + operator + segundoValor);      
    resultado.innerHTML = `O resultado de sua operação é ${resultadoFinal}`;
}

// function calcResult(primeiroValor, segundoValor, operator) {
//     let resultadoFinal = 0
//     if (operator === '+') {
//         resultadoFinal = parseInt(primeiroValor) + parseInt(segundoValor);
//     } else if (operator === '-') {
//         resultadoFinal = parseInt(primeiroValor) - parseInt(segundoValor);
//     } else if (operator === '*') {
//         resultadoFinal = parseInt(primeiroValor) * parseInt(segundoValor);
//     } else if (operator === '/') {
//         resultadoFinal = parseInt(primeiroValor) / parseInt(segundoValor);
//     }
//     console.log(resultadoFinal);
//     resultado.innerHTML = `O resultado de sua operação é ${resultadoFinal}`;
// }


