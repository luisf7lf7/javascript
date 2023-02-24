// var edad = prompt("Ingresa tú edad: ");

// edad = Number(edad);

// if (edad == 18 )
// {
//     console.log("Hola, puede votar, será tu primera vez");
// }
// else if (edad > 18)
// {
//     console.log("Puedes votar de nuevo");
// }
// else
// {
//     console.log("Hola no puedes votar");
// }

if (false)
{
    console.log("Hola");
}
else 
{
    console.log("Soy falso");
}


// Operador ternario

// Condition ? true : false; 

var numero = 2;

var restulado = numero === 1 ? "Es igual a 1" : "No es igual a uno"

console.log(restulado);

// Reto

var P = " Piedra";
var Pp = "Papel";
var T = " Tijera";

function juego (usuario,cpu)
{
    if (usuario === cpu)
    {
        console.log("Nadie ha ganado, ha sido un empate con " + usuario + " " + cpu);
    }
    else if (usuario === P && cpu === T)
    {
        console.log("el usuario ha ganado con " + usuario);
    }
    else if (usuario === Pp && cpu === P)
    {
        console.log("el usuario ha ganado con " + usuario);
    }
    else if (usuario === T && cpu === Pp)
    {
        console.log("el usuario ha ganado con " + usuario);
    }
    else
    {
        console.log("La cpu ha ganado con " + cpu);
    }
}

juego(P,Pp)

