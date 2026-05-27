const productosExpress = [
    { id: 1, nombre: "Mira holográfica EOTech", 
        categoria: "Óptica", 
        imagen: "img/equipo/prod1.png", 
        descripcion: "Mira holográfica de punto rojo, ideal para rifles tácticos. Visión amplia y retícula ajustable.", 
        tiempo: "Entrega 3-5 días", 
        precio: "$12,500 MXN" },
    { id: 2, nombre: "Silenciador universal", 
        categoria: "Accesorios", 
        imagen: "img/equipo/prod2.png", 
        descripcion: "Reduce el fogonazo y el sonido hasta un 30%. Acero tratado térmicamente.", 
        tiempo: "Entrega 5-7 días", 
        precio: "$8,200 MXN" },
    { id: 3, nombre: "Cargador extendido AR-15", 
        categoria: "Accesorios", 
        imagen: "img/equipo/prod3.png", 
        descripcion: "Capacidad de 60 balas 5.56mm. Polímero reforzado con fibra de vidrio.", 
        tiempo: "Entrega 2-3 días", 
        precio: "$1,850 MXN" },
    { id: 4, nombre: "Linterna táctica LED", 
        categoria: "Iluminación", 
        imagen: "img/equipo/prod4.png", 
        descripcion: "1000 lúmenes, soporte Picatinny, resistente al agua.", 
        tiempo: "Entrega 2-4 días", 
        precio: "$2,300 MXN" },
    { id: 5, nombre: "Chaleco antibalas IIIA", 
        categoria: "Equipo de protección", 
        imagen: "img/equipo/prod5.png", 
        descripcion: "Protección nivel IIIA contra pistolas de alto calibre. Incluye placas frontales y traseras.", 
        tiempo: "Entrega 7-10 días", 
        precio: "$28,500 MXN" },
    { id: 6, nombre: "Mochila táctica 40L", 
        categoria: "Equipo", 
        imagen: "img/equipo/prod6.png", 
        descripcion: "Multicam negro, compartimento para hidratación, correas molle.", 
        tiempo: "Entrega 4-6 días", 
        precio: "$3,750 MXN" },
    { id: 7, nombre: "Cuchillo de caza Bowie", 
        categoria: "Herramientas", 
        imagen: "img/equipo/prod7.png", 
        descripcion: "Hoja de acero inoxidable de 7 pulgadas, mango de goma antideslizante.", 
        tiempo: "Entrega 2-3 días", 
        precio: "$1,200 MXN" },
    { id: 8, nombre: "Encendedor militar", 
        categoria: "Supervivencia", 
        imagen: "img/equipo/prod8.png", 
        descripcion: "Resistente al viento y al agua. Recargable, ideal para exteriores.", 
        tiempo: "Entrega 1-2 días", 
        precio: "$450 MXN" },
    { id: 9, nombre: "Munición 5.56mm (100 balas)", 
        categoria: "Munición", 
        imagen: "img/equipo/prod9.png", 
        descripcion: "Caja de 100 cartuchos calibre 5.56x45mm FMJ. Para rifle AR-15 y similares.", 
        tiempo: "Entrega 2-4 días", 
        precio: "$1,400 MXN" },
    { id: 10, nombre: "Munición 9mm (50 balas)", 
        categoria: "Munición", 
        imagen: "img/equipo/prod10.png", 
        descripcion: "Caja de 50 balas 9x19mm Parabellum. Puntas blindadas.", 
        tiempo: "Entrega 2-4 días", 
        precio: "$750 MXN" },
    { id: 11, nombre: "Cartuchos 12/70 (25 uds)", 
        categoria: "Munición", 
        imagen: "img/equipo/prod11.png", 
        descripcion: "Cartuchos de escopeta calibre 12, posta o perdigón. Caja de 25 unidades.", 
        tiempo: "Entrega 2-4 días", 
        precio: "$650 MXN" },
    { id: 12, nombre: "Munición 7.62mm (20 balas)", 
        categoria: "Munición", 
        imagen: "img/equipo/prod12.png",
        descripcion: "Caja metálica con 20 cartuchos 7.62x39mm. Ideal para AK-47 y derivados.", 
        tiempo: "Entrega 3-5 días", 
        precio: "$500 MXN" },
    { id: 13, nombre: "Ración MRE 24h", 
        categoria: "Raciones", 
        imagen: "img/equipo/prod13.png", 
        descripcion: "Comida completa para 24 horas. Incluye plato principal, barra energética, bebida en polvo y accesorios.", 
        tiempo: "Entrega 2-3 días", 
        precio: "$320 MXN" },
    { id: 14, nombre: "Barra energética táctica", 
        categoria: "Raciones", 
        imagen: "img/equipo/prod14.png", 
        descripcion: "Alta en proteínas y carbohidratos. Sabor chocolate. 400 calorías.", 
        tiempo: "Entrega 1-2 días", 
        precio: "$45 MXN" },
    { id: 15, nombre: "Botella táctica 1L", 
        categoria: "Raciones/Hidratación", 
        imagen: "img/equipo/prod15.png", 
        descripcion: "Botella de acero inoxidable con mosquetón. Aislante térmico.", 
        tiempo: "Entrega 2-3 días", 
        precio: "$380 MXN" },
    { id: 16, nombre: "Comida liofilizada pouch", 
        categoria: "Raciones", 
        imagen: "img/equipo/prod16.png", 
        descripcion: "Comida deshidratada, solo añadir agua caliente. Sabor a elección.", 
        tiempo: "Entrega 3-5 días", 
        precio: "$180 MXN" },
    { id: 17, nombre: "Gafas balísticas", 
        categoria: "Equipo de protección", 
        imagen: "img/equipo/prod17.png", 
        descripcion: "Lentes antimpacto nivel 3, armazón de polímero flexible. Incluye estuche.", 
        tiempo: "Entrega 2-4 días", 
        precio: "$1,050 MXN" },
    { id: 18, nombre: "Guantes tácticos", 
        categoria: "Equipo", 
        imagen: "img/equipo/prod18.png", 
        descripcion: "Guantes con nudillos reforzados, palma de piel de cabra, dedos táctiles.", 
        tiempo: "Entrega 2-3 días", 
        precio: "$890 MXN" },
    { id: 19, nombre: "Cinturón táctico", 
        categoria: "Equipo", 
        imagen: "img/equipo/prod19.png", 
        descripcion: "Hebilla de liberación rápida, nylon resistente, compatible con fundas molle.", 
        tiempo: "Entrega 2-3 días", 
        precio: "$550 MXN" },
    { id: 20, nombre: "Funda para rifle", 
        categoria: "Accesorios", 
        imagen: "img/equipo/prod20.png", 
        descripcion: "Funda acolchada de 42 pulgadas, correa ajustable, bolsillos para cargadores.", 
        tiempo: "Entrega 4-6 días", 
        precio: "$1,250 MXN" }
];

