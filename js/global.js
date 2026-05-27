const MAPA_SITIO = [
    { nombre: "Inicio", url: "index.html", keywords: ["inicio", "home", "principal", "last stand"] },
    { nombre: "Quiénes somos", url: "empresa.html", keywords: ["quienes somos", "nosotros", "empresa", "misión", "visión"] },
    { nombre: "Armería", url: "servicios.html", keywords: ["armeria", "armas", "rifles", "pistolas", "escopetas", "fusiles"] },
    { nombre: "Equipo táctico", url: "serviciosExpress.html", keywords: ["equipo", "tactico", "accesorios", "chalecos", "municion", "mochilas", "miras"] },
    { nombre: "Contacto", url: "contacto.html", keywords: ["contacto", "correo", "telefono", "whatsapp", "direccion"] },
    { nombre: "Políticas de privacidad", url: "politicas.html", keywords: ["politicas", "privacidad", "aviso", "datos"] },
    { nombre: "Términos y condiciones", url: "terminos.html", keywords: ["terminos", "condiciones", "legal"] }
];

function ejecutarBusqueda() {
    const inputBuscar = document.querySelector('.search-bar');
    if (!inputBuscar) return;
    const termino = inputBuscar.value.toLowerCase();
    if (!termino) return;
    const destino = MAPA_SITIO.find(pagina =>
        pagina.nombre.toLowerCase().includes(termino) ||
        pagina.keywords.some(k => k.includes(termino))
    );
    if (destino) {
        window.location.href = destino.url;
    } else {
        alert("No encontramos esa sección. Prueba con 'Armería', 'Equipo táctico' o 'Contacto'.");
    }
}

const btnBuscar = document.querySelector('.search-btn');
if (btnBuscar) btnBuscar.addEventListener('click', ejecutarBusqueda);

const inputBuscar = document.querySelector('.search-bar');
if (inputBuscar) inputBuscar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') ejecutarBusqueda();
});