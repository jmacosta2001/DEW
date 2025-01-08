// Obtener las referencias a los botones y elementos
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const container = document.getElementById('container');

// Usar parentNode
document.getElementById('findParentNode').addEventListener('click', () => {
    /**
     * Resumen:
  parentNode: Devuelve el nodo padre, que puede ser un elemento, un texto, un comentario, etc.
  
     * en este caso, el padre de box1.
     */
    const parentNodeBox1 = box1.parentNode;
    parentNodeBox1.style.backgroundColor = 'lightblue';  // Cambiar color de fondo del contenedor
    alert(`parentNode de box1 es: ${parentNodeBox1.nodeName}`);
});

// Usar parentElement
document.getElementById('findParentElement').addEventListener('click', () => {
    /**
     * parentElement: Devuelve el elemento padre (si es un nodo de tipo elemento).
  
     * En este caso, el padre de box2.
     */
    const parentElementBox2 = box2.parentElement;
    parentElementBox2.classList.add('highlight');  // Añadir clase de resaltado al contenedor
    alert(`parentElement de box2 es: ${parentElementBox2.nodeName}`);
});

// Usar closest
document.getElementById('findClosest').addEventListener('click', () => {
    /**
     * closest: Encuentra el ancestro más cercano que coincida con el selector proporcionado.
     * En este caso, buscamos el contenedor más cercano para box1.
     */
    const closestContainer = box1.closest('.class_container');
    closestContainer.style.border = '2px solid red';  // Resaltar el contenedor más cercano
    alert(`El contenedor más cercano a box1 es: ${closestContainer.id}`);
});


