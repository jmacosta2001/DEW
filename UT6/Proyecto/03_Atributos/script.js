// Obtener referencia al elemento
const titulo = document.getElementById('titulo');

// Botón para ver todos los nombres de atributos
document.getElementById('verAtributos').addEventListener('click', () => {
  /**
   * getAttributeNames devuelve una lista de todos los nombres de atributos del elemento.
   */
  const atributos = titulo.getAttributeNames(); // Devuelve un array
  console.log('Atributos del elemento:', atributos);

  alert(`Atributos del elemento: ${atributos.join(', ')}`);
});

// Botón para obtener el valor del atributo 'class'
document.getElementById('verClase').addEventListener('click', () => {
  /**
   * getAttribute permite obtener el valor de un atributo específico.
   */
  const valorClase = titulo.getAttribute('class');
  console.log('Valor del atributo class:', valorClase);

  alert(`Valor de la clase: ${valorClase}`);
});

// Botón para obtener el valor de un atributo personalizado
document.getElementById('verCustomAttr').addEventListener('click', () => {
  /**
   * También podemos obtener valores de atributos personalizados, como data-attributes.
   */
  const valorCustom = titulo.getAttribute('data-info');
  console.log('Valor del atributo personalizado (data-info):', valorCustom);

  alert(`Valor de data-info: ${valorCustom}`);
});

// Botón para comprobar si existe un atributo
document.getElementById('verSiExiste').addEventListener('click', () => {
  /**
   * hasAttribute devuelve true si el atributo existe, false si no.
   */
  const existeClass = titulo.hasAttribute('class');
  console.log('¿El atributo "class" existe?', existeClass);

  alert(`¿El atributo "class" existe? ${existeClass ? 'Sí' : 'No'}`);
});
