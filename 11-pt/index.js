const nameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');
const valorInput = document.querySelector('#valor');
const registerButton = document.querySelector('#cadastrar');
const editButton = document.querySelector('#editar');
const listButton = document.querySelector('#listar');
const cancelButton = document.querySelector('#cancelar');
let myProducts = [];
let ids = 0;
let editedId;

registerButton.addEventListener('click', (e) => generateObject(e));
listButton.addEventListener('click', (e) => submit(e));
editButton.addEventListener('click', (e) => confirmEdit(e));
cancelButton.addEventListener('click', (e) => cancelEdit(e));

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
    document.querySelector('h1').classList.remove('box');
    document.querySelector('h1').innerHTML = 'Produto inserido com sucesso!';
    nameInput.value = '';
    descriptionInput.value = '';
    valorInput.value = '';
    addProduct(myProduct);
}

function addProduct(myProduct) {
    myProducts.push(myProduct);
    ids++;
}

function submit(e) {
    e.preventDefault();
    renderProducts();
    document.querySelector('h1').innerHTML = 'Produtos listados com sucesso';
}

function renderProducts() {
    const list = document.querySelector('table');
    list.innerHTML = `
        <tr>
            <th class="pointer" onclick="sortByName()">Nome</th>
            <th>Descrição</th>
            <th class="pointer" onclick="sortByValor()">Valor</th>
            <th class="pointer" onclick="sortByDate()">IncluidoEm</th>
            <th>Editar</th>
            <th>Apagar</th>
        </tr>
    `;
    for (let i = 0; i < myProducts.length; i++) {
        list.innerHTML += `
            <tr>
                <td class="pointer" onclick="showStats(${i})">${myProducts[i].nome}</td>
                <td>${myProducts[i].descricao}</td>
                <td>${myProducts[i].valor}</td>
                <td>${myProducts[i].incluidoEm}</td>
                <td class="pointer"><ion-icon name="create-outline" onclick="editProduct(${i})"></ion-icon></td>
                <td class="pointer"><ion-icon name="trash-outline" onclick="deleteProduct(${i})"></ion-icon></td>
            </tr>
        `;
    }
}

function deleteProduct(index) {
    myProducts.splice(index, 1);
    document.querySelector('h1').classList.remove('box');
    document.querySelector('h1').innerHTML = 'Produto removido com sucesso';
    renderProducts();
}

function editProduct(index) {
    editedId = index;
    myProducts.map((product) => {
        if (product.id === index) {
            nameInput.value = product.nome;
            descriptionInput.value = product.descricao;
            valorInput.value = product.valor;
        }
    });
    document.querySelector('h1').innerHTML = 'Edite os valores no formulário';
    registerButton.classList.add('hidden');
    listButton.classList.add('hidden');
    editButton.classList.remove('hidden');
    cancelButton.classList.remove('hidden');
    document.querySelector('h1').classList.remove('box');
}

function confirmEdit(e) {
    e.preventDefault();
    myProducts[editedId].nome = nameInput.value;
    myProducts[editedId].descricao = descriptionInput.value;
    myProducts[editedId].valor = valorInput.value;
    registerButton.classList.remove('hidden');
    listButton.classList.remove('hidden');
    editButton.classList.add('hidden');
    cancelButton.classList.add('hidden');
    nameInput.value = '';
    descriptionInput.value = '';
    valorInput.value = '';
    renderProducts();
    document.querySelector('h1').innerHTML = 'Produto editado com sucesso';
}

function cancelEdit(e) {
    e.preventDefault();
    registerButton.classList.remove('hidden');
    listButton.classList.remove('hidden');
    editButton.classList.add('hidden');
    cancelButton.classList.add('hidden');
    nameInput.value = '';
    descriptionInput.value = '';
    valorInput.value = '';
    document.querySelector('h1').innerHTML = '';
}

function showStats(index) {
    for (let i = 0; i < myProducts.length; i++) {
        if (i === index) {
            document.querySelector('h1').innerHTML = `
                <p>Id: ${myProducts[i].id}</p>
                <p>Nome: ${myProducts[i].nome}</p>
                <p>Descrição: ${myProducts[i].descricao}</p>
                <p>Valor: R$ ${myProducts[i].valor}</p>
                <p>Cadastro em: ${myProducts[i].date}</p>
                <p class="pointer" onclick="closeStats()">FECHAR<p>
            `;
            document.querySelector('h1').classList.add('box');
        }
    }
}

function closeStats() {
    document.querySelector('h1').innerHTML = '';
    document.querySelector('h1').classList.remove('box');
}

function sortByName() {
    myProducts.sort(function (a, b) {
        if (a.nome > b.nome) {
            return 1;
        }
        if (a.nome < b.nome) {
            return -1;
        }
        return 0;
    });
    renderProducts()
}

function sortByValor() {
    myProducts.sort(function (a, b) {
        if (parseInt(a.valor) > parseInt(b.valor)) {
            return 1;
        }
        if (parseInt(a.valor) < parseInt(b.valor)) {
            return -1;
        }
        return 0;
    });
    renderProducts()
}

function sortByDate() {
    myProducts.sort(function (a, b) {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        return 0;
    });
    renderProducts()
}
