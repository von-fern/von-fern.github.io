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


/* if if if if if if if if if if if if if if if */

if (bol){
    op_if = "true";
}else{
    op_if = "false";
}

op__if.innerHTML = op_if;

/* if if if if if if if if if if if if if if if */
/* switch switch switch switch switch switch switch */
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

/* switch switch switch switch switch switch switch */
/* for for for for for for for for for for for for */

for (var i = 0; i < 10; i++){
    op_for += 10;
}

op__for.innerHTML = op_for;

/* for for for for for for for for for for for for */
/* while while while while while while while while */

var condicion = 0;

while (condicion < 10){
    condicion += 1;
    op_while += condicion * 2;
}

op__while.innerHTML = op_while;

/* while while while while while while while while */
/* do-while do-while do-while do-while do-while*/

let contador = 4;
do {
  op_do_while += contador;
  contador++;
} while (contador < 4);

op__do_while.innerHTML = op_do_while;

/* do-while do-while do-while do-while do-while */
/* continue continue continue continue continue */

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

/* continue continue continue continue continue */
