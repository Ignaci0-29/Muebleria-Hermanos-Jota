# Mueblería Hermanos Jota

Sitio web frontend para Hermanos Jota, una mueblería de diseño inspirada en la calidez de los materiales nobles, la artesanía y el diseño atemporal.

## Funcionalidades

- Página de inicio con presentación de la marca y productos destacados.
- Catálogo dinámico organizado por categorías.
- Búsqueda por nombre o categoría.
- Detalle de cada producto con imagen, descripción, precio y características.
- Carrito lateral con persistencia en `localStorage`.
- Contador de productos en el carrito.
- Acciones para quitar una unidad o eliminar un producto completo.
- Formulario de contacto con validación y confirmación de envío simulado.
- Diseño responsive con enfoque Mobile First.
- Navegación con HTML semántico, etiquetas asociadas y textos alternativos.

## Tecnologías

- HTML5
- CSS3, Flexbox y CSS Grid
- JavaScript
- `localStorage`

## Estructura

```text
Muebleria-Hermanos-Jota/
├── index.html             # Inicio y productos destacados
├── productos.html         # Catálogo y buscador
├── producto.html          # Detalle de producto y carrito lateral
├── contacto.html          # Formulario de contacto
├── estilos.css            # Estilos responsive y Mobile First
├── productos-data.js      # Datos del catálogo
├── inicio.js              # Renderizado de destacados
├── catalogo.js            # Carga y búsqueda de productos
├── carrito.js             # Panel y persistencia del carrito
├── producto.js            # Renderizado del detalle
├── contacto.js            # Validación del formulario
└── Kit-de-imágenes-HJota/ # Logo e imágenes de productos
```

## Cómo ejecutar

Es un proyecto estático y no requiere instalación de dependencias ni backend.

1. Abrir la carpeta en Visual Studio Code.
2. Ejecutar `index.html` con Live Server o abrirlo directamente en el navegador.

## Estado del proyecto

El sitio permite explorar productos, consultar sus detalles y administrar un carrito simulado desde el navegador. El carrito se guarda localmente y el formulario de contacto simula el envío del mensaje. No incluye checkout, pagos ni conexión con un backend.

Los precios del catálogo son demostrativos.

## Identidad de marca

La interfaz utiliza la paleta de Hermanos Jota, Inter para textos e interfaz y Georgia como tipografía editorial. El logo original se conserva sin deformaciones y se presenta sobre un fondo claro para asegurar su contraste.

**Hermanos Jota**  
Casa Taller · Av. San Juan 2847  
Buenos Aires, Argentina