// DESAFÍO CLASE 6

var gran_bretana = ["Londres", "Birmingham", "Nottingham", "Leeds", "Sheffield", "Cardiff", "Liverpool", "Manchester", "Newcastle", "Sunderland", "Glasgow"];
var espana = ["Madrid", "Barcelona", "Sevilla", "Valencia", "Bilbao", "San Sebastián", "La Coruña", "Palma de Mallorca", "Tenerife", "Las Palmas"];
var italia = ["Roma", "Milán", "Turín", "Nápoles", "Florencia", "Venecia", "Verona", "Bérgamo", "Cagliari", "Palermo", "Génova"]

console.log(gran_bretana, espana, italia);

console.log(gran_bretana.length);
console.log(espana.length);
console.log(italia.length);


console.log(gran_bretana.join("+"));
console.log(espana.join("+"));
console.log(italia.join("+"));


console.log(gran_bretana.toString().toUpperCase());
console.log(espana.toString().toUpperCase());
console.log(italia.toString().toUpperCase());


console.log(gran_bretana.toString().toLowerCase());
console.log(espana.toString().toLowerCase());
console.log(italia.toString().toLowerCase());


console.log(gran_bretana.concat(espana, italia));


var norte_britanico = gran_bretana.slice(6, 11);
console.log(norte_britanico);

var norte_espanol = espana.slice(4, 7);
console.log(norte_espanol);

var norte_italiano = italia.slice(2, 4);
console.log(norte_italiano);


gran_bretana.push("Stonehenge");
console.log(gran_bretana);
console.log(gran_bretana.length);

espana.push("Valladolid");
console.log(espana);
console.log(espana.length);

italia.push("Capri");
console.log(italia);
console.log(italia.length);




/*

- - - - - - - DESAFÍO CLASE 5 - - - - - - -

class Viajero {
    constructor(nombre, apellido, edad, tour) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.tour = tour;
        this.temporada = temporada;
    }
}

var nombre = prompt("Ingresá tu nombre:");
var apellido = prompt("Ingresá tu apellido:");
var edad = parseInt(prompt("Ingresá tu edad"));
var tour = prompt("Ingresá el tour elegido:");
var temporada = prompt("Ingresá la temporada elegida (primavera / verano / otoño / invierno");

var viajero_1 = new Viajero(nombre, apellido, edad, tour, temporada);

alert("Hola " + viajero_1.nombre + "! Elegiste viajar a " + viajero_1.tour + " en " + viajero_1.temporada + ".");





- - - - - - - DESAFÍO CLASE 4 - - - - - - -

var nombre = prompt("¿Cómo te llamás?");
var edad = parseInt(prompt("¿Qué edad tenés?"));
var valor = parseFloat(prompt("¿Cuánto pensás que cuesta un tour? (en dólares)"));
var tour = 2000;

function bienvenida() {
    if (edad < 18) {
        alert("Hola, " + nombre + "! Sos menor de edad, no podés viajar solo.");
    } else if (edad < 35) {
        alert("Hola, " + nombre + "! Tenés la edad ideal para viajar.");
    } else if (edad < 50) {
        alert("Hola, " + nombre + "! Trabajás mucho, nada mejor que darse un gusto de vez en cuando.");
    } else if (edad < 65) {
        alert("Hola, " + nombre + "! Todavía estás a tiempo de viajar.");
    } else {
        alert("Hola, " + nombre + "! Podés viajar pero con cuidado.");
    }
}

function respuesta_valor() {
    if (valor > tour) {
        var mayor = valor - tour;
        alert("¡El tour es más barato de lo que pensabas! Cuesta " + mayor + " dólares menos.");
    } else if (valor == tour) {
        alert("¡Increíble! Acertaste!");
    } else {
        var menor = tour - valor;
        alert("¡Tan barato no puede ser el tour, recordá que incluye aéreos! Cuesta " + menor + " dólares más de lo que suponías.");
    }
}

function final() {
    bienvenida() + respuesta_valor(valor);
}

final();
*/