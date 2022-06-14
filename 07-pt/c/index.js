const textarea = document.querySelector('textarea');
const button = document.querySelector('#enviar');
const apagar = document.querySelector('#apagar');
const input = document.querySelector('input');

button.addEventListener('click', render)
apagar.addEventListener('click', apagarTextArea)

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      render()
    }
});

function render() {
    const text = input.value;
    if(text.length > 0) {
        textarea.innerHTML += `${text}\n`;
        input.value = '';
        document.querySelector('textarea').scrollTop = document.querySelector('textarea').scrollHeight;
    }
}

function apagarTextArea () {
    textarea.innerHTML = '';
}