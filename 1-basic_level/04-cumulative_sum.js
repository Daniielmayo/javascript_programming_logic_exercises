// todo Suma de números del 1 al N
//? Crea una función que reciba un número N y retorne la suma de todos los números del 1 al N.

const number = 2;

const numberSum = (n) => {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
};
console.log(numberSum(number));
