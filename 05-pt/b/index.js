const button = document.querySelector('button');
const dateInput = document.querySelector('#date');
const resultado = document.querySelector('h1');
button.addEventListener('click', (e) => clicar(e));

function clicar(e) {
    e.preventDefault();
    const date = new Date(dateInput.value);  
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const weekDay = date.getUTCDay();
    const dateZero = Date.parse('01 Jan 1970 00:00:00 GMT');
    const selectedDateMiliSeconds = Date.parse(date);
    let weekDayName = '';
    let monthName = '';

    switch (weekDay) {
        case 0:
            weekDayName = 'Domingo';
            break;
        case 1:
            weekDayName = 'Segunda-feira';
            break;
        case 2:
            weekDayName = 'Terça-feira';
            break;
        case 3:
            weekDayName = 'Quarta-feira';
            break;
        case 4:
            weekDayName = 'Quinta-feira';
            break;
        case 5:
            weekDayName = 'Sexta-feira';
            break;
        case 6:
            weekDayName = 'Sábado';
            break;
    }

    switch (month) {
        case 0:
            monthName = 'Janeiro';
            break;
        case 1:
            monthName = 'Fevereiro';
            break;
        case 2:
            monthName = 'março';
            break;
        case 3:
            monthName = 'Abril';
            break;
        case 4:
            monthName = 'Maio';
            break;
        case 5:
            monthName = 'Junho';
            break;
        case 6:
            monthName = 'Julho';
            break;
        case 7:
            monthName = 'Agosto';
            break;
        case 8:
            monthName = 'Setembro';
            break;
        case 9:
            monthName = 'Outubro';
            break;

        case 10:
            monthName = 'Novembro';
            break;
        case 11:
            monthName = 'Dezembro';
            break;
    }
    console.log(dateInput.value, date, day, month, year, selectedDateMiliSeconds, dateZero);
    render(
        day,
        month,
        year,
        weekDayName,
        monthName,
        selectedDateMiliSeconds
    );
}

function render(
    day,
    month,
    year,
    weekDayName,
    monthName,
    selectedDateMiliSeconds
) {
    resultado.innerHTML = `
        <p>Dia selecionado: ${day}</p>
        <p>Mês selecionado: ${month}</p>
        <p>Ano selecionado: ${year}</p>
        <p>Dia da semana em português: ${weekDayName}</p>
        <p>Mês em português: ${monthName}</p>
        <p>Data em milisegundos: ${selectedDateMiliSeconds}</p>
    `;
}
