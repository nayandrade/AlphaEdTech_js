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
        if (name === '')
            throw `insira um nome, pois esse campo se encontra vazio`;
        if (birthday === '')
            throw `insira um dia de nascimento, pois esse campo se encontra vazio`;
        if (height === '')
            throw `insira uma altura, pois esse campo se encontra vazio`;
        if (weight === '')
            throw `insira um peso, pois esse campo se encontra vazio`;
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

    console.log(myObject);
    nameInput.value = '';
    birthdayInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
    genderInput.value = '';
    document.querySelector('h1').innerHTML = "Seu objeto se encontra no console";
}
