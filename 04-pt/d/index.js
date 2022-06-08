const button = document.querySelector('button');
const resultado = document.querySelector('h1');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault();
    const numero = Math.random() * 101;
    console.log(numero.toFixed(1));
    if (numero.toFixed(1) < 8.6 && numero.toFixed(1) >= 0) {
        resultado.innerHTML = `Você é aleatoriamente uma idosa`;
    } else if (numero.toFixed(1) >= 8.6 && numero.toFixed(1) < 16.7) {
        resultado.innerHTML = `Você é aleatoriamente um idoso`;
    } else if (numero.toFixed(1) >= 16.7 && numero.toFixed(1) < 56.9) {
        resultado.innerHTML = `Você é aleatoriamente um homem jovem`;
    } else {
        resultado.innerHTML = `Você é aleatoriamente uma mulher jovem`;
    }
}


// M = 51.7% H = 48.3% 16.7% são idosos ->
// mulheres jovens = 43.0661% homens jovens = 40.2339%, 8.0661% de idosos homens e 8.6339% de mulheres
