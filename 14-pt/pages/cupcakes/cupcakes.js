export default function cupcakes() {
    const container = document.createElement('div');
    const template = `
        <div id="cupcake"></div>
        `;
    container.innerHTML = template;
    return container;
}