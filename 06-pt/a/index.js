const bomb = document.querySelector('.bomb');
const resultado = document.querySelector('section');
const dezSegundos = 1000 * 3;
let acesa = false;

bomb.addEventListener('click', desarmarBomba);
let tokenSetTimeOut = null;

function init() {
    tokenSetTimeOut = setTimeout(explodirBomba, dezSegundos);
    document.querySelector('h2').innerHTML = 'A bomba foi plantada!';
    bomb.classList.add('acesa');
    acesa = true;
}
init();

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
