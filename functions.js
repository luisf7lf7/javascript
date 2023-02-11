// Declarativa

function miFuncion(){
    return 3;
};

miFuncion();

function saludar(nombre){
    console.log(`Hola ${nombre}`);
};

function sumar(a,b){
    var resultado = a + b;
    return resultado;
};

var resultado = sumar(10,20);
console.log(resultado)

function sumar2()
{
    return a + b;
};

var resultado2 = sumar(30,40);
console.log(resultado2)

saludar("Luis");

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
};

saludarEstudiantes("Luis Felipe Bustos");
// Expresivas o Anónimas

var miFuncion = function(a,b){
    return a + b;
};

miFuncion();


var saludar1 = function (nombre) {
    console.log(`Hola ${nombre}`);
};

saludar1("Felipe");
