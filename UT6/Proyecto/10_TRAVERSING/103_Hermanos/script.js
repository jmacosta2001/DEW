const contenedor = document.getElementById('contenedor');
const botones = document.querySelectorAll('button');

// Obtener el segundo párrafo (el que es el nodo de referencia)
const segundoParrafo = contenedor.getElementsByTagName('p')[1];

// Botón para mostrar el hermano anterior (usando `previousSibling`)
document.getElementById('mostrarHermanoAnterior').addEventListener('click', () => {
  const hermanoAnterior = segundoParrafo.previousSibling;  // Accede al nodo hermano anterior (puede ser texto o comentario)
  if (hermanoAnterior) {
   // alert(`Hermano anterior (usando previousSibling): ${hermanoAnterior.nodeType === 3 ? `'Texto: ${hermanoAnterior.textContent.trim()}'` : hermanoAnterior.nodeName}`);
  hermanoAnterior.style.color="red";
  }
});

// Botón para mostrar el hermano siguiente (usando `nextSibling`)
document.getElementById('mostrarHermanoSiguiente').addEventListener('click', () => {
  const hermanoSiguiente = segundoParrafo.nextSibling;  // Accede al nodo hermano siguiente (puede ser texto o comentario)
  if (hermanoSiguiente) {
   // alert(`Hermano siguiente (usando nextSibling): ${hermanoSiguiente.nodeType === 3 ? `'Texto: ${hermanoSiguiente.textContent.trim()}'` : hermanoSiguiente.nodeName}`);
   hermanoSiguiente.style.color="blue";
  }
});

// Botón para cambiar el contenido del hermano anterior (usando `previousElementSibling`)
document.getElementById('cambiarHermanoAnterior').addEventListener('click', () => {
  const hermanoAnteriorElemento = segundoParrafo.previousElementSibling;  // Solo los elementos HTML
  if (hermanoAnteriorElemento) {
    hermanoAnteriorElemento.textContent = 'Hermano anterior cambiado';  // Cambia el contenido del hermano anterior
    alert(`Hermano anterior cambiado (usando previousElementSibling): ${hermanoAnteriorElemento.textContent}`);
  }
});

// Botón para cambiar el contenido del hermano siguiente (usando `nextElementSibling`)
document.getElementById('cambiarHermanoSiguiente').addEventListener('click', () => {
  const hermanoSiguienteElemento = segundoParrafo.nextElementSibling;  // Solo los elementos HTML
  if (hermanoSiguienteElemento) {
    hermanoSiguienteElemento.textContent = 'Hermano siguiente cambiado';  // Cambia el contenido del hermano siguiente
    alert(`Hermano siguiente cambiado (usando nextElementSibling): ${hermanoSiguienteElemento.textContent}`);
  }
});
