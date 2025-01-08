// Obtener el elemento objetivo
const titulo = document.getElementById('titulo');

// Botón para añadir una clase
document.getElementById('addClase').addEventListener('click', () => {
  /**
   * classList.add añade una clase al elemento.
   * Si la clase ya existe, no hace nada (evita duplicados).
   */
  titulo.classList.add('resaltado');
  alert('Clase "resaltado" añadida.');
});

// Botón para quitar una clase
document.getElementById('removeClase').addEventListener('click', () => {
  /**
   * classList.remove elimina una clase del elemento.
   * Si la clase no existe, no hace nada.
   */
  titulo.classList.remove('resaltado');
  alert('Clase "resaltado" eliminada.');
});

// Botón para alternar una clase
document.getElementById('toggleClase').addEventListener('click', () => {
  /**
   * classList.toggle añade la clase si no existe o la elimina si ya está presente.
   */
  const estaOculto = titulo.classList.toggle('oculto');
  alert(estaOculto ? 'Clase "oculto" añadida (Elemento oculto).' : 'Clase "oculto" eliminada (Elemento visible).');
});

// Botón para verificar si un elemento tiene una clase
document.getElementById('checkClase').addEventListener('click', () => {
  /**
   * classList.contains devuelve true si el elemento tiene la clase especificada, de lo contrario, false.
   */
  const tieneClase = titulo.classList.contains('resaltado');
  alert(tieneClase ? 'El elemento tiene la clase "resaltado".' : 'El elemento no tiene la clase "resaltado".');
});
