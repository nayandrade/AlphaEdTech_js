const inputCronometro = document.querySelector('#tempo');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const submeter = document.querySelector('#definir');
const cancelar = document.querySelector('#cancelar');
const resultado = document.querySelector('h1');
const alarme = document.querySelector('audio');
const umSegundo = 1000;
const umMinuto = 60;
let ligado = false;
let tokenSetInterval = null;
let meusMinutos = 0;
let meusSegundos = 0;
let segundosTotais = 0;
let segundosTotaisCorridos = 0;

submeter.addEventListener('click', init);
cancelar.addEventListener('click', interromper);

function init() {
    if (
        parseInt(inputCronometro.value) > 0 &&
        Number.isInteger(parseInt(inputCronometro.value))
    ) {
        meusMinutos = Math.floor(inputCronometro.value);
        segundosTotais = meusMinutos * umMinuto;
        segundosTotaisCorridos = segundosTotais;
        minutos.innerHTML = `${meusMinutos}`;
        document.querySelector('h1').innerHTML = 'Contando...!';
        cronometro();
    } else {
        resultado.innerHTML = 'Digite um valor válido';
    }
}

function cronometro() {
    ligado = true;

    tokenSetInterval = setInterval(function () {
        if (meusSegundos > 0) {
            meusSegundos--;
            segundosTotaisCorridos--;
            segundos.innerHTML = `${meusSegundos}`;
            validarSegundosTotais();
        } else if (meusSegundos === 0 && meusMinutos > 0) {
            meusMinutos--;
            meusSegundos = 59;
            segundosTotaisCorridos--;
            minutos.innerHTML = `${meusMinutos}`;
            segundos.innerHTML = `${meusSegundos}`;
            validarSegundosTotais();
        } else {
            despertar();
            ligado = false;
        }
    }, umSegundo);
}

function interromper() {
    if (ligado) {
        clearInterval(tokenSetInterval);
        document.querySelector('h1').innerHTML = 'Você cancelou seu alarme!';
        meusMinutos = 0;
        meusSegundos = 0;
        minutos.innerHTML = `${meusMinutos}`;
        segundos.innerHTML = `${meusSegundos}`;
        document.querySelector('.cronometro').classList.remove('acesa');
    }
}

function despertar() {
    clearInterval(tokenSetInterval);
    document.querySelector('h1').innerHTML = 'ACORDAAA';
    document.querySelector('.cronometro').classList.remove('acesa');
    alarme.play();
    ligado = false;
    meusMinutos = 0;
    meusSegundos = 0;
}

function validarSegundosTotais() {
    if (segundosTotaisCorridos <= segundosTotais * 0.05) {
        document.querySelector('.cronometro').classList.add('acesa');
    }
}
