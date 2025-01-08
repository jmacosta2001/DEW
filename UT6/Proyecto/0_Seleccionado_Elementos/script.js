// getElementById
//DESCRIPCION :Selecciona el primer elemento que coincide con un id único proporcionado.
//ELEMENTOS QUE PUEDE DEVOLVER: Un único elemento HTML (HTMLElement) o null si no se encuentra.
function cambiarTitulo() {
    const titulo = document.getElementById('titulo');
    titulo.textContent = 'Título cambiado mediante getElementById';
}

// getElementsByName
//DESCRIPCION :Solo selecciona elementos con el atributo name. Es útil en formularios donde los elementos suelen tener este atributo.
//ELEMENTOS QUE PUEDE DEVOLVER:Devuelve todos los elementos coincidentes como una NodeList, no como un solo elemento.
function cambiarTitulo() {
   // Obtener todos los elementos con el atributo name="opcion"
   const opciones = document.getElementsByName('opcion');
   console.log(opciones); // NodeList de los radio buttons
}

// getElementsByClassName
//DESCRIPCION: Selecciona todos los elementos que contienen una o más clases específicas.
//ELEMENTOS QUE PUEDE DEVOLVER: Una colección HTML con todos los elementos coincidentes, o vacía si no encuentra.
function resaltarParrafos() {
    const parrafos = document.getElementsByClassName('parrafo');
    for (let parrafo of parrafos) {
        parrafo.classList.add('highlight');
    }
}

// getElementsByTagName
//DESCRIPCION: Selecciona todos los elementos del documento (o de un contenedor específico) que coinciden con el nombre de la etiqueta HTML.
//ELEMENTOS QUE PUEDE DEVOLVER: Una colección HTML (similar a un array) con todos los elementos coincidentes, o vacía si no encuentra.
function listarElementos() {
    const lista = document.getElementsByTagName('li');
    console.log('Elementos de la lista:');
    for (let item of lista) {
        console.log(item.textContent);
    }
}

// querySelector
//DESCRIPCION Selecciona el primer elemento que coincide con un selector CSS.
//ELEMENTOS QUE PUEDE DEVOLVER: Un único elemento HTML (HTMLElement) o null si no se encuentra.
//
function resaltarPrimerParrafo() {
    const primerParrafo = document.querySelector('.parrafo');
    primerParrafo.style.backgroundColor = 'yellow';
}

//  querySelectorAll
//DESCRIPCION Selecciona todos los elementos que coinciden con un selector CSS.
//ELEMENTOS QUE PUEDE DEVOLVER: Una NodeList (similar a un array) con todos los elementos coincidentes, o vacía si no encuentra.
function resaltarTodosLosParrafos() {
    const todosParrafos = document.querySelectorAll('.parrafo');
    todosParrafos.forEach((parrafo) => {
        parrafo.style.border = '1px solid blue';
    });
}

// Asignar eventos a botones
document.getElementById('cambiarTitulo').addEventListener('click', cambiarTitulo);
document.getElementById('resaltarParrafos').addEventListener('click', () => {
    resaltarParrafos();
    resaltarPrimerParrafo();
    resaltarTodosLosParrafos();
});
document.getElementById('listarElementos').addEventListener('click', listarElementos);
