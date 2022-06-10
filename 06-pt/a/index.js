const bomb = document.querySelector('.bomb');
const resultado = document.querySelector('section');
const armarBomba = document.querySelector('.armar');
const dezSegundos = 1000 * 10;
let acesa = false;
let tokenSetTimeOut = null;

armarBomba.addEventListener('click', init);
bomb.addEventListener('click', desarmarBomba);

function init() {
    tokenSetTimeOut = setTimeout(explodirBomba, dezSegundos);
    bomb.style.backgroundImage = 'url(./assets/images/bomba.png)';
    document.querySelector('h2').innerHTML = 'A bomba foi armada!';    
    document.querySelector('.faca-se-a-luz').classList.remove('none');
    bomb.classList.add('acesa');
    acesa = true;
}


function desarmarBomba() {
    if (acesa) {
        clearTimeout(tokenSetTimeOut);
        bomb.classList.remove('acesa');
        document.querySelector('h2').innerHTML = 'Ufa, bomba desarmada!';
    }
}

function explodirBomba() {
    const audio = document.querySelector('audio');
    document.querySelector('h2').innerHTML = 'Explodiu';
    bomb.classList.remove('acesa');
    bomb.style.backgroundImage = 'url(./assets/images/explosion.png)';
    audio.play();
    acesa = false;
}
