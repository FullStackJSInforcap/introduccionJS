console.log("Hola, empezando con JS");

/* Declarar */
var cadenaUno;
/* Inicializar */
cadenaUno = "Dato de ejemplo";
/* Invocar */
console.log(cadenaUno);
/* Reasignar */
cadenaUno = "Nuevo dato";

/* Declarar e inicializar */
var cadenaDos = "Declarada e incializada en un solo paso";

/* Tipo de dato */
/* entero, decimal, lógico, cadena de caracteres */
/* integer, float, boolean, String */
/* Débilmente tipado */

var entero;
entero = 5;
entero = "cadena de caraceters";

/* En un banco */
/* función que permite realizar transacciones entre cuentas */
var montoIngresado = 10000;
var saldo = 10000;
saldo = saldo + montoIngresado; // 20000

/* Defino tipo de dato */
var cadenaCaracteres = "definiendo una variable como String";
var numeroEntero = 456;
var numeroDecimal = 5.4;
var booleanUno = true;
var booleanDos = false;
var booleanOperacion = 5 == 4;

/* Operarla */
/* Operadores */
/* Aritméticos */
/* + - * / % */
/* Suma, Resta, Multiplicación, División, Módulo (Resto) */
/* Módulo: */
/*  2 / 2 = 1
        0 */
/* 3 / 2 = 1
       1 */

/* Lógicos */
/* == != === !== < > <= >= */
console.log(4 == 5); // false
console.log(4 != 5); // true
console.log(4 < 5); // true
console.log(4 >= 5); // false
console.log(4 <= 4); // true
console.log(5 > 5); // false
console.log("2" == 2); // true
console.log("2" === 2); // false

/* Cadenas de caracteres */
/* +: concatenar */
var datoIncrustar = 'ESTE ES EL DATO QUE PUEDE CAMBIAR';
var cadenaDinamica = 'Cadena con un dato que cambia según valor de la variable: ' + datoIncrustar;
console.log(cadenaDinamica);
/* Interpolación */
var cadenaInterpolacion = `Cadena con un dato que cambia según valor de la variable ${datoIncrustar}`;
console.log(cadenaInterpolacion);

/* Ejemplo de diferencia entre concatenar e interpolar */
var numeroUno = 5;
var numeroDos = 7;
var suma = numeroUno + numeroDos;
/* Concatenación */
var mensaje = 'El resultado de la suma de ' + numeroUno + ' + ' + numeroDos + ' = ' + suma;
console.log(mensaje);
/* Interpolación */
mensaje = `El resultado de la suma de ${numeroUno} + ${numeroDos} = ${suma}`;
console.log(mensaje);
