// Obtener referencias a los elementos
const titulo = document.getElementById('titulo');
const parrafo = document.getElementById('parrafo');
const entrada = document.getElementById('entrada');

// Modificar el texto usando textContent
document.getElementById('modificarTexto').addEventListener('click', () => {
  /**
   * textContent permite modificar el texto interno de un elemento.
   */
  parrafo.textContent = 'Texto modificado con textContent.';
});

// Modificar el valor de un input usando value
document.getElementById('modificarValor').addEventListener('click', () => {
  /**
   * value permite acceder o modificar el valor de un elemento de formulario.
   */
  entrada.value = 'Nuevo valor del input.';
});

// Modificar estilos directamente usando style
document.getElementById('modificarEstilo').addEventListener('click', () => {
  /**
   * style permite modificar propiedades CSS directamente desde JavaScript.
   */
  titulo.style.color = 'blue';
  titulo.style.backgroundColor = 'lightgray';
  titulo.style.padding = '10px';
});

// Modificar clases usando className
document.getElementById('modificarClase').addEventListener('click', () => {
  /**
   * className establece las clases CSS de un elemento.
   */
  parrafo.className = 'resaltado';
});

// Modificar un atributo usando attributes
document.getElementById('modificarAtributo').addEventListener('click', () => {
  /**
   * attributes permite acceder y modificar atributos HTML.
   */
  titulo.setAttribute('title', 'Título modificado dinámicamente.');
  alert(`Nuevo título: ${titulo.getAttribute('title')}`);
});

// Ocultar o mostrar un elemento usando hidden
document.getElementById('ocultarElemento').addEventListener('click', () => {
  /**
   * hidden oculta el elemento si es true y lo muestra si es false.
   */
  parrafo.hidden = !parrafo.hidden;
});
