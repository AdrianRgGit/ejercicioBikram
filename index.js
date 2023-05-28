//Primer ejercicio//

let variableSinValor;

//Segunda ejercicio//
let booleano1 = true;

let booleano2 = true;

//Tercer ejercicio//

const PI = 3.14;

//Cuatro//

const TAU = PI * 2;

//Cinco//

let booleanoAnd;

if (booleano1 == booleano2) {
  booleanoAnd = true;
} else {
  booleanoAnd = false;
}

//Seis//

let booleanoNot;

if (booleano1 != true) {
  booleanoNot = true;
} else {
  booleanoNot = false;
}

//Siete//

let booleanoMix0;

if ((booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))) {
  booleanoMix0 = true;
} else {
  booleanoMix0 = false;
}

//Ocho//

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

//Nueve//
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

//Diez//
let contarHasta10_2 = 0;

for (i = 0; i <= 10; i++) {
  contarHasta10_2 = i;
}

//Once//
// Ya me ha salido el código cómo debería ser. Nos faltaba sumar postI = postI + postJ++, que es lo mismo que postI += postJ++;.d
let postI = 0;
let postJ = 0;

for (let i = 0; i <= 10; i++) {
    postJ = i;
    postI += postJ++;
  //console.log (postI)
}

//Doce//
// Ya me ha salido el código cómo debería ser. Nos faltaba sumar sumaPares = sumapares + i. Así si que da 20 poniendo i < 10 como dice el enunciado.
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  let par = i % 2;
  if (par == 0) {
    sumaPares += i;
    console.log(sumaPares);
  }
}

// 13
let variableValorNumerico = 0;

// 14
const MiNombre = "Adrián";

// 15
const MiNumeroFav = 5;

// 16
let booleanoOr;

if (booleano1 == booleano2) {
  booleanoOr = true;
} else {
  booleanoOr = false;
}

// 17
let booleanoMix1;

if ((booleano1 && TAU / 2) || variableValorNumerico >= MiNumeroFav) {
  booleanoMix1 = true;
} else {
  booleanoMix1 = false;
}

// 18
let seisNoEsNueve;

if (6 != 9) {
  seisNoEsNueve = true;
} else {
  seisNoEsNueve = false;
}

// 19
let booleanoMix2;
if (variableValorNumerico > 0 || variableValorNumerico < MiNumeroFav * TAU) {
  booleanoMix2 = false;
} else {
  booleanoMix2 = true;
}

// 20
let valorSuma = MiNumeroFav + variableValorNumerico;

// 21
let valorResta = MiNumeroFav - variableValorNumerico;

// 22
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

// 23
let valorDivision = MiNumeroFav / 3;

// 24
let contarHasta10 = 0;
while (contarHasta10 < 10) {
  contarHasta10++;
}

// 25
let preI = 0;
let preJ = 0;

for (let i = 0; i <= 10; i++) {
  preJ = i;
  preI += ++preJ;
  //console.log(i);
  //console.log(preJ);
  //console.log(preI);
}

// 26
let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
  let impar = i % 2;
  //console.log(impar);
  if (impar != 0) {
    sumaImpares += i;
    console.log(sumaImpares);
  }
}