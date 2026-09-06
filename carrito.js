const CLAVE_CARRITO_PANEL = "hermanos-jota-carrito";

function obtenerCarritoPanel() {
    try {
        const datos = JSON.parse(localStorage.getItem(CLAVE_CARRITO_PANEL));
        return Array.isArray(datos)
            ? datos.filter((idProducto) => PRODUCTOS.some((producto) => producto.id === idProducto))
            : [];
    } catch {
        return [];
    }
}

function guardarCarritoPanel(carrito) {
    localStorage.setItem(CLAVE_CARRITO_PANEL, JSON.stringify(carrito));
    window.dispatchEvent(new Event("carritoactualizado"));
}

function agruparProductosCarrito() {
    return obtenerCarritoPanel().reduce((grupos, idProducto) => {
        const producto = PRODUCTOS.find((item) => item.id === idProducto);

        if (!producto) {
            return grupos;
        }

        const grupo = grupos.find((item) => item.producto.id === idProducto);
        if (grupo) {
            grupo.cantidad += 1;
        } else {
            grupos.push({ producto, cantidad: 1 });
        }

        return grupos;
    }, []);
}

function obtenerCantidadCarrito() {
    return obtenerCarritoPanel().length;
}

function actualizarContadorCarritoPanel() {
    const contador = document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = obtenerCantidadCarrito();
    }
}

function formatearPrecioCarrito(precio) {
    return `$ ${precio.toLocaleString("es-AR")}`;
}

function crearLineaCarrito(grupo) {
    const articulo = document.createElement("article");
    articulo.className = "carrito-linea";

    const imagen = document.createElement("img");
    imagen.src = grupo.producto.imagen;
    imagen.alt = "";

    const contenido = document.createElement("div");
    contenido.className = "carrito-linea-contenido";

    const nombre = document.createElement("h3");
    nombre.textContent = grupo.producto.nombre;

    const detalle = document.createElement("p");
    detalle.textContent = `${formatearPrecioCarrito(grupo.producto.precio)} · Cantidad: ${grupo.cantidad}`;

    const quitarUno = document.createElement("button");
    quitarUno.className = "carrito-quitar";
    quitarUno.type = "button";
    quitarUno.textContent = "Quitar una unidad";
    quitarUno.addEventListener("click", () => {
        const carrito = obtenerCarritoPanel();
        const posicion = carrito.indexOf(grupo.producto.id);
        if (posicion !== -1) {
            carrito.splice(posicion, 1);
            guardarCarritoPanel(carrito);
        }
    });

    const quitarTodo = document.createElement("button");
    quitarTodo.className = "carrito-quitar carrito-quitar-todo";
    quitarTodo.type = "button";
    quitarTodo.textContent = "Eliminar";
    quitarTodo.addEventListener("click", () => {
        guardarCarritoPanel(obtenerCarritoPanel().filter((id) => id !== grupo.producto.id));
    });

    const acciones = document.createElement("div");
    acciones.className = "carrito-linea-acciones";
    acciones.append(quitarUno, quitarTodo);
    contenido.append(nombre, detalle, acciones);
    articulo.append(imagen, contenido);

    return articulo;
}

function renderizarCarritoPanel() {
    actualizarContadorCarritoPanel();

    const lista = document.getElementById("lista-carrito");
    const vacio = document.getElementById("carrito-vacio");
    if (!lista || !vacio) {
        return;
    }

    lista.replaceChildren();
    const grupos = agruparProductosCarrito();
    vacio.hidden = grupos.length !== 0;

    grupos.forEach((grupo) => lista.appendChild(crearLineaCarrito(grupo)));
}

function cerrarCarritoPanel() {
    document.body.classList.remove("carrito-abierto");
    document.getElementById("panel-carrito")?.setAttribute("aria-hidden", "true");
}

function iniciarCarritoPanel() {
    renderizarCarritoPanel();
    window.addEventListener("carritoactualizado", renderizarCarritoPanel);
    window.addEventListener("storage", renderizarCarritoPanel);

    const abrir = document.getElementById("abrir-carrito");
    const cerrar = document.getElementById("cerrar-carrito");
    const fondo = document.getElementById("fondo-carrito");

    abrir?.addEventListener("click", () => {
        renderizarCarritoPanel();
        document.body.classList.add("carrito-abierto");
        document.getElementById("panel-carrito")?.setAttribute("aria-hidden", "false");
    });
    cerrar?.addEventListener("click", cerrarCarritoPanel);
    fondo?.addEventListener("click", cerrarCarritoPanel);
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            cerrarCarritoPanel();
        }
    });
}

document.addEventListener("DOMContentLoaded", iniciarCarritoPanel);
