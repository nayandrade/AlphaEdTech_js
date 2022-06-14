const inputCep = document.querySelector('#cep');

inputCep.addEventListener('keyup', (e) => render(e))

function render(e) {
    const resultado = document.querySelector('h1');
    if (e.key === "Backspace" ) {
        if(inputCep.value.length === 5) {
            resultado.innerHTML = resultado.innerHTML.slice(0, -2);
        } else {
            resultado.innerHTML = resultado.innerHTML.slice(0, -1);
        }        
    } else if (inputCep.value.length === 6 && (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9")) {
        resultado.innerHTML += `-${e.key}`
    } else if (inputCep.value.length <= 10 && inputCep.value.length !== 6 && (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9")) {
        resultado.innerHTML += e.key
    }
}

