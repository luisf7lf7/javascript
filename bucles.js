var estudiantes = ["Maria", "Sergio", " Rosa", "Daniel"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++)
{
    saludarEstudiantes(estudiantes[i]);
}

// Opcion 2

for(var elemento of estudiantes){
    saludarEstudiantes(elemento);
}

// While

var contador = 0;

while (contador < estudiantes.length)
{
    saludarEstudiantes(estudiantes[contador])
    contador++
}

// opcion 2
console.log("while opcion 2");

while (estudiantes.length > 0)
{
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}