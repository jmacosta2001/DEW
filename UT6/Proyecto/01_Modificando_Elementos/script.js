// Obtener referencias a los elementos
const titulo = document.getElementById('titulo');
const contenido = document.getElementById('contenido');

// Modificar contenido usando innerHTML
document.getElementById('btn_cambiarInnerHTML').addEventListener('click', () => {
  /**
   * innerHTML reemplaza el contenido interno del elemento con una nueva cadena HTML.
   * Aquí añadimos un nuevo párrafo y una lista dentro del div #contenido.
   */
  contenido.innerHTML = `
    <p class="destacado">Contenido reemplazado con innerHTML.</p>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>
  `;
});

// Modificar contenido usando outerHTML
document.getElementById('btn_cambiarOuterHTML').addEventListener('click', () => {
  /**
   * outerHTML reemplaza el elemento completo (incluido el nodo actual) con una nueva cadena HTML.
   * Aquí el div #contenido se reemplaza por un nuevo contenedor <section>.
   */
  contenido.outerHTML = `
    <section id="contenido" class="destacado">
      <h2>Sección reemplazada con outerHTML</h2>
      <p>Ahora este es un elemento <code>&lt;section&gt;</code> en lugar de un <code>&lt;div&gt;</code>.</p>
    </section>
  `;
});

// Modificar contenido usando innerText
document.getElementById('btn_cambiarInnerText').addEventListener('click', () => {
  /**
   * innerText reemplaza solo el texto visible dentro del elemento.
   * No interpreta etiquetas HTML, sino que las muestra como texto literal.
   */
  titulo.innerText = 'Texto modificado con innerText. ¡HTML no funciona aquí!';
});
