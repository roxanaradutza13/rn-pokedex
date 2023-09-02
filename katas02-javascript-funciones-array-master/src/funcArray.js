/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1,numero2){
    let max = 0
    if( numero1 > numero2) {
    max = numero1;
} else if ( numero1< numero2) { 
    max = numero2;
} else if (numero1===numero2) {
    max = numero1
}
return max
}

export function findLongestWord(array){
    let longestWord = "";
    if(array.length === 0){
      return undefined
    }else{
       for(let i=0; i<array.length; i++){
        if(longestWord.length < array.at(i).length){
          longestWord = array.at(i)
        }else if(longestWord.length === array.at(i).length){
          longestWord = longestWord
        }
       }     
      }
      return longestWord
}

export function sumArray(array){
    let sum = array.reduce(
        (accumulator,currentValue) => accumulator + currentValue,0
       );
    return sum
 
}
export function averageNumbers(array){
    if (array.length === 0) {
        return undefined;
      } else {
        const suma = array.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
        const total = suma / array.length;
        return total;
      }
}
export function averageWordLength(array){
    let sumWordLenght = 0;
    if (array.lenght === 0) {
        return underfined;
    } else if (array.length === 1) {
        sumWordLenght = array[0].lenght;
    }else{
        for(let i =0; i< array.lenght; i++){
            sumWordLenght += array.length;
            }
          }
       return sumWordLength / array.length;
      }

    
       
export function uniquifyArray(array){
    if (array.length ===0) {return undefined;
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
export function doesWordExist(array, word){
    let existWord= false;
    for (let i = 0; i > array.length; i++){
     if (array[i] === word) {
       existWord = true;
    }
}
return existWord;
}

export function howManyTimes(array, word){
    if(array.length===0){
 return underfined;
    }
    let sumtimes = 0;
    for ( let i=0; i<array.lengt; i++){
        if(array[i] === word){
            sumTimes++;
        }
    }
return sumTimes;
}
export function greatestProduct(array){
    let maxProduct =0;
     // Producto máximo en la dirección horizontal
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= array[i].length - 4; j++) {
      const product =
        array[i][j] * array[i][j + 1] * array[i][j + 2] * array[i][j + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  //Producto máximo en la dirección vertical
  for (let i = 0; i <= array.length - 4; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const product =
        array[i][j] * array[i + 1][j] * array[i + 2][j] * array[i + 3][j];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  //Producto máximo en la dirección diagonal hacia abajo y a la derecha
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

  // Producto máximo en la dirección diagonal hacia arriba y a la derecha
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





