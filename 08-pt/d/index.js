const objectInput = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', (e) => generateObject(e));

const obj = {
    nome: 'João',
    idade: 20,
};
console.log(JSON.stringify(obj));

function generateObject(e) {
    e.preventDefault();
    let object = objectInput.value;

    try {
        object = JSON.parse(object);
    } catch (error) {
        return (document.querySelector('h1').innerHTML = error);
    }
    document.querySelector('h1').innerHTML = `Parsable JSON string!`;
}
