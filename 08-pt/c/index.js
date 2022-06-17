const nameInput = document.querySelector('#name');
const birthdayInput = document.querySelector('#birthday');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const genderInput = document.querySelector('#gender');
const button = document.querySelector('button');

button.addEventListener('click', (e) => generateObject(e));

function generateObject(e) {
    e.preventDefault();
    const today = Date.now();
    let name = nameInput.value;
    let birthday = birthdayInput.value;
    let height = heightInput.value;
    let weight = weightInput.value;
    let gender = genderInput.value;
    const check = today - Date.parse(birthday);

    try {
        if (check <= 0) throw `insira uma data válida, anterior ao dia de hoje`;
        if (name === '' || name.length < 5)
            throw `insira um nome válido, com mais de 5 caracteres`;
        if (birthday === '')
            throw `insira um dia de nascimento, pois esse campo se encontra vazio`;
        if (height === '' || !Number.isInteger(Number(height)))
            throw `insira uma altura válida`;
        if (weight === '' || !Number(weight)) throw `insira um peso válido`;
        if (gender === '')
            throw `insira um gênero, pois esse campo se encontra vazio`;
    } catch (error) {
        return (document.querySelector('h1').innerHTML = error);
    }

    const myObject = {
        name: name,
        birthDate: birthday,
        weight: weight,
        height: height,
        gender: gender,
    };

    console.log(myObject, name.lenght);
    nameInput.value = '';
    birthdayInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
    genderInput.value = '';
    document.querySelector('h1').innerHTML =
        'Seu objeto se encontra no console';
    document.querySelector('h2').innerHTML = `
        <p>Nome: ${myObject.name}</p>
        <p>Data de nascimento: ${myObject.birthDate}</p>
        <p>Peso: ${myObject.weight}</p>
        <p>Altura: ${myObject.height}</p>
        <p>Gênero: ${myObject.gender}</p>
        <p>Objeto: ${JSON.stringify(myObject)}</p>
    `;
}
