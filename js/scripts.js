//DESAFÍO CLASE 5

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

var viajero_1 = new Viajero(nombre, apellido, edad, tour);

alert("Hola " + viajero_1.nombre + "! Elegiste viajar a " + viajero_1.tour + " en " + viajero_1.temporada + ".");





/* DESAFÍO CLASE 4

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