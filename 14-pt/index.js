import home from './pages/home/home.js';
import brigadeiro from './pages/brigadeiro/brigadeiro.js';
import cupcakes from './pages/cupcakes/cupcakes.js';
import doces from './pages/doces/doces.js';

const section = document.querySelector('section');
const init = () => {
    window.addEventListener('hashchange', () => {
        section.innerHTML = '';
        console.log(window.location.href);
        switch (window.location.hash) {
            case ' ':
                section.appendChild(home());
                break;
            case '#brigadeiros':
                section.appendChild(brigadeiro());
                break;
            case '#cupcakes':
                section.appendChild(cupcakes());
                break;
            case '#doces':
                section.appendChild(doces());
                break;
            default:
                section.appendChild(home());
        }
    })
}

window.addEventListener('load', () => {
    section.appendChild(home());
    init()
})
