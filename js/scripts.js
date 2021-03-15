// - - - - - - - DESAFÍO CLASE 9 - - - - - - -

// Al seleccionar el tour se deja sólo el div con la bandera del tour seleccionado, eliminando los otros divs con las banderas que no correspondan al tour elegido
// y se agrega un <h1> arriba con el texto "Elegiste 'tour elegido'!".

function enviar() {

    var tour = document.getElementById("tour").value;

    switch (tour) {

        case "gb":

            var gran_bretana_1 = document.getElementById("espana");
            gran_bretana_1.remove();
            var gran_bretana_2 = document.getElementById("italia");
            gran_bretana_2.remove();
            var gran_bretana_3 = document.getElementById("alemania");
            gran_bretana_3.remove();
            var gran_bretana_4 = document.getElementById("br_ur");
            gran_bretana_4.remove();
            var gran_bretana_5 = document.getElementById("argentina");
            gran_bretana_5.remove();

            var parrafo = document.createElement("h1");
            var content = document.createTextNode("¡Elegiste Gran Bretaña!");
            parrafo.appendChild(content);
            var current = document.getElementById("gran_bretana");
            current.insertBefore(parrafo, current.childNodes[0]);

            break;

        case "es":

            var espana_1 = document.getElementById("gran_bretana");
            espana_1.remove();
            var espana_2 = document.getElementById("italia");
            espana_2.remove();
            var espana_3 = document.getElementById("alemania");
            espana_3.remove();
            var espana_4 = document.getElementById("br_ur");
            espana_4.remove();
            var espana_5 = document.getElementById("argentina");
            espana_5.remove();

            var parrafo = document.createElement("h1");
            var content = document.createTextNode("¡Elegiste España!");
            parrafo.appendChild(content);
            var current = document.getElementById("espana");
            current.insertBefore(parrafo, current.childNodes[0]);

            break;

        case "it":

            var italia_1 = document.getElementById("gran_bretana");
            italia_1.remove();
            var italia_2 = document.getElementById("espana");
            italia_2.remove();
            var italia_3 = document.getElementById("alemania");
            italia_3.remove();
            var italia_4 = document.getElementById("br_ur");
            italia_4.remove();
            var italia_5 = document.getElementById("argentina");
            italia_5.remove();

            var parrafo = document.createElement("h1");
            var content = document.createTextNode("¡Elegiste Italia!");
            parrafo.appendChild(content);
            var current = document.getElementById("italia");
            current.insertBefore(parrafo, current.childNodes[0]);

            break;

        case "al":

            var alemania_1 = document.getElementById("gran_bretana");
            alemania_1.remove();
            var alemania_2 = document.getElementById("espana");
            alemania_2.remove();
            var alemania_3 = document.getElementById("italia");
            alemania_3.remove();
            var alemania_4 = document.getElementById("br_ur");
            alemania_4.remove();
            var alemania_5 = document.getElementById("argentina");
            alemania_5.remove();

            var parrafo = document.createElement("h1");
            var content = document.createTextNode("¡Elegiste Alemania!");
            parrafo.appendChild(content);
            var current = document.getElementById("alemania");
            current.insertBefore(parrafo, current.childNodes[0]);

            break;

        case "bu":

            var br_ur_1 = document.getElementById("gran_bretana");
            br_ur_1.remove();
            var br_ur_2 = document.getElementById("espana");
            br_ur_2.remove();
            var br_ur_3 = document.getElementById("italia");
            br_ur_3.remove();
            var br_ur_4 = document.getElementById("alemania");
            br_ur_4.remove();
            var br_ur_5 = document.getElementById("argentina");
            br_ur_5.remove();

            var parrafo = document.createElement("h1");
            var content = document.createTextNode("¡Elegiste Brasil y Uruguay!");
            parrafo.appendChild(content);
            var current = document.getElementById("br_ur");
            current.insertBefore(parrafo, current.childNodes[0]);

            break;

        case "ar":

            var argentina_1 = document.getElementById("gran_bretana");
            argentina_1.remove();
            var argentina_2 = document.getElementById("espana");
            argentina_2.remove();
            var argentina_3 = document.getElementById("italia");
            argentina_3.remove();
            var argentina_4 = document.getElementById("alemania");
            argentina_4.remove();
            var argentina_5 = document.getElementById("br_ur");
            argentina_5.remove();

            var parrafo = document.createElement("h1");
            var content = document.createTextNode("¡Elegiste Argentina!");
            parrafo.appendChild(content);
            var current = document.getElementById("argentina");
            current.insertBefore(parrafo, current.childNodes[0]);

            break;
    }
}


// Al darle ENTER al input "Cantidad" se agrega un <h1> antes del mismo, con el texto "Apretaste Enter!".

function capturarEnter(elEvento) {
    console.log(elEvento.keyCode);
    if (elEvento.keyCode == 13) {
        var current2 = document.getElementById("cantidad");
        current2.insertAdjacentHTML("beforebegin", "<h1>Apretaste Enter!</h1>");
    }
}




// - - - - - - - DESAFÍO CLASE 8 - - - - - - -

// Pregunta por Prompt qué tour elegir y agrega sobre elelemento correspondiente al tour elegido un párrafo con el texto "Elegiste 'tour elegido'".

var usuario = parseInt(prompt("Elegí tu viaje (del 1 al 6):"));

switch (usuario) {
    case 1:
        var parrafo = document.createElement("p");
        var content = document.createTextNode("¡Elegiste Gran Bretaña");
        parrafo.appendChild(content);
        var current = document.getElementById("gran_bretana");
        current.insertBefore(parrafo, current.childNodes[0]);
        break;
    case 2:
        var parrafo = document.createElement("p");
        var content = document.createTextNode("¡Elegiste España!");
        parrafo.appendChild(content);
        var current = document.getElementById("espana");
        current.insertBefore(parrafo, current.childNodes[0]);
        break;
    case 3:
        var parrafo = document.createElement("p");
        var content = document.createTextNode("¡Elegiste Italia!");
        parrafo.appendChild(content);
        var current = document.getElementById("italia");
        current.insertBefore(parrafo, current.childNodes[0]);
        break;
    case 4:
        var parrafo = document.createElement("p");
        var content = document.createTextNode("¡Elegiste Alemania!");
        parrafo.appendChild(content);
        var current = document.getElementById("alemania");
        current.insertBefore(parrafo, current.childNodes[0]);
        break;
    case 5:
        var parrafo = document.createElement("p");
        var content = document.createTextNode("¡Elegiste Brasil y Uruguay!");
        parrafo.appendChild(content);
        var current = document.getElementById("br_ur");
        current.insertBefore(parrafo, current.childNodes[0]);
        break;
    case 6:
        var parrafo = document.createElement("p");
        var content = document.createTextNode("¡Elegiste Argentina!");
        parrafo.appendChild(content);
        var current = document.getElementById("argentina");
        current.insertBefore(parrafo, current.childNodes[0]);
        break;
}



/*

// - - - - - - - PRIMERA ENTREGA DEL PROYECTO FINAL - - - - - - -

var tours = [
    { numero: 1, destino: "Gran Bretaña" },
    { numero: 2, destino: "España" },
    { numero: 3, destino: "Italia" },
    { numero: 4, destino: "Alemania" },
    { numero: 5, destino: "Brasil y Uruguay" },
    { numero: 6, destino: "Argentina" },
]

console.log(tours);


var usuario2 = parseInt(prompt("Elegí tu viaje del 1 al 6:"));

function mostrar() {
    if (usuario2 >= 1 && usuario2 <= tours.length) {
        for (var i = 0; i < tours.length; i++) {
            if (usuario2 == tours[i].numero) {
                alert("¡Felicitaciones! Elegiste recorrer las ciudades y canchas de " + tours[i].destino + ".");
            }
        }
    } else {
        alert("Te equivocaste de número, intentá de nuevo por favor.");
    }
}

mostrar();

*/




/*

// - - - - - - - DESAFÍO COMPLEMENTARIO CLASE 6 - - - - - - -


// 1) Productos

var productos = [
    { nombre: "martillo", precio: 800 },
    { nombre: "clavo", precio: 3 },
    { nombre: "tornillo", precio: 5 },
    { nombre: "llave", precio: 1300 },
    { nombre: "destornillador", precio: 300 },
    { nombre: "pinza", precio: 500 },
    { nombre: "arandela", precio: 10 },
];

function ordenar_precio(arreglo, criterio) {
    if (criterio == "A")
        console.log(arreglo.sort(
            function(a, b) {
                return a.precio - b.precio;
            }
        ));

    if (criterio == "D")
        console.log(arreglo.sort(
            function(a, b) {
                return b.precio - a.precio;
            }
        ));
}

ordenar_precio(productos, "A");


// 2) Personas

var personas = [
    { nombre: "Luis", edad: 45 },
    { nombre: "Cecilia", edad: 12 },
    { nombre: "Maximiliano", edad: 3 },
    { nombre: "Arya", edad: 31 },
    { nombre: "Raúl", edad: 44 },
    { nombre: "Esteban", edad: 26 },
    { nombre: "Marcela", edad: 62 },
];

function ordenar_edad(arreglo, criterio) {
    if (criterio == "A")
        console.log(arreglo.sort(
            function(a, b) {
                return a.edad - b.edad;
            }
        ));

    if (criterio == "D")
        console.log(arreglo.sort(
            function(a, b) {
                return b.edad - a.edad;
            }
        ));
}

ordenar_edad(personas, "D");


// 3) Date

var date = [
    { nombre: "Luis", fecha: "1994/12/09" },
    { nombre: "Cecilia", fecha: "1954/03/25" },
    { nombre: "Maximiliano", fecha: "1977/08/02" },
    { nombre: "Arya", fecha: "2015/10/19" },
    { nombre: "Raúl", fecha: "1941/06/16" },
    { nombre: "Esteban", fecha: "1965/02/11" },
    { nombre: "Marcela", fecha: "1988/10/30" },
];

function ordenar_fecha(arreglo, criterio) {
    if (criterio == "A")
        console.log(arreglo.sort(
            function(a, b) {
                if (a.fecha > b.fecha) {
                    return 1;
                }
                if (a.fecha < b.fecha) {
                    return -1;
                }
                return 0;

            }
        ));

    if (criterio == "D")
        console.log(arreglo.sort(
            function(a, b) {
                if (a.fecha > b.fecha) {
                    return -1;
                }
                if (a.fecha < b.fecha) {
                    return 1;
                }
                return 0;
            }));
}

ordenar_fecha(date, "A");


// 4) Equipos

class Equipo {
    constructor(nombre, localidad, división) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.division = división;
    }
}

function ordenar_equipo(arreglo, criterio) {
    if (criterio == "A")
        console.log(arreglo.sort(
            function(a, b) {
                if (a.nombre > b.nombre) {
                    return 1;
                }
                if (a.nombre < b.nombre) {
                    return -1;
                }
                return 0;

            }
        ));

    if (criterio == "D")
        console.log(arreglo.sort(
            function(a, b) {
                if (a.nombre > b.nombre) {
                    return -1;
                }
                if (a.nombre < b.nombre) {
                    return 1;
                }
                return 0;
            }));
}

var equipo1 = new Equipo("Tigre", "Victoria", 2);
var equipo2 = new Equipo("Excursionistas", "Belgrano", 4);
var equipo3 = new Equipo("Newell's Old Boys", "Rosario", 1);
var equipo4 = new Equipo("Morón", "Morón", 2);
var equipo5 = new Equipo("River Plate", "Núñez", 1);
var equipo6 = new Equipo("Los Andes", "Lomas de Zamora", 3);
var equipo7 = new Equipo("Defensores de Cambaceres", "Ensenada", 5);


var equipos = [equipo1, equipo2, equipo3, equipo4, equipo5, equipo6, equipo7];

ordenar_equipo(equipos, "A");
*/




/*
// - - - - - - - DESAFÍO CLASE 6 - - - - - - -

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
*/



/*
// - - - - - - - DESAFÍO CLASE 5 - - - - - - -

class Viajero {
    constructor(nombre, apellido, edad, tour, temporada) {
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
*/



/*
// - - - - - - - DESAFÍO CLASE 4 - - - - - - -

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