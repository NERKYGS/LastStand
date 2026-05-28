// Validación y envío del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const producto = document.getElementById('producto').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '') {
            alert('Ingresa tu nombre completo.');
            return;
        }
        if (correo === '') {
            alert('Ingresa tu correo electrónico.');
            return;
        }
        if (!correo.includes('@') || !correo.includes('.')) {
            alert('Ingresa un correo electrónico válido (ejemplo@dominio.com).');
            return;
        }
        if (mensaje === '') {
            alert('Ingresa tu mensaje o consulta.');
            return;
        }
        if (mensaje.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres.');
            return;
        }

        alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Un asesor te contactará pronto.`);
        contactForm.reset();
    });
}