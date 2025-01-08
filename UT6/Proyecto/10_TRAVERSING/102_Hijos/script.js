// Obtener referencias al contenedor
const contenedor = document.getElementById('contenedor');

// Botón para mostrar los elementos hijos usando element.children
document.getElementById('mostrarHijosElement').addEventListener('click', () => {
  /**
   * element.children devuelve todos los elementos hijos (solo los elementos, no los nodos de texto o comentarios).
   */
  const hijosElement = contenedor.children;
  let text = '';
  // Mostrar los nombres de los elementos hijos en la consola usando un bucle for clásico
  for (let i = 0; i < hijosElement.length; i++) {
    text = text + `${hijosElement[i].textContent} \n`;
  }

  alert(`El contenedor tiene ${hijosElement.length} elementos hijos.`);
  alert(` ${text} \n`);
});



// Botón para resaltar el primer hijo usando element.firstElementChild
document.getElementById('resaltarPrimerHijoElement').addEventListener('click', () => {
  /**
   * element.firstElementChild devuelve el primer hijo del contenedor que sea un **elemento** (ignora los nodos de texto).
   */
  const primerHijoElement = contenedor.firstElementChild;
  primerHijoElement.classList.add('highlight');  // Añadir clase para resaltar el primer hijo
  alert(`Primer hijo con element.firstElementChild: ${primerHijoElement.textContent}`);
});

// Botón para resaltar el último hijo usando element.lastElementChild
document.getElementById('resaltarUltimoHijoElement').addEventListener('click', () => {
  /**
   * element.lastElementChild devuelve el último hijo del contenedor que sea un **elemento** (ignora los nodos de texto).
   */
  const ultimoHijoElement = contenedor.lastElementChild;
  ultimoHijoElement.classList.add('highlight');  // Añadir clase para resaltar el último hijo
  alert(`Último hijo con element.lastElementChild: ${ultimoHijoElement.textContent}`);
});

//NODES

// Botón para mostrar los hijos usando node.childNodes
document.getElementById('mostrarHijosNode').addEventListener('click', () => {
  /**
   * node.childNodes devuelve todos los nodos hijos, incluidos los nodos de texto y comentarios.
   */
  const hijosNode = contenedor.childNodes;
  let text = '';

  // Mostrar los nombres de los nodos hijos en la consola usando un bucle for clásico
  for (let i = 0; i < hijosNode.length; i++) {
    const hijo = hijosNode[i];

    // Usar switch con nodeType
    switch (hijo.nodeType) {
      case 1:
        text = text + `Nodo hijo ${i + 1}: Es un nodo de tipo ELEMENTO (nodeType 1), corresponde a un elemento HTML. \n`;
        break;
      case 3:
        text = text + `Nodo hijo ${i + 1}: Es un nodo de tipo TEXTO (nodeType 3), contiene texto. \n`;
        break;
      case 8:
        text = text + `Nodo hijo ${i + 1}: Es un nodo de tipo COMENTARIO (nodeType 8), contiene un comentario. \n`;
        break;
      case 9:
        text = text + `Nodo hijo ${i + 1}: Es un nodo de tipo DOCUMENTO (nodeType 9), corresponde al objeto completo del documento. \n`;
        break;
      case 10:
        text = text + `Nodo hijo ${i + 1}: Es un nodo de tipo DOCTYPE (nodeType 10), contiene la declaración de tipo de documento. \n`;
        break;
      default:
        text = text + `Nodo hijo ${i + 1}: Tipo de nodo desconocido.\n`;
    }

  }
  alert(`El contenedor tiene ${hijosNode.length} nodos hijos (incluyendo nodos de texto).`);
  alert(` ${text} `);
});

// Botón para resaltar el primer hijo usando node.firstChild
document.getElementById('resaltarPrimerHijoNode').addEventListener('click', () => {
 /**
   * node.firstChild devuelve el primer nodo hijo, que puede ser de cualquier tipo (texto, elemento, comentario).
   */
 const primerNodo = contenedor.firstChild;
 if (primerNodo) {
   // Si es un nodo de texto (nodeType 3), resaltar de manera diferente
   if (primerNodo.nodeType === 3) {
      alert(' Whitespace between elements is considered text nodes');
      alert(`Primer nodo de tipo TEXTO: "${primerNodo.textContent.trim()}"`);
   } else {
     // Si es un elemento (nodeType 1), resaltar con un estilo
     primerNodo.classList.add('highlight');
     console.log(`Primer nodo (Elemento): ${primerNodo.nodeName}`);
     alert(`Primer nodo de tipo ELEMENTO: ${primerNodo.nodeName}`);
   }
 }
});
// Botón para resaltar el último hijo usando node.lastChild
document.getElementById('resaltarUltimoHijoNode').addEventListener('click', () => {
  /**
   * node.lastChild devuelve el último nodo hijo, que puede ser un nodo de texto o un elemento.
   */
  const ultimoHijoNode = contenedor.lastChild;
  if (ultimoHijoNode.nodeType === 3) {  // Si es un nodo de texto, se resalta de manera diferente
    alert(`Último hijo con node.lastChild: ${ultimoHijoNode.textContent.trim()}`);
  } else {
    ultimoHijoNode.classList.add('highlight');  // Si es un elemento, lo resaltamos
    alert(`Último hijo con node.lastChild: ${ultimoHijoNode.textContent}`);
  }
});
