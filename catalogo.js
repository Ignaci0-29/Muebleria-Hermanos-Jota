const RETRASO_CARGA_MS = 800;
const MENSAJE_SIN_RESULTADOS = "No encontramos productos que coincidan con tu búsqueda.";

let productosCargados = [];

function obtenerProductos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRODUCTOS);
        }, RETRASO_CARGA_MS);
    });
}

function formatearPrecio(precio) {
    const precioFormateado = precio.toLocaleString("es-AR");
    return `$ ${precioFormateado}`;
}

function crearEnlaceDetalle(producto, className, contenido) {
    const enlace = document.createElement("a");

    if (className) {
        enlace.className = className;
    }

    enlace.href = `./producto.html#${producto.id}`;

    if (typeof contenido === "string") {
        enlace.textContent = contenido;
    } else {
        enlace.appendChild(contenido);
    }

    return enlace;
}

function crearTarjeta(producto) {
    const articulo = document.createElement("article");
    articulo.className = "producto-card";

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = `${producto.nombre} de Hermanos Jota`;
    imagen.loading = "lazy";

    const enlaceImagen = crearEnlaceDetalle(producto, "producto-imagen", imagen);

    const contenido = document.createElement("div");
    contenido.className = "producto-contenido";

    const categoria = document.createElement("p");
    categoria.className = "producto-categoria";
    categoria.textContent = producto.categoria;

    const titulo = document.createElement("h3");
    titulo.appendChild(crearEnlaceDetalle(producto, "", producto.nombre));

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement("p");
    precio.className = "producto-precio";
    precio.textContent = formatearPrecio(producto.precio);

    const enlaceVer = crearEnlaceDetalle(producto, "producto-enlace", "Ver pieza");

    contenido.append(categoria, titulo, descripcion, precio, enlaceVer);
    articulo.append(enlaceImagen, contenido);

    return articulo;
}

function mostrarSinResultados(lista) {
    const mensaje = document.createElement("p");
    mensaje.className = "sin-resultados";
    mensaje.textContent = MENSAJE_SIN_RESULTADOS;
    lista.appendChild(mensaje);
}

function renderizarProductos(productos) {
    const lista = document.getElementById("lista-productos");
    lista.replaceChildren();

    if (productos.length === 0) {
        mostrarSinResultados(lista);
        return;
    }

    productos.forEach((producto) => {
        lista.appendChild(crearTarjeta(producto));
    });
}

function filtrarProductos(texto) {
    const consulta = texto.trim().toLowerCase();

    if (consulta === "") {
        return productosCargados;
    }

    return productosCargados.filter((producto) => {
        const nombre = producto.nombre.toLowerCase();
        const categoria = producto.categoria.toLowerCase();
        return nombre.includes(consulta) || categoria.includes(consulta);
    });
}

function actualizarResultadoBusqueda(cantidad, hayBusqueda) {
    const resultado = document.getElementById("resultado-busqueda");

    if (!hayBusqueda) {
        resultado.textContent = "";
        return;
    }

    if (cantidad === 0) {
        resultado.textContent = "Sin coincidencias";
        return;
    }

    const etiqueta = cantidad === 1 ? "producto encontrado" : "productos encontrados";
    resultado.textContent = `${cantidad} ${etiqueta}`;
}

function configurarBuscador() {
    const formulario = document.querySelector(".buscador");
    const campoBusqueda = document.getElementById("buscar-producto");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
    });

    campoBusqueda.addEventListener("input", () => {
        const texto = campoBusqueda.value;
        const productosFiltrados = filtrarProductos(texto);
        renderizarProductos(productosFiltrados);
        actualizarResultadoBusqueda(productosFiltrados.length, texto.trim() !== "");
    });
}

async function iniciarCatalogo() {
    const estadoCarga = document.getElementById("estado-carga");
    const lista = document.getElementById("lista-productos");
    const campoBusqueda = document.getElementById("buscar-producto");

    estadoCarga.hidden = false;
    lista.hidden = true;
    campoBusqueda.disabled = true;

    productosCargados = await obtenerProductos();

    estadoCarga.hidden = true;
    lista.hidden = false;
    campoBusqueda.disabled = false;

    renderizarProductos(productosCargados);
    configurarBuscador();
}

document.addEventListener("DOMContentLoaded", iniciarCatalogo);
