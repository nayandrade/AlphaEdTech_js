const button = document.querySelector('button');
const dateInput = document.querySelector('#birthDay');
const resultado = document.querySelector('h1');

button.addEventListener('click', (e) => clicar(e));
function clicar(e) {
    e.preventDefault();
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let today = new Date();
    let date = dateInput.value;
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let checkMonth = today.getMonth() - birthDate.getMonth();
    if (
        checkMonth < 0 ||
        (checkMonth === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    calcularMorte(age, gender);
}

function calcularMorte(age, gender) {
    let diasParaMorte = 0;
    let horasParaMorte = 0;
    if (gender === 'Masculino') {
        diasParaMorte = Math.floor((73.1 - age) * 365);
        horasParaMorte = Math.round(((73.1 - age) * 365 - diasParaMorte) * 24);
    } else if (gender === 'Feminino') {
        diasParaMorte = Math.floor((80.1 - age) * 365);
        horasParaMorte = Math.round(((80.1 - age) * 365 - diasParaMorte) * 24);
    }
    resultado.innerHTML = `Você tem ${diasParaMorte} dias e ${horasParaMorte} horas até sua morte.`;
}
