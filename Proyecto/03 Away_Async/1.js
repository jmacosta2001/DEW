// Función asincrónica que utiliza fetch

//IMPORTARNTE
//Para poder utilizar el await dentro de nuestra función, tenemos que asegurarnos de que nuestra función es asíncrona,
// algo que se soluciona simplemente añadiéndole un async antes de definirla.
async function obtenerDatos() {
    try {

        //La palabra clave await se coloca justo antes de una promesa para «esperar a que se resuelva» en lugar de gestionarla con .then()
        // Realiza la solicitud a la API
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Verifica si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }
        
        // Convierte la respuesta a JSON
        const datos = await respuesta.json();
        
        // Muestra los datos en la consola
        console.log('Datos obtenidos:', datos);
    } catch (error) {
        // Manejo de errores
        console.error('Error al obtener los datos:', error);
    }
}

// Llama a la función
obtenerDatos();