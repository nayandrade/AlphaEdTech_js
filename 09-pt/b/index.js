const numberOne = document.querySelector('#num1');
const numberTwo = document.querySelector('#num2');
const result = document.querySelector('button');

result.addEventListener('click', (e) => clicar(e));

function somar(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function clicar(e) {
    e.preventDefault();
    if (numberOne.value && numberTwo.value) {
        document.querySelector('h1').innerHTML = '';
        let num1 = parseFloat(numberOne.value);
        let num2 = parseFloat(numberTwo.value);
        try {
            if (num1 < num2)
                throw `Impossible to subtract ${num1} - ${num2}, because ${num2} is greater than ${num1}`;
            if (!Number.isInteger(num1) || !Number.isInteger(num2))
                throw `Impossible to subtract ${num1} - ${num2}, use integers`;
        } catch (error) {
            numberOne.value = '';
            numberTwo.value = '';
            return (document.querySelector('h1').innerHTML = error);
        }
        console.log(somar(numberOne.value, numberTwo.value));
        let sum = somar(numberOne.value, ~(numberTwo.value));
        document.querySelector('h1').innerHTML = somar(sum, 1);
        numberOne.value = '';
        numberTwo.value = '';
    }
}
