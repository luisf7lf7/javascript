
/* Coercion implicita */
var a = 4 + "7";

console.log(a); //Coercion implicita
console.log(typeof(a)); //Coercion implicita

var b = 4 * "7";

console.log(b); // Coercion explicita
console.log(typeof(b)); // Coercion explicita

var c = 4 / "7";

console.log(c); // Coercion explicita
console.log(typeof(c)); // Coercion explicita

var d = 4 - "7";

console.log(d); // Coercion explicita
console.log(typeof(d)); // Coercion explicita

/* Coercion Explicita */

var e = 20;
var d = e + "";

console.log(d)
console.log(typeof(d))

var f = String(e);
console.log(typeof(f));

