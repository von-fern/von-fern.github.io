var string = "hola";
var num = 5;
var bol = true;
var array = ["0", "fer", "mendoza"];
var option = 1;

var output = `${string}  ${num} ${bol} ${array[1]}`;

var op_if = "";
var op_switch = "";
var op_for = 0;
var op_while = 0;
var op_do_while = 0;
var op_continue = 0;
var op_break = 0;

let op__if =        document.getElementById("op__if");
let op__switch =    document.getElementById("op__switch");
let op__for =       document.getElementById("op__for");
let op__while =     document.getElementById("op__while");
let op__do_while =  document.getElementById("op__do_while");
let op__continue =  document.getElementById("op__continue");
let op__break =     document.getElementById("op__break");

/* && ! || */


/* --------------- if --------------- */

if (bol){
    op_if = "true";
}else{
    op_if = "false";
}

op__if.innerHTML = op_if;

/* --------------- switch --------------- */
switch (option) {
    case 1: {
        op_switch = "option 1";
        break;
}
    case 2: {
        op_switch = "option 2";
        break;
}
    default: {
        op_switch = "Default";
}
}

op__switch.innerHTML = op_switch;

/* --------------- for --------------- */

for (var i = 0; i < 10; i++){
    op_for += 10;
}

op__for.innerHTML = op_for;

/* --------------- while --------------- */

var condicion = 0;

while (condicion < 10){
    condicion += 1;
    op_while += condicion * 2;
}

op__while.innerHTML = op_while;

/* --------------- do-while --------------- */

let contador = 4;
do {
  op_do_while += contador;
  contador++;
} while (contador < 4);

op__do_while.innerHTML = op_do_while;

/* --------------- continue --------------- */

for (var i = 0; i < 10; i++){
    if(i == 3){
        continue;
    }
    op_continue += 10;
}

op__continue.innerHTML = op_continue;

for (var i = 0; i < 10; i++){
    if(i == 3){
        break;
    }
    op_break += 10;
}

op__break.innerHTML = op_break;

/* --------------- funciones --------------- */

function areaTriangulo(base, altura){
    area = base * altura / 2;
    console.log(`Area del triangulo con base: ${base} y altura: ${altura} es: ${area}`);
}

areaTriangulo(3,4);
areaTriangulo(4,5);

/* --------------- funciones anonimas --------------- */

const suma = function(a, b) {
    return a + b;
  };
console.log(`Funcion anonima simple: ${suma(5, 3)}`); // 8

/* IIFE (Immediately Invoked Function Expression) */

(function() {
    console.log("¡Hola desde una IIFE anónima!");
  })();

/* --------------- funcion flecha --------------- */

const resta = (a, b) => a - b;
console.log(`Funcion flecha: ${resta(9, 3)}`); // 6

/* ----- funcion flecha autoejecutable ----- */

const resultado = ((a, b) => a + b)(5, 7);
console.log(`Funcion flecha auto ${resultado}`); // 12

let flechaauto = ((a, b) => {
    return a-b;
})(10,5);
console.log(`Funcion flecha auto ${flechaauto}`);

/* --------------- Fer --------------- */
/* --------------- speed --------------- */

const distance =    document.getElementById('distance');
const time =        document.getElementById('time');
const speed =       document.getElementById('speed');
    
function recalcular() {
    const a = parseFloat(distance.value) || 0;
    const b = parseFloat(time.value) || 0;
    speed.value = a / b;
}
    // Actualiza tan pronto se modifique alguno de los campos
distance.addEventListener('change', recalcular);
time.addEventListener('change', recalcular);
    // Mostrar en el input de resultado
document.getElementById('speed').value = speed;

/* -------------------- Generador de Tabla -------------------- */

