/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
  let numMax = 0;
  if (numero1 > numero2) {
    numMax = numero1;
  } else if (numero2 > numero1) {
    numMax = numero2;
  } else if (numero1 === numero2) {
    numMax = numero1;
  }

  return numMax;
}
export function findLongestWord(array) {
  let longestWord = "";
  if (array.length === 0) {
    return undefined;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (longestWord.length < array[i].length) {
        longestWord = array[i];
      } else if (longestWord.length === array[i].length) {
        longestWord = longestWord;
      }
    }
  }

  return longestWord;
}
export function sumArray(array) {
  const suma = array.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  return suma;
}
export function averageNumbers(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    const suma = array.reduce(
      (acumulador, valorActual) => acumulador + valorActual
    );
    const total = suma / array.length;
    return total;
  }
}
export function averageWordLength(array) {
  let sumWordLength = 0;
  if (array.length === 0) {
    return undefined;
  } else if (array.length === 1) {
    sumWordLength = array[0].length;
  } else {
    sumWordLength = array.join("").length;
  }

  return sumWordLength / array.length;
}
export function uniquifyArray(array) {
  if (array.length === 0) {
    return undefined;
  } else if (array.length === 1) {
    return array;
  } else {
    const uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }

    return uniqueArray;
  }
}
export function doesWordExist(array, palabra) {
  let existWord = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === palabra) {
      existWord = true;
    }
  }
  return existWord;
}
export function howManyTimes(array, palabra) {
  if (array.length === 0) {
    return undefined;
  }
  let sumTimes = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === palabra) {
      sumTimes++;
    }
  }
  return sumTimes;
}
export function greatestProduct(array) {
  let maxProduct = 0;

  // Calcular el producto máximo en la dirección horizontal
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= array[i].length - 4; j++) {
      const product =
        array[i][j] * array[i][j + 1] * array[i][j + 2] * array[i][j + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Calcular el producto máximo en la dirección vertical
  for (let i = 0; i <= array.length - 4; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const product =
        array[i][j] * array[i + 1][j] * array[i + 2][j] * array[i + 3][j];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Calcular el producto máximo en la dirección diagonal hacia abajo y a la derecha
  for (let i = 0; i <= array.length - 4; i++) {
    for (let j = 0; j <= array[i].length - 4; j++) {
      const product =
        array[i][j] *
        array[i + 1][j + 1] *
        array[i + 2][j + 2] *
        array[i + 3][j + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Calcular el producto máximo en la dirección diagonal hacia arriba y a la derecha
  for (let i = 3; i < array.length; i++) {
    for (let j = 0; j <= array[i].length - 4; j++) {
      const product =
        array[i][j] *
        array[i - 1][j + 1] *
        array[i - 2][j + 2] *
        array[i - 3][j + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
}