function mostrarProductos(lista) {
    const contenedor = document.getElementById('contenedor-grid');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    lista.forEach(prod => {
        contenedor.innerHTML += `
            <div class="servicio-card">
                <img src="${prod.imagen}" alt="${prod.nombre}">
                <div style="padding: 15px;">
                    <h3>${prod.nombre}</h3>
                    <p>${prod.categoria}</p>
                    <button onclick="verDetalles(${prod.id})" class="cta-button">Ver detalles</button>
                </div>
            </div>
        `;
    });
}

function verDetalles(id) {
    const producto = productosExpress.find(p => p.id === id);
    const modal = document.getElementById('modalServicio');
    const contenido = document.getElementById('modal-body-content');
    contenido.innerHTML = `
        <img src="${producto.imagen}" class="modal-detalle-img">
        <h2>${producto.nombre}</h2>
        <p style="color:#8B0000; font-weight:bold;">${producto.categoria}</p>
        <hr>
        <p style="margin: 20px 0; line-height: 1.6;">${producto.descripcion}</p>
        <div class="modal-info-extra">
            <span><strong>⏱ Tiempo:</strong> ${producto.tiempo}</span>
            <span><strong>💰 Precio:</strong> ${producto.precio}</span>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <a href="contacto.html" class="cta-button">Solicitar cotización</a>
        </div>
    `;
    modal.style.display = "block";
}

const btnFiltrar = document.getElementById('btnFiltrar');
const inputBusqueda = document.getElementById('inputBusqueda');

const filtrarProductos = () => {
    const termino = inputBusqueda.value.toLowerCase();
    const filtrados = productosExpress.filter(p => 
        p.nombre.toLowerCase().includes(termino) || 
        p.categoria.toLowerCase().includes(termino)
    );
    mostrarProductos(filtrados);
};

btnFiltrar.addEventListener('click', filtrarProductos);
inputBusqueda.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') filtrarProductos();
});

mostrarProductos(productosExpress);

const closeBtn = document.querySelector('.close-btn');
if (closeBtn) closeBtn.onclick = () => document.getElementById('modalServicio').style.display = "none";
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modalServicio');
    if (modal && event.target === modal) modal.style.display = "none";
});