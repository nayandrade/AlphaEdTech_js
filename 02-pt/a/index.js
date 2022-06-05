const button = document.querySelector('button');
const firstNumberInput = document.querySelector('#firstNumber');
const secondNumberInput = document.querySelector('#secondNumber');
const resultado = document.querySelector('h1');

button.addEventListener('click', (e) => clicar(e));
function clicar(e) {
    e.preventDefault();
    let num1 = parseInt(firstNumberInput.value);
    let num2 = parseInt(secondNumberInput.value);
    if (num1 > num2) {
        resultado.innerHTML = `O primeiro número é maior: ${num1}`;
    } else if (num1 < num2) {
        resultado.innerHTML = `O segundo número é maior: ${num2}`;
    } else {
        resultado.innerHTML = 'Os números são iguais';
    }
}
