const nameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');
const valorInput = document.querySelector('#valor');
const registerButton = document.querySelector('#cadastrar');
const listButton = document.querySelector('#listar');
let myProducts = [];
let ids = 1;

registerButton.addEventListener('click', (e) => generateObject(e));
listButton.addEventListener('click', (e) => submit(e));

function generateObject(e) {
    e.preventDefault();
    const today = Date.now();
    let name = nameInput.value;
    let description = descriptionInput.value;
    let valor = valorInput.value;
    let id = ids;
    let included = today;
    let myDate = new Date();

    try {
        if (name === '' || name.length < 5)
            throw `insira um nome válido, com mais de 5 caracteres`;
        if (description === '') throw `insira uma descrição válida`;
        if (valor === '' || !Number.isInteger(Number(valor)))
            throw `insira um valor válido`;
    } catch (error) {
        return (document.querySelector('h1').innerHTML = error);
    }

    const myProduct = {
        id: id,
        nome: name,
        descricao: description,
        valor: valor,
        incluidoEm: included,
        date: myDate,
    };

    console.log(myProduct);

    document.querySelector('h1').innerHTML =
        'Produto inserido com sucesso!';
    nameInput.value = ""
    descriptionInput.value = ""
    valorInput.value = ""
    addProduct(myProduct);
}

function addProduct(myProduct) {
    myProducts.push(myProduct);
    ids++;
    console.log(myProducts);
}

function submit(e) {
    e.preventDefault();
    renderProducts();
}

function renderProducts() {
    console.log('renderizando')
    const list = document.querySelector('table');
    let count = 0;
    list.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>IncluidoEm</th>
            <th>Editar</th>
            <th>Apagar</th>
        </tr>
    `;
    while (count < myProducts.length) {
        list.innerHTML += `
        <tr>
            <td onclick="showStats(${count})">${myProducts[count].nome}</td>
            <td>${myProducts[count].descricao}</td>
            <td>${myProducts[count].valor}</td>
            <td>${myProducts[count].incluidoEm}</td>
            <td><ion-icon name="create-outline" onclick="editProduct(${count})"></ion-icon></td>
            <td><ion-icon name="trash-outline" onclick="deleteProduct(${count})"></ion-icon></td>
        </tr>
    `;
        count ++;
    }
    document.querySelector('h1').innerHTML =
    'Produtos listados com sucesso';   
}

function deleteProduct(index) {
    console.log(index)
    let count = 0
    let newProducts = [];
    while (count < myProducts.length) {
        if(count !== index) {
            newProducts.push(myProducts[count]);
        }
        count ++;     
    }
    myProducts = [...newProducts];
    console.log(myProducts, newProducts, index);
    renderProducts();
}

function editProduct(index) {
    console.log(index)
    let count = 0
    while (count < myProducts.length) {
        if(count === index) {
            nameInput.value = myProducts[count].nome;
            descriptionInput.value = myProducts[count].descricao;
            valorInput.value = myProducts[count].valor;           
        }
        count ++;     
    }
    document.querySelector('h1').innerHTML =
    'Edite os valores no formulário';
    deleteProduct(index)   
}

function showStats(index) {
    console.log(index)
    let count = 0
    while (count < myProducts.length) {
        if(count === index) {
            document.querySelector('h1').innerHTML =`
            <p>Id: ${myProducts[count].id}</p>
            <p>Nome: ${myProducts[count].nome}</p>
            <p>Descrição: ${myProducts[count].descricao}</p>
            <p>Valor: R$ ${myProducts[count].valor}</p>
            <p>Cadastro em: ${myProducts[count].date}</p>
            `
        }
        count ++;
    }    
}