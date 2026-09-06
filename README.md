# Mueblería Hermanos Jota

Sitio web de la Mueblería Hermanos Jota, una marca de muebles de diseño que combina materiales nobles, calidez y funcionalidad para crear espacios que se disfrutan todos los días.

El proyecto propone una experiencia de compra simple y clara: descubrir la colección desde la página de inicio, explorar el catálogo, consultar el detalle de cada pieza y ponerse en contacto con la mueblería para realizar una consulta o solicitar un presupuesto.

## Funcionalidades

- Página de inicio con presentación de la marca y productos destacados.
- Catálogo completo organizado por categorías.
- Búsqueda de productos por nombre o categoría.
- Fichas individuales con imágenes, descripción, precio, medidas, materiales y características.
- Carrito de compra con contador de productos y persistencia en el navegador.
- Formulario de contacto con validación de nombre, email y mensaje.
- Diseño responsive para computadoras, tablets y celulares.
- Navegación accesible con textos alternativos, etiquetas semánticas y mensajes dinámicos.

## Productos

La colección incluye muebles para distintos ambientes del hogar y espacios de trabajo:

- Asientos: butacas, sillas y sillones.
- Living: sofás y piezas de descanso.
- Mesas: mesas de centro, mesas de comedor y mesas de noche.
- Guardado: aparadores y bibliotecas.
- Escritorio: escritorios y sillas de trabajo.

Cada producto cuenta con una ficha propia para conocer sus materiales, medidas, acabados, capacidad y otras especificaciones antes de consultar o agregarlo al carrito.

## Tecnologías utilizadas

- HTML5 para la estructura de las páginas.
- CSS3 para los estilos, la identidad visual y la adaptación a diferentes pantallas.
- JavaScript para el catálogo, la búsqueda, el carrito y la validación del formulario.
- `localStorage` para conservar el carrito durante la navegación.

## Estructura del proyecto

```text
Muebleria-Hermanos-Jota/
├── index.html             # Página de inicio
├── productos.html         # Catálogo de productos
├── contacto.html          # Formulario y datos de contacto
├── estilos.css            # Estilos generales y responsive
├── productos-data.js      # Datos e información del catálogo
├── inicio.js              # Productos destacados de la página de inicio
├── catalogo.js            # Carga, renderizado y búsqueda del catálogo
├── carrito.js              # Lógica y persistencia del carrito
├── contacto.js             # Validación y envío simulado del formulario
└── Kit-de-imágenes-HJota/ # Logos e imágenes de los productos
```

## Cómo ejecutar el proyecto

El proyecto es una aplicación frontend estática, por lo que no necesita instalar dependencias ni configurar un servidor backend.

1. Clonar o descargar este repositorio.
2. Abrir la carpeta en Visual Studio Code.
3. Abrir `index.html` en el navegador.

Para una mejor experiencia de desarrollo se puede utilizar la extensión **Live Server** de Visual Studio Code y abrir el proyecto desde `index.html`.

## Estado del proyecto

La interfaz y la lógica principal del sitio están preparadas para presentar el catálogo, consultar productos y administrar un carrito desde el navegador. Los precios incluidos son ilustrativos y el formulario de contacto utiliza un envío simulado, ya que la conexión con un backend o servicio de mensajería queda para una etapa posterior.

## Identidad de marca

**Hermanos Jota**

Casa Taller · Av. San Juan 2847  
Buenos Aires, Argentina

Un espacio dedicado a muebles con historia, materiales honestos y diseño pensado para acompañar la vida cotidiana.