function crearTabla(csvTexto) {
    const filas = csvTexto.trim().split('\n');
    const table = document.createElement('table');
    filas.forEach((fila, i) => {
      const tr = document.createElement('tr');
      fila.split(',').forEach(texto => {
        const celda = document.createElement(i === 0 ? 'th' : 'td');
        celda.textContent = texto.trim();
        tr.appendChild(celda);
      });
      table.appendChild(tr);
    });
    return table;
  }

  const csv = `nombre,apellido,numero
  fernando,mendoza,99
  ivett,garcia,98`;  
  const cont = document.getElementById('tabla-container');
  cont.appendChild(crearTabla(csv));

  const csvParques = `Parque,Base
  Roma,Ecológico
  Xoclan,Xoclan
  Japónes,Reforma`;
  const tablaParques = document.getElementById('tabla-parques');
  tablaParques.appendChild(crearTabla(csvParques));  

/* ---------- registro de calificaciones ---------- */

var calificaciones = [["Fernando",10],["Ivett",10],["Lyra",5],["Molly",5]];
var cal_conteo = [0,0];
var calSuma = 0;  

for (var i = 0; i < calificaciones.length; i++){
    var l = calificaciones[i][1];
    if (0 < l && l <= 5){
        cal_conteo[0] += 1;
    }
    if (5 < l && l <= 10){
        cal_conteo[1] += 1;
    }
    calSuma += calificaciones[i][1];
}
console.log(`calificaciones: ${calificaciones}`);
console.log(`Conteo de array: ${cal_conteo}`);
console.log(`Promedio: ${calSuma/calificaciones.length}`);

/* ---------- registro de temperaturas ---------- */

var temp = [0,4,4,8,8,12,20,24,-2,32,32,34,34,36,32,30,28,28,24,24,20,20,15,10];
var tmax = -100;
var tmaxh = 0;
var tmin = 100;
var tminh = 0;
var tavg = 0;

for (var i = 0; i < temp.length; i++){
    if (tmin > temp[i]){
        tmin = temp[i];
        tminh = i;
    }
    if(temp[i] > tmax){
        tmax = temp[i];
        tmaxh = i;
    }
    tavg += temp[i];
}

console.log(`Temperatura maxima: ${tmax}, a las: ${tmaxh}`);
console.log(`Temperatura minima: ${tmin}, a las ${tminh}`);
console.log(`Promedio: ${tavg/temp.length}`);

/* ----- contador de numeros pares e impares ----- */

var numbers = [2,5,3,6,1,8,9,4,7];
var parNoPar = [0,0];

for (var i = 0; i < numbers.length; i++){
    var isPar = numbers[i]%2;
    if (isPar === 1){
        parNoPar[1] += 1;
    }
    if (isPar === 0){
        parNoPar[0] += 1;
    }
}
console.log(`Pares: ${parNoPar[0]}, impares: ${parNoPar[1]}`);

/* -------------------- Objetos -------------------- */
/* ----- Literal */

let empleado = {
    nombre: {
        firstname: "Alfonso",
        lastname: "Mendoza"
    },
    numEmpleado: "12345",
    mostrarDatos: function(){
        console.log(`Nombre: ${empleado.nombre.firstname} ${empleado.nombre.lastname} \r\nNumero de empleado ${empleado.numEmpleado}`);
    },
    cambiarNumEmp: function(nuevoNumero){
        empleado.numEmpleado= nuevoNumero;
    }
}

console.log(`Nombre: ${empleado.nombre.firstname} ${empleado.nombre.lastname} \r\nNumero de empleado ${empleado.numEmpleado}`);

let propiedad = "numEmpleado"
console.log(empleado[propiedad]);

empleado.nombre.firstname = "Fernando"
empleado.puesto = "Programador";
console.log(empleado.puesto);

/* --------------- Metodos --------------- */

empleado.mostrarDatos();
empleado.cambiarNumEmp("4321");
empleado.mostrarDatos();

/* --------------- Metodos --------------- */

let triangulo = {
    base: 0,
    altura: 0,
    inicializar: function(b,a){
        triangulo.base = b;
        triangulo.altura = a;
    },
    datosTriangulo: function(){
        console.log(`Base: ${this.base}, altura: ${this.altura}`)
    },
    area: function(){
        // area = b * a / 2
        let area = this.base * this.altura / 2;
        return area;
    }
}

