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
            if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0)
                throw `Impossible to multiply ${num1} * ${num2}, use integers and positive numbers`;
        } catch (error) {
            numberOne.value = '';
            numberTwo.value = '';
            return (document.querySelector('h1').innerHTML = error);
        }
        document.querySelector('h1').innerHTML = exponent(num1, num2);    
    }
}

function subtract (num1, num2) {
    let sum = somar(num1, ~(num2));
    return somar(sum, 1);
}

function multiply(num1, num2) {
    if (num1 < num2) {
        return multiply(num2, num1);
    } else if (num2 != 0) {
        return (somar(num1, multiply(num1, subtract(num2, 1))));
    } else {
        return 0;
    }
}

function exponent(num1, num2) {
    if (num2 === 0) {
        return 1;
    }
    let result = num1;
    result = result * exponent(num1, subtract(num2, 1))
    return result
}
