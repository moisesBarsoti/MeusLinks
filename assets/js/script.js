// Seleção de atributos
const switchAtributo = document.querySelector('div#switch');

// Eventos de Click
switchAtributo.addEventListener('click', () => {
    const html = document.documentElement;
    html.classList.toggle("light");
});