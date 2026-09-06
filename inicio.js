document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("productos-destacados");

    const productosDestacados = [
        "sofa-patagonia",
        "mesa-de-centro-araucaria",
        "butaca-mendoza",
        "aparador-uspallata"
    ];

    productosDestacados.forEach((idProducto) => {
        const producto = PRODUCTOS.find((item) => item.id === idProducto);

        if (!producto) {
            return;
        }

        const articulo = document.createElement("article");
        articulo.className = "producto-card";

        const enlaceImagen = document.createElement("a");
        enlaceImagen.className = "producto-imagen";
        enlaceImagen.href = `./producto.html#${producto.id}`;

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = `${producto.nombre} de Hermanos Jota`;
        imagen.loading = "lazy";

        enlaceImagen.appendChild(imagen);

        const contenido = document.createElement("div");
        contenido.className = "producto-contenido";

        const categoria = document.createElement("p");
        categoria.className = "producto-categoria";
        categoria.textContent = producto.categoria;

        const titulo = document.createElement("h3");

        const enlaceTitulo = document.createElement("a");
        enlaceTitulo.href = `./producto.html#${producto.id}`;
        enlaceTitulo.textContent = producto.nombre;

        titulo.appendChild(enlaceTitulo);

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        const enlaceDetalle = document.createElement("a");
        enlaceDetalle.className = "producto-enlace";
        enlaceDetalle.href = `./producto.html#${producto.id}`;
        enlaceDetalle.textContent = "Ver pieza";

        contenido.append(categoria, titulo, descripcion, enlaceDetalle);
        articulo.append(enlaceImagen, contenido);
        contenedor.appendChild(articulo);
    });
});
