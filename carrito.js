const CLAVE_CARRITO = "carritoHermanosJota";

//Devuelve el carrito guardado 
function obtenerCarrito() {
    const datos = localStorage.getItem(CLAVE_CARRITO);
    return datos ? JSON.parse(datos) : [];
}

function guardarCarrito(carrito) {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

//Agrega un producto al carrito
function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    const existente = carrito.find((item) => item.id === producto.id);

    if (existente) {
        existente.cantidad += producto.cantidad || 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            cantidad: producto.cantidad || 1,
        });
    }

    guardarCarrito(carrito);
    actualizarContadorHeader();
}

function obtenerCantidadTotal() {
    return obtenerCarrito().reduce((total, item) => total + item.cantidad, 0);
}

function actualizarContadorHeader() {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.textContent = obtenerCantidadTotal();
    }
}

document.addEventListener("DOMContentLoaded", actualizarContadorHeader);
