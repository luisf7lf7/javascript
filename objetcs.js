var miAuto = 
{
    marca: "Nissan",
    modelo: "Corolla",
    annio: 2007
};
console.log(miAuto);
console.log(miAuto.annio);
console.log(miAuto['annio']);

var miAuto = 
{
    marca: "Nissan",
    modelo: "Corolla",
    annio: 2007,
    detalleDelAuto: function(){
        console.log(`Modelo ${this.modelo} Año${this.annio}`)
    }
};

console.log(miAuto.detalleDelAuto());