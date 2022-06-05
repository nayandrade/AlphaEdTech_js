const button = document.querySelector('button');
const firstStringInput = document.querySelector('#firstString');
const secondStringInput = document.querySelector('#secondString');
const resultado = document.querySelector('h1');

button.addEventListener('click', (e) => clicar(e));
function clicar(e) {
    e.preventDefault();
    let string1 = String(firstStringInput.value);
    let string2 = String(secondStringInput.value);
    if (string1.length > string2.length) {
        resultado.innerHTML = `O comprimento da primeira string é maior: ${string1} = ${string1.length}`;
    } else if (string1.length < string2.length) {
        resultado.innerHTML = `O comprimento da segunda string é maior: ${string2} = ${string2.length}`;
    } else {
        resultado.innerHTML = `Os números são iguais: ${string1} & ${string2} = ${string1.length}`;
    }
}
