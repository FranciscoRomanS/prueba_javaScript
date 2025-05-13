// Ejercicio 1
// Declara una función que acepte una palabra como parámetro 
// y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. 
// Ejemplo: Para "Ana" devolverá "A N A".


// function separarLetras(palabra) {
//   const arrayLetras = palabra.split('');    // Convertir el string en un array de letras
//   const arrayMayusculas = arrayLetras.map(letra => letra.toUpperCase());   // Convertir cada letra a mayúscula
//   return arrayMayusculas.join(' ');        //Espaciar las letras con espacios 
// }
// console.log(separarLetras("Ana"));

// _________________________________________________________________________________________________________________

// Ejercicio 2
// Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre.
//  Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

// function contarPalabras(nombre) {
  
//   var palabras = nombre.split(' ');                        // Convertir el string en un array de palabras
//   var contador = 0;
//     for (var i = 0; i < palabras.length; i++) {             //  Contar palabras no vacías con un bucle for
//     if (palabras[i].length > 0) {
//       contador++;
//     }
//   }
  
 
//   return contador;                                         // Devolver el contador
// }
// console.log(contarPalabras("Antonio Alberto Jesús")); // 3
    
//____________________________________________________________________________________________________________________
// Ejercicio 3:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.
