function sincrona() { return 42; }
async function asincrona() { return 42; }

sincrona();   // 42
asincrona();  // Promise completed: 42

//En el caso de la función sincrona() devuelve directamente el valor 42. 
// En el caso de la función asincrona() devuelve una promesa cumplida inmediatamente, con el valor 42.