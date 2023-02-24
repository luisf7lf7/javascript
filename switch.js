var numero = 2;

switch (numero)
{
    case 1:
        console.log("Soy uno");
        break;
    case 2:
        console.log("Soy dos");
        break;
    default:
        console.log("Es un numero mayor");
}

// Reto
var P = " Piedra";
var Pp = "Papel";
var T = " Tijera";

// function juego (usuario,cpu)
// {
//     switch(true)
//     {
//         case usuario === cpu:
//             console.log("el usuario ha ganado con " + usuario);
//             break;
//         case usuario === P && cpu === T:
//         case usuario === Pp && cpu === P:
//         case usuario === T && cpu === Pp:
//             console.log("el usuario ha ganado con " + usuario);
//             break;
//         default:
//             console.log("La cpu ha ganado con " + cpu);
//     }
// }

// juego(P,P)


var P = "Piedra";
var Pp = "Papel";
var T = "Tijera";

function juego(usuario, cpu) {
  switch (true) {
    case usuario === cpu:
      console.log("Nadie ha ganado, ha sido un empate con " + usuario + " " + cpu);
      break;
    case usuario === P && cpu === T:
    case usuario === Pp && cpu === P:
    case usuario === T && cpu === Pp:
      console.log("El usuario ha ganado con " + usuario);
      break;
    default:
      console.log("La CPU ha ganado con " + cpu);
  }
}

juego(T, T);