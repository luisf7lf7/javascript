var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas.length);

console.log(frutas[0]);

console.log(frutas);

// Método de push agrega elmentos al array

var masFrutas = frutas.push("Uvas");

console.log(frutas);

// Método de pop elimina el último elemento que existe en el arrya
var ultimo = frutas.pop();
console.log(frutas);

// Médodo unshift agrega elementos al array al inicio

var inicio =  frutas.unshift("Pera","Mora");
console.log(frutas);

// Método shift eliminar el elmento que se encuentre en el inicio

var borrarFrutas = frutas.shift();
console.log(frutas);

// Método indexof indica el índice o posición del array del elemento

var posición = frutas.indexOf("Cereza");
console.log(posición);

