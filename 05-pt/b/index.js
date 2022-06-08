const button = document.querySelector('button');
const valueInput = document.querySelector('#number');
const resultado = document.querySelector('h1');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault();
    if (valueInput.value >= 0 && valueInput.value <= 10) {
        switch (valueInput.value) {
            case '0':
                resultado.innerHTML = 'Zero';
                break;
            case '1':
                resultado.innerHTML = 'Um';
                break;
            case '2':
                resultado.innerHTML = 'Dois';
                break;
            case '3':
                resultado.innerHTML = 'Três';
                break;
            case '4':
                resultado.innerHTML = 'Quatro';
                break;
            case '5':
                resultado.innerHTML = 'Cinco';
                break;
            case '6':
                resultado.innerHTML = 'Seis';
                break;
            case '7':
                resultado.innerHTML = 'Sete';
                break;
            case '8':
                resultado.innerHTML = 'Oito';
                break;
            case '9':
                resultado.innerHTML = 'Nove';
                break;
            case '10':
                resultado.innerHTML = 'Dez';
                break;
        }
    } else {
        resultado.innerHTML = `Insira um valor entre 0 e 10 para ser validado`;
    }
}
