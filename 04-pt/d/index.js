const button = document.querySelector('button');
const resultado = document.querySelector('h1');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault();
    const numero = Math.round(Math.random() * 10000);
    console.log(numero);
    if (numero <= 863 && numero > 0) {
        resultado.innerHTML = `Você é aleatoriamente uma idosa`;
    } else if (numero > 863 && numero <= 1670) {
        resultado.innerHTML = `Você é aleatoriamente um idoso`;
    } else if (numero > 1670 && numero <= 5977) {
        resultado.innerHTML = `Você é aleatoriamente uma mulher jovem`;
    } else {
        resultado.innerHTML = `Você é aleatoriamente um homem jovem`;
    }
}


// M = 51.7% H = 48.3% 16.7% são idosos ->
// mulheres jovens = 43.0661% homens jovens = 40.2339%, 8.0661% de idosos homens e 8.6339% de mulheres
