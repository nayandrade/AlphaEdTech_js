const button = document.querySelector('button');
const valueInput = document.querySelector('#product');
const resultado = document.querySelector('section');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault();
    let product = ''    
    switch (valueInput.value) {
        case 'product1':
            product = 'https://blog.vindi.com.br/wp-content/uploads/2013/08/produto-criativo-livro-iluminador.jpeg';
            break;
        case 'product2':
            product = 'https://blog.vindi.com.br/wp-content/uploads/2013/08/produto-criativo-marshmallow.jpg';
            break;
        case 'product3':
            product = 'https://blog.vindi.com.br/wp-content/uploads/2013/08/produtos-criativo-abridor-de-garrafas-cerveja.jpg';
            break;
        case 'product4':
            product = 'https://blog.vindi.com.br/wp-content/uploads/2013/08/produtos-criativos-saia-pulando.jpeg';
            break;
        case 'product5':
            product = 'https://blog.vindi.com.br/wp-content/uploads/2013/08/produtos-criativos5.png';
            break;
    }
    render(product)
}

function render(product) {
    console.log(product)
    resultado.innerHTML = `
    <div class="image-container">
        <div style="background-image: url(${product})"></div>   
    </div>
    `
}
