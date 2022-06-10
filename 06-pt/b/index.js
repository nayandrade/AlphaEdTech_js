const bomb = document.querySelector('.bomb');
const resultado = document.querySelector('section');
const armarBomba = document.querySelector('.armar');
const meusSegundos = 60;
const umSegundo = 1000
let acesa = false;
let tokenSetInterval = null;

armarBomba.addEventListener('click', init);
bomb.addEventListener('click', desarmarBomba);

function init() {
    bomb.style.backgroundImage = 'url(./assets/images/bomba.png)';
    document.querySelector('h2').innerHTML = 'A bomba foi armada!';    
    document.querySelector('.faca-se-a-luz').classList.remove('none');
    bomb.classList.add('acesa');
    acesa = true
    cronometro();
}


function desarmarBomba() {
    if (acesa) {
        clearInterval(tokenSetInterval);
        bomb.classList.remove('acesa');
        document.querySelector('h2').innerHTML = 'Ufa, bomba desarmada!';
    }
}

function explodirBomba() {
    clearInterval(tokenSetInterval);
    const explosao = document.querySelector('#explosao');
    document.querySelector('h2').innerHTML = 'Explodiu';
    bomb.classList.remove('acesa');
    bomb.style.backgroundImage = 'url(./assets/images/explosion.png)';
    explosao.play();
    acesa = false;
}

function cronometro() {
    let tempoSegundos = meusSegundos;
    const segundos = document.querySelector('.segundos');
    const ticCronometro = document.querySelector('#tic');

    tokenSetInterval = setInterval(function () {
        if (tempoSegundos > 0) {
            tempoSegundos--
            console.log(tempoSegundos)
            segundos.innerHTML = `${tempoSegundos}s`
            ticCronometro.play();
        } else {
            explodirBomba()
        }    
    }, umSegundo)
}
