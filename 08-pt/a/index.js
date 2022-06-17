const nameInput = document.querySelector('#name');
const birthdayInput = document.querySelector('#birthday');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const genderInput = document.querySelector('#gender');
const button = document.querySelector('button');

button.addEventListener('click', (e) => generateObject(e));

function generateObject(e) {
    e.preventDefault();
    const today = Date.now()
    const name = nameInput.value;
    const birthday = birthdayInput.value;
    const height = heightInput.value;
    const weight = weightInput.value;
    const gender = genderInput.value;
    const check = today - Date.parse(birthday)
    
    if (check <= 0 || name === "" || birthday === "" || height === "" || weight === "" || gender === "" ) {
        alert('insira dados válidos')
    }
    const myObject = {
        name: name,
        birthDate: birthday,
        weight: weight,
        height: height,
        gender: gender,
    };

    console.log(myObject);
}
