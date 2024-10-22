//todo Suma de dos números
//? Crea una función que tome dos números como argumentos y retorne su suma.

const number1 = 10;
const number2 = 1;

if (typeof number1 === "number" && typeof number2 === "number") {
  const totalSum = number1 + number2;

  console.log(totalSum);
} else {
  console.error("Para la suma los dos tienen que ser datos de tipo numero");
}
