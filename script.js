// Знайти суму та кількість позитивних елементів.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Визначити кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Усі пораховані результати вивести одним повідомленням за допомогою alert.

// Обчислення мають виконуватися в циклі, а не за допомогою методів масиву

const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let amountPositivNumbers = 0;
let countPositivNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    amountPositivNumbers += numbers[i];
    countPositivNumbers++;
  }
}

let maxNumber = numbers[0];
let positionMaxNumber = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
    positionMaxNumber = i;
  }
}

let countNegativNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    countNegativNumbers++;
  }
}

let countPairPositivNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 == 0) {
    countPairPositivNumbers++;
  }
}

let countUnpairPositivNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0 && numbers[i] % 2 !== 0) {
    countUnpairPositivNumbers++;
  }
}

let amountPaarPositivNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 == 0) {
    amountPaarPositivNumbers += numbers[i];
  }
}

let amountUnpaarPositivNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
    amountUnpaarPositivNumbers += numbers[i];
  }
}

let productPositivNumbers = 1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    productPositivNumbers *= numbers[i];
  }
}

alert(`Amount positive numbers are ${amountPositivNumbers}
Count positive numbers are ${countPositivNumbers}
Max number is ${maxNumber} and its position ${positionMaxNumber}
CountNegativNumbers are ${countNegativNumbers}
CountUnpairPositivNumbers are ${countUnpairPositivNumbers}
CountPairPositivNumbers are ${countPairPositivNumbers}
AmountPaarPositivNumbers are ${amountPaarPositivNumbers}
AmountUnpaarPositivNumbers are ${amountUnpaarPositivNumbers}
ProductPositivNumbers are ${productPositivNumbers}`);