triangulo.inicializar(2,3);
triangulo.datosTriangulo();
let areaTri = triangulo.area();
console.log(`area del triangulo ${areaTri}`);

/* --------------- constructor --------------- */

let constructor = (clienteNombre,clienteEmail) => {
    let cliente = {
        nombre: clienteNombre,
        email: clienteEmail,
        mostrarDatos: function() {
            console.log(`nombre: ${this.nombre}, email: ${this.email}`);
        }
    }
    return cliente;
}

let clienteA = constructor("Fer","Hola");
let clienteB = constructor("Ivett","Adios");

clienteA.mostrarDatos();
clienteB.mostrarDatos();

/* --------------- clousure --------------- */



/* --------------- new --------------- */

function rectangulo(rBase,rAltura) {
    this.base = rBase;
    this.altura = rAltura;
    this.mostrarDatos = function() {
        console.log(`base: ${this.base}, altura: ${this.altura}`);
    };
}

let rectanguloA = new rectangulo(2,3);
let rectanguloB = new rectangulo(3,4);
rectanguloA.mostrarDatos();
rectanguloB.mostrarDatos();

/* ---------- Objetos standar ---------- */

let valor = new Number(5);
let total = valor * 10;
console.log(`Objeto standar Number: ${total}`)

let cadena = new String("Hola");
console.log(`Objeto standar String: ${cadena}`)

/* ---------- String - Metodos */

let smlength =      document.getElementById("sm-length");
let smtoUpperCase = document.getElementById("sm-toUpperCase");
let smtoLowerCase = document.getElementById("sm-toLowerCase");
let smsubstring =   document.getElementById("sm-substring");
let smstartsWith =  document.getElementById("sm-startsWith");
let smendsWith =    document.getElementById("sm-endsWith");
let smincludes =    document.getElementById("sm-includes");
let smindexOf =     document.getElementById("sm-indexOf");
let smreplace =     document.getElementById("sm-replace");

let miCadena = "Ivett";

smlength.innerText = `Metodo length: ${miCadena} con ${miCadena.length} caracteres`;
smtoUpperCase.innerText = `Metodo toUpperCase: ${miCadena} con ${miCadena.toUpperCase()}`;
smtoLowerCase.innerText = `Metodo toLowerCase: ${miCadena} con ${miCadena.toLowerCase()}`;
smsubstring.innerText = `Metodo substring: ${miCadena} con ${miCadena.substring(0,2)}`;
smstartsWith.innerText = `Metodo startsWith: ${miCadena} con ${miCadena.startsWith("I")}`;
smendsWith.innerText = `Metodo endsWith: ${miCadena} con ${miCadena.endsWith("t")}`;
smincludes.innerText = `Metodo includes: ${miCadena} con ${miCadena.includes("t")}`;
smindexOf.innerText = `Metodo indexOf: ${miCadena} con ${miCadena.indexOf("t")}`;
smreplace.innerText = `Metodo replace: ${miCadena} con ${miCadena.replace("ett","ory")}`;

/* ---------- Arrays */

let myArray = new Array(10, 43, 56, 24, 100, 75);
let myArrayA = [1,200,343]

console.log(`Metodo lenght: ${myArray} con ${myArray.length}`);
console.log(`Metodo filter: ${myArray} con ${myArray.filter((item) => {return item > 50;})}`);

let myArrayJoin = myArray.join("-");
console.log(`Metodo join: ${myArray} con ${myArrayJoin}`);
console.log(`Metodo indexOf: ${myArray} con ${myArray.indexOf(24)}`);
console.log(`Metodo slice: ${myArray} con ${myArray.slice(0,4)}`);
console.log(`Metodo push: ${myArray} con ${myArray.push(32)}`);
console.log(`Metodo concat: ${myArray} con ${myArray.concat(myArrayA)}`);
console.log(`Metodo reverse: ${myArray} con ${myArray.reverse()}`);
console.log(`Metodo shift: ${myArray} con ${myArray.shift()}`);
console.log(`Metodo pop: ${myArray} con ${myArray.pop()}`);
console.log(`Metodo splice: ${myArray} con ${myArray.splice(0,5)}`);

