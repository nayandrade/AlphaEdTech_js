const button = document.querySelector('button');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const resultado = document.querySelector('h1');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault();
    let peso = inputPeso.value;
    let altura = inputAltura.value;
    handdleData(peso, altura);
}

function handdleData(peso, altura) {
    peso.indexOf(',') > -1 ? (peso = peso.replace(',', '.')) : peso;
    altura.indexOf(',') > -1 ? (altura = altura.replace(',', '.')) : altura;
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    if (isNaN(peso) || isNaN(altura)) {
        resultado.innerHTML = 'Preencha todos os campos de forma válida';
    } else {
        calcResult(peso, altura);
    } 
}

function calcResult(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);
    if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(
            2
        )}, você está abaixo do peso`;
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(
            2
        )}, você está com peso normal`;
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(
            2
        )}, você está com sobrepeso`;
    } else if (imc >= 30 && imc < 34.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(
            2
        )}, você está com obesidade grau 1`;
    } else if (imc >= 35 && imc < 39.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(
            2
        )}, você está com obesidade grau 2`;
    } else if (imc >= 40) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(
            2
        )}, você está com obesidade grau 3`;
    }
}
