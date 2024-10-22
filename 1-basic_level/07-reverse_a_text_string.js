// todo Inversión de una cadena de texto
// ? Escribe una función que reciba una cadena y retorne su versión invertida.

const text = "hola";

const reverseString = (t) => {
  return t.split("").reverse().join("");
};

console.log(reverseString(text));

// todo sin metodos de js
// const invertirCadena = (cadena) => {
//   let cadenaInvertida = "";

//   for (let i = cadena.length - 1; i >= 0; i--) {
//     cadenaInvertida += cadena[i];
//   }

//   return cadenaInvertida;
// };

// const texto = "Hola";
// console.log(invertirCadena(texto));
