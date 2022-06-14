const data = [{
    name: 'B Dasher',
    speed: 58,
    aceleration: 69,
    weight: 41,
    handling: 52,
    drift: 55,
    image: './assets/images/B_Dasher.webp'
}, {
    name: 'Poltergust 4000',
    speed: 75,
    aceleration: 76,
    weight: 17,
    handling: 77,
    drift: 32,
    image: './assets/images/Poltergust_4000.webp'
}, {
    name: 'Royale',
    speed: 41,
    aceleration: 69,
    weight: 44,
    handling: 44,
    drift: 94,
    image: './assets/images/royale.webp'
}, {
    name: 'Egg 1',
    speed: 59,
    aceleration: 91,
    weight: 14,
    handling: 89,
    drift: 41,
    image: './assets/images/Egg1.webp'
}
]

const valueInput = document.querySelector('#car');
valueInput.addEventListener("change", render);

function render() {
    const image = data[valueInput.value].image
    const resultado = document.querySelector('section');
    if (valueInput.value === null) {
        resultado.innerHTML = `<h1>Escolha um produto</h1>`
    } else {
        resultado.innerHTML = `
        <div class="product">
            <p>Nome: ${data[valueInput.value].name}</p>
            <p>Velocidade: ${data[valueInput.value].speed}</p>
            <p>Aceleração: ${data[valueInput.value].aceleration}</p>
            <p>Peso: ${data[valueInput.value].weight}</p>
            <p>Manuseio: ${data[valueInput.value].handling}</p>
            <p>Drift: ${data[valueInput.value].drift}</p>
        
            <div class="image-container">
                <div style="background-image: url(${image})"></div>   
            </div>
        </div>        
            `
    }  
}
