const button = document.querySelector('button');
const dateInput = document.querySelector('#birthDay');
const resultado = document.querySelector('h1');

button.addEventListener('click', (e) => clicar(e));
function clicar(e) {
    e.preventDefault();
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let today = new Date();
    console.log(today)
    let date = dateInput.value;
    console.log(date)
    let birthDate = new Date(date);
    console.log(birthDate)
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log(age)
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
    render(diasParaMorte, horasParaMorte);       
}

function render(diasParaMorte, horasParaMorte) {
    if(diasParaMorte < 0) {
        resultado.innerHTML = `Parabéns, você já viveu mais que a méidia nacional. seu saldo é de ${diasParaMorte * -1} dias`;       
    } else {
        resultado.innerHTML = `Você tem ${diasParaMorte} dias e ${horasParaMorte} horas até sua morte.`;
    }
}
