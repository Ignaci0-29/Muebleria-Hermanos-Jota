document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-contacto");
    const botonEnviar = document.getElementById("boton-enviar");
    const mensajeExito = document.getElementById("mensaje-exito");

    const campos = {
        nombre: document.getElementById("nombre"),
        email: document.getElementById("email"),
        mensaje: document.getElementById("mensaje"),
    };

    function mostrarError(campo, texto) {
        const error = document.getElementById(`error-${campo}`);
        if (error) {
            error.textContent = texto;
        }
    }

    function limpiarErrores() {
        Object.keys(campos).forEach((campo) => mostrarError(campo, ""));
    }

    function validarEmail(valor) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    }

    function validarFormulario() {
        limpiarErrores();
        let esValido = true;

        if (campos.nombre.value.trim().length < 2) {
            mostrarError("nombre", "Ingresá tu nombre completo.");
            esValido = false;
        }

        if (!validarEmail(campos.email.value.trim())) {
            mostrarError("email", "Ingresá un email válido.");
            esValido = false;
        }

        if (campos.mensaje.value.trim().length < 10) {
            mostrarError("mensaje", "Contanos un poco más (mínimo 10 caracteres).");
            esValido = false;
        }

        return esValido;
    }

    function simularEnvio(datos) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ ok: true, datos });
            }, 1200);
        });
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        const datos = {
            nombre: campos.nombre.value.trim(),
            email: campos.email.value.trim(),
            mensaje: campos.mensaje.value.trim(),
        };

        botonEnviar.disabled = true;
        botonEnviar.textContent = "Enviando...";
        mensajeExito.hidden = true;

        simularEnvio(datos).then((respuesta) => {
            botonEnviar.disabled = false;
            botonEnviar.textContent = "Enviar mensaje";

            if (respuesta.ok) {
                mensajeExito.textContent = `¡Gracias, ${datos.nombre}! Recibimos tu mensaje y te vamos a responder a la brevedad.`;
                mensajeExito.hidden = false;
                formulario.reset();
            }
        });
    });
});
