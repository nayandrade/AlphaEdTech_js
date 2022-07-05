const section = document.querySelector('section');
let data;

function fetchData() {
    document.body.style.cursor = 'wait';
    const currency1 = document.querySelector('select').value;
    const currency2 = 'BRL';
    const currency = `${currency1}-${currency2}`;
    const startDate = document
        .querySelector('#startDate')
        .value.replace(/-/g, '');
    const endDate = document.querySelector('#endDate').value.replace(/-/g, '');
    const lastUrl = `https://economia.awesomeapi.com.br/json/last/${currency}`;
    const period = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${startDate}&end_date=${endDate}`;

    let url = null;
    if (startDate && endDate) {
        url = period;
    } else {
        url = lastUrl;
    }
    console.log(url)
    fetch(url)
        .then((res) => res.json())
        .then(function (data) {
            section.appendChild(
                render(data, startDate, endDate, currency1, currency2)
            );
            document.body.style.cursor = 'default';
        })
        .catch(function (error) {
            console.error(error);
        });
}

function render(data, startDate, endDate, currency1, currency2) {
    const container = document.createElement('ul');
    const init = document.querySelector('#startDate').value
    const end = document.querySelector('#endDate').value
    console.log
    section.innerHTML = '';
    const myObject = currency1 + currency2;

    if (startDate && endDate) {
        const template = `
        <li>
            <h2>Período: de ${init} a ${end}<h2>
            <h2>${data[0].name}<h2>
            <p>Cotação de compra: R$ ${data[0].bid.replace('.', ',')}<p>
            <p>Cotação de venda: R$ ${data[0].ask.replace('.', ',')}<p>
            <p>Data e Hora: ${data[0].create_date}<p>
            <p>Min: ${data[0].low.replace('.', ',')}<p>
            <p>Máx: ${data[0].high.replace('.', ',')}<p>
        </li>`;
        container.innerHTML = template;
        return container;
    } else {
        const template = `<li>	
            <h2>${data[myObject].name}<h2>
            <p>Cotação de compra: R$ ${data[myObject].bid.replace('.', ',')}<p>
            <p>Cotação de venda: R$ ${data[myObject].ask.replace('.', ',')}<p>
            <p>Data e Hora: ${data[myObject].create_date}<p>
            <p>Valor min: ${data[myObject].low.replace('.', ',')}<p>
            <p>Valor máx: ${data[myObject].high.replace('.', ',')}<p>
        </li>`;
        container.innerHTML = template;
        return container;
    }
}

document.querySelector('button').addEventListener('click', () => {
    fetchData();
});
