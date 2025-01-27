// Función que devuelve una promesa
function promesaSencilla() {
    return new Promise((resolve, reject) => {
        const exito = true; // Cambia esto a false para probar el rechazo
        setTimeout(() => {
            if (exito) {
                resolve('¡La promesa se resolvió correctamente!');
            } else {
                reject('Ocurrió un error al resolver la promesa.');
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Función asincrónica que utiliza await
async function ejecutarPromesa() {
    try {
        const resultado = await promesaSencilla(); // Espera la resolución de la promesa
        console.log(resultado); // Muestra el resultado si se resuelve
    } catch (error) {
        console.error(error); // Maneja el error si la promesa se rechaza
    }
}

// Llama a la función asincrónica
ejecutarPromesa();
