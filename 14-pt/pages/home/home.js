export default function home() {
    const container = document.createElement('div');
    const template = `
        <div id="main"></div>
        `;
    container.innerHTML = template;
    return container;
}