/* ---------- String - date */

let mexDate = new Date(1993,8,16);
let xmasDate = new Date(1993,11,24);
let fecha = new Date();
let anotherDay = new Date(2000,0,1,0,0);

fecha.setFullYear(2030);
fecha.setMonth(11);      // Diciembre
fecha.setDate(25);       // Día 25
fecha.setHours(14);      // 14:00 horas
fecha.setMinutes(45);    // 14:45
fecha.setSeconds(30);

console.log(`getFullYear ${     fecha.getFullYear()}`);    // Año (ej. 2025)
console.log(`getMonth ${        fecha.getMonth()}`);       // Mes (0 = enero, 11 = diciembre)
console.log(`getDate ${         fecha.getDate()}`);        // Día del mes (1–31)
console.log(`getDay ${          fecha.getDay()}`);         // Día de la semana (0 = domingo)
console.log(`getHours ${        fecha.getHours()}`);       // Hora (0–23)
console.log(`getMinutes ${      fecha.getMinutes()}`);     // Minutos
console.log(`getSeconds ${      fecha.getSeconds()}`);     // Segundos
console.log(`getMilliseconds ${ fecha.getMilliseconds()}`);// Milisegundos
console.log(`getTime ${         fecha.getTime()}`);        // Milisegundos desde 1970-01-01

console.log(`toString ${        fecha.toString()}`);         // "Tue Jun 17 2025 20:00:00 GMT-0600 (hora estándar central)"
console.log(`toDateString ${    fecha.toDateString()}`);     // "Tue Jun 17 2025"
console.log(`toTimeString ${    fecha.toTimeString()}`);     // "20:00:00 GMT-0600"
console.log(`toISOString ${     fecha.toISOString()}`);      // "2025-06-18T02:00:00.000Z"
console.log(`toLocaleDateString ${fecha.toLocaleDateString()}`); // "17/6/2025" según idioma
console.log(`toLocaleTimeString ${fecha.toLocaleTimeString()}`); // "20:00:00"

/* ---------- Math */
let myvalor = new Number(123.465); 

console.log(`round: ${Math.round(4.5)}`);
console.log(`floor: ${Math.floor(4.9)}`);
console.log(`ceil: ${Math.ceil(4.1)}`);
console.log(`trunc: ${Math.trunc(4.9)}`);

console.log(`min: ${Math.min(3, 7, 1)}`);
console.log(`max: ${Math.max(3, 7, 1)}`);

console.log(`pow: ${Math.pow(2, 3)}`);
console.log(`sqrt: ${Math.sqrt(16)}`);
console.log(`cbrt: ${Math.cbrt(27)}`);

console.log(`PI: ${Math.PI}`);
console.log(`E: ${Math.E}`);

console.log(`Random: ${Math.random()}`);
console.log(`abs: ${Math.abs(-5)}`);

/* ---------- Window */

/*
alert("Hola mundo");                   // Mensaje de alerta
confirm("¿Estás seguro?");             // Devuelve true/false
prompt("¿Cuál es tu nombre?");        // Devuelve string o null
*/


function urlActual(){
    console.log(window.location);
}

function redirigir(){
    window.location = "http://google.com";
}

function recargar(){
    location.reload();
}

function abrir(){
    open("http://google.com");
}

/* -------------------- Controlar elemento -------------------- */

const controlledElement = document.getElementById("controlled_element");

/* ---------- Texto */

let ceText = document.getElementById("ce-text");

ceText.addEventListener("change", function () {
    controlledElement.innerHTML = ceText.value;
});

/* ---------- Background */
const ceBgColor = document.getElementById("ce-bg--color");

ceBgColor.addEventListener("change", function () {
    const valor = ceBgColor.value;
  
    // Reiniciamos clases o estilos previos
    controlledElement.className = "";
  
    // Aplicamos una clase o estilo según lo seleccionado
    if (valor === "ceBgRed") {
      controlledElement.style.backgroundColor = "red";
      controlledElement.style.color = "white";
    } else if (valor === "ceBgGreen") {
      controlledElement.style.backgroundColor = "green";
      controlledElement.style.color = "white";
    } else if (valor === "ceBgBlue") {
      controlledElement.style.backgroundColor = "blue";
      controlledElement.style.color = "white";
    }
});

