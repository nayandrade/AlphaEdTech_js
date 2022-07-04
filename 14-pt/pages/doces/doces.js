export default function doces() {
    const container = document.createElement('div');
    const template = `
        <div id="doce"></div>
        `;
    container.innerHTML = template;
    return container;
}