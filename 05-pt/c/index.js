const button = document.querySelector('button');
const valueInput = document.querySelector('#product');
const resultado = document.querySelector('section');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault();
    let product = ''    
    switch (valueInput.value) {
        case 'product1':
            product = 'https://raw.githubusercontent.com/nayandrade/AlphaEdTech_js/main/05-pt/c/assets/images/iluminador-de-livro.webp';
            break;
        case 'product2':
            product = 'https://raw.githubusercontent.com/nayandrade/AlphaEdTech_js/main/05-pt/c/assets/images/metralhadora-de-marshmallow.webp';
            break;
        case 'product3':
            product = 'https://raw.githubusercontent.com/nayandrade/AlphaEdTech_js/main/05-pt/c/assets/images/chinelo-abridor-de-garrafas.webp';
            break;
        case 'product4':
            product = 'https://raw.githubusercontent.com/nayandrade/AlphaEdTech_js/main/05-pt/c/assets/images/sapato-canguru.webp';
            break;
        case 'product5':
            product = 'https://raw.githubusercontent.com/nayandrade/AlphaEdTech_js/main/05-pt/c/assets/images/toca-de-pipoca.webp';
            break;
        case 'Escolha um Produto':
            product = 'Escolha um produto';
            break;
    }
    render(product)
}

function render(product) {
    console.log(product)
    if (product === 'Escolha um produto') {
        resultado.innerHTML = `<h1>${product}</h1>`
    } else {
        resultado.innerHTML = `
            <div class="image-container">
                <div style="background-image: url(${product})"></div>   
            </div>
            `
    }    
}
