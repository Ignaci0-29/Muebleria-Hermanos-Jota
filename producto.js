const CLAVE_CARRITO = "hermanos-jota-carrito";

function formatearPrecio(precio) {
    return `$ ${precio.toLocaleString("es-AR")}`;
}

function obtenerCarrito() {
    try {
        const carrito = JSON.parse(localStorage.getItem(CLAVE_CARRITO));
        return Array.isArray(carrito) ? carrito : [];
    } catch {
        return [];
    }
}

function actualizarContadorCarrito() {
    const contador = document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = obtenerCarrito().length;
    }
}

function mostrarCaracteristicas(caracteristicas) {
    const tabla = document.getElementById("tabla-caracteristicas");
    tabla.replaceChildren();

    Object.entries(caracteristicas).forEach(([nombre, valor]) => {
        const fila = document.createElement("tr");
        const etiqueta = document.createElement("th");
        const detalle = document.createElement("td");

        etiqueta.scope = "row";
        etiqueta.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        detalle.textContent = valor;
        fila.append(etiqueta, detalle);
        tabla.appendChild(fila);
    });
}

function mostrarProducto(producto) {
    document.title = `${producto.nombre} | Mueblería Hermanos Jota`;
    document.getElementById("producto-imagen").src = producto.imagen;
    document.getElementById("producto-imagen").alt = `${producto.nombre} de Hermanos Jota`;
    document.getElementById("producto-categoria").textContent = producto.categoria;
    document.getElementById("producto-nombre").textContent = producto.nombre;
    document.getElementById("producto-descripcion").textContent = producto.descripcion;
    document.getElementById("producto-precio").textContent = formatearPrecio(producto.precio);
    mostrarCaracteristicas(producto.caracteristicas);

    document.getElementById("detalle-producto").hidden = false;
    document.getElementById("producto-no-encontrado").hidden = true;

    document.getElementById("boton-carrito").addEventListener("click", () => {
        const carrito = obtenerCarrito();
        carrito.push(producto.id);
        localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
        actualizarContadorCarrito();
        document.getElementById("mensaje-carrito").textContent = "La pieza se añadió al carrito.";
    });
}

function iniciarDetalle() {
    const idProducto = window.location.hash.slice(1);
    const producto = PRODUCTOS.find((item) => item.id === idProducto);

    actualizarContadorCarrito();

    if (producto) {
        mostrarProducto(producto);
    }
}

document.addEventListener("DOMContentLoaded", iniciarDetalle);
