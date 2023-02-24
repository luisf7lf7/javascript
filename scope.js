var miNombre = "Luis"; // Scope Global

function nombre()
{
    var miApellido = "Bustos"; // Scope Local
    return fullName = miNombre + " " + miApellido;
}

console.log(nombre());