/* ---------- Justify content */

const ceJc = document.getElementById("ce--jc");

ceJc.addEventListener("change", function () {
    const valor = ceJc.value;
  
    // Reiniciamos clases o estilos previos
    controlledElement.className = "";
  
    // Aplicamos una clase o estilo según lo seleccionado
    if (valor === "ceJcS") {
      controlledElement.style.justifyContent = "start";
    } else if (valor === "ceJcE") {
      controlledElement.style.justifyContent = "end";
    } else if (valor === "ceJcC") {
      controlledElement.style.justifyContent = "center";
    }
});

/* ---------- Insertar elemento */

function insertElemento(){
    let contCE = document.getElementById('cont_ce');
    contCE.insertAdjacentHTML("beforeend","<div id='controlled_element02'>Hello again</div>");
}

function Elemento(){
    let contCE = document.getElementById('cont_ce');
    contCE.insertAdjacentHTML("beforeend","<div'>Hello again</div>");
}

function removeElemento(){
    let contCE = document.getElementById('cont_ce');
    contCE.removeChild(controlledElement);
}

/* ---------- document */

const gE_id =   document.getElementById("t_gE_id"); // Por ID
const gE_c =    document.getElementsByClassName("t_gE_c");  // Por clase (HTMLCollection)
const gE_t =    document.getElementsByTagName("h6");        // Por etiqueta (HTMLCollection)

/*
document.querySelector("div > p");       // Primer elemento que coincide
document.querySelectorAll(".clase");     // Todos los que coinciden (NodeList)
*/

gE_id.innerText = "Nuevo texto";      // Cambia el texto (sin HTML)
gE_id.style.color = "red";            // Cambia estilo

for (let i = 0; i < gE_c.length; i++) {
    gE_c[i].innerHTML = "<b>Texto</b>";
    gE_c[i].classList.add("addborder");     // Agrega clase CSS
}

/* gE_id.setAttribute("data-id", "5");   // Cambia atributos */

const nuevoDiv = document.createElement("div");
nuevoDiv.innerText = "Soy nuevo";

document.body.appendChild(nuevoDiv); // Lo agrega al final del <body>

const eliminar = document.getElementById("rmE");
eliminar.remove(); // Lo borra del DOM

function showDivs(){
    let listDivs = document.getElementsByTagName("div");
    let lDivsIds = [];

    for (let i = 0; i < listDivs.length; i++){
        lDivsIds.push(listDivs[i].id);
    }

    console.log(`Se encontraron los siguientes IDs: \r\n ${lDivsIds.join("\r\n")}`);
}

function bgToRed(){
    let bgSwitch = document.getElementById("bg_change");
    let addColor = "bg_red"
    let removeColor = "bg_blue"
    bgSwitch.classList.remove(removeColor);
    bgSwitch.classList.add(addColor);
}

function bgToBlue(){
    let bgSwitch = document.getElementById("bg_change");
    let addColor = "bg_blue"
    let removeColor = "bg_red"
    bgSwitch.classList.remove(removeColor);
    bgSwitch.classList.add(addColor);

}

/* -------------------- Eventos -------------------- */

const controlledByEvent = document.getElementById("controlled_by_event");
const clickEvent =document.querySelector("#click_event");

clickEvent.addEventListener("click", function () {
    controlledByEvent.innerHTML = "Hola hola";
});

/* -------------------- Atributos compartidos */
/* event.target, e.type*/

const addEvents = () => {
    let lista = document.querySelectorAll("div > h4");

    for(let i = 0; i < lista.length; i++){
        let elemento = lista[i];

        elemento.addEventListener('click',changeBackground);
        elemento.addEventListener('click',changeContent);
    }
}

const changeBackground = (e) => {
    e.target.style.backgroundColor = '#999999';
}
const changeContent = (e) => {
    e.target.innerHTML = 'Modified';
}

addEventListener('load',addEvents);