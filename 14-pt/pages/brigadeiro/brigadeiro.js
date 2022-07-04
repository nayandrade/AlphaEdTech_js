export default function brigadeiro() {
    const container = document.createElement('div');
    const template = `
        <div id="brigadeiro"></div>
        `;
    container.innerHTML = template;
    return container;
}