import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  maxOfTwoNumbers,
  findLongestWord,
  sumArray,
  averageNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  greatestProduct,
} from "../src/funcArray.js";

const shuffle = (currentArray) => {
  // let array = currentArray.slice();
  let array = [...currentArray];
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter--);
    array[index] = [array[counter], (array[counter] = array[index])][0];
  }
  return array;
};

it("1+1 = 2", () => assert.strictEqual(1 + 1, 2));

describe("Find the maximun - maxOfTwoNumbers #1", () => {
  it("Defines maxOfTwoNumbers", () => {
    assert.strictEqual(typeof maxOfTwoNumbers, "function");
  });
  it("First parameter larger", () => {
    assert.strictEqual(maxOfTwoNumbers(2, 1), 2);
  });

  it("Second parameter larger", () => {
    assert.strictEqual(maxOfTwoNumbers(1, 3), 3);
  });

  it("First and Second parameter equal", () => {
    assert.strictEqual(maxOfTwoNumbers(4, 4), 4);
  });
});

describe("Finding Longest Word - findLongestWord #2", () => {
  it("Defines findLongestWord", () => {
    assert.strictEqual(typeof findLongestWord, "function");
  });

  it("returns undefined testh an empty array", () => {
    assert.strictEqual(findLongestWord([]), undefined);
  });

  it("returns the word test an 1-word array", () => {
    assert.strictEqual(findLongestWord(["test"]), "test");
  });

  it("returns the first occurrence word when longest have multiple occurrences ", () => {
    assert.strictEqual(findLongestWord(["foo", "bar"]), "foo");
    assert.strictEqual(findLongestWord(["bar", "foo"]), "bar");
  });

  it("returns the longest occurrence when test has multiple words", () => {
    let words = ["a", "zab", "12abc", "$$abcd", "abcde", "factoriaF5"];
    for (let i = 0; i < 10; i++) {
      assert.strictEqual(findLongestWord(shuffle(words)), "factoriaF5");
    }
  });
});

describe("Calculating a Sum - sumArray #3", () => {
  it("Defines sumArray", () => {
    assert.strictEqual(typeof sumArray, "function");
  });

  it("returns zero testh an empty array", () => {
    assert.strictEqual(sumArray([]), 0);
  });

  it("returns the number testh one number array", () => {
    assert.strictEqual(sumArray([4]), 4);
  });

  it("returns zero if all elements are zero", () => {
    assert.strictEqual(sumArray([0, 0, 0, 0, 0]), 0);
  });

  it("returns the sum, potestive", () => {
    assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15);
  });

  it("returns the sum, negative", () => {
    assert.strictEqual(sumArray([-1, -2, -3, -4, -5]), -15);
  });
});

describe("Calculating the Average - averageNumbers #4", () => {
  it("Defines averageNumbers", () => {
    assert.strictEqual(typeof averageNumbers, "function");
  });

  it("returns undefined testh an empty array", () => {
    assert.strictEqual(averageNumbers([]), undefined);
  });

  it("returns the average of a unique element array", () => {
    assert.strictEqual(averageNumbers([9]), 9);
  });

  it("returns the average even testh negative values", () => {
    assert.strictEqual(averageNumbers([9, -3, -4, 6]), 2);
  });

  it("returns the average of the array", () => {
    assert.strictEqual(averageNumbers([9, 10, 82, 92, 32, 102, 58]), 55);
  });

  it("returns the average of the array, float result", () => {
    assert.strictEqual(averageNumbers([1, 2]), 1.5);
  });
});

describe("Calculating the Average - averageWordLength #5", () => {
  it("Defines averageWordLength", () => {
    assert.strictEqual(typeof averageWordLength, "function");
  });

  it("returns undefined testh an empty array", () => {
    assert.strictEqual(averageWordLength([]), undefined);
  });

  it("returns the length of a unique element array", () => {
    assert.strictEqual(averageWordLength(["bcncodes"]), 8);
  });

  it("returns the length of a unique element array, float", () => {
    assert.strictEqual(averageWordLength(["a", "ab"]), 1.5);
  });

  it("returns the average of a the array", () => {
    assert.strictEqual(
      averageWordLength([
        "Bcncodes",
        "Madrid",
        "Barcelona",
        "Paris",
        "Miami",
        "Mexico",
        "Berlin",
        "Programmers",
      ]),
      7
    );
  });
});

describe("Unique Arrays - uniquifyArray #6", () => {
  it("Defines uniquifyArray", () => {
    assert.strictEqual(typeof uniquifyArray, "function");
  });

  it("returns undefined testh an empty array", () => {
    assert.strictEqual(uniquifyArray([]), undefined);
  });
  //deepStrictEqual para comparar arrays en node.js
  it("returns the array when having a single element", () => {
    assert.deepStrictEqual(uniquifyArray(["FactoriaF5"]), ["FactoriaF5"]);
  });

  it("returns the correct array when having an array of the same element", () => {
    assert.deepStrictEqual(
      uniquifyArray(["FactoriaF5", "FactoriaF5", "FactoriaF5"]),
      ["FactoriaF5"]
    );
  });
  it("returns the same array when no element is repeated", () => {
    assert.deepStrictEqual(uniquifyArray(["Cat", "Dog", "Cow"]), [
      "Cat",
      "Dog",
      "Cow",
    ]);
  });

  it("returns the uniquified array", () => {
    assert.deepStrictEqual(
      uniquifyArray([
        "iPhone",
        "Samsung",
        "Android",
        "iOS",
        "iPhone",
        "Samsung",
        "Nokia",
        "Blackberry",
        "Android",
      ]),
      ["iPhone", "Samsung", "Android", "iOS", "Nokia", "Blackberry"]
    );
  });
});

describe("Finding Elements - doesWordExist #7", () => {
  it("Defines doesWordExist", () => {
    assert.strictEqual(typeof doesWordExist, "function");
  });

  it("returns false testh an empty array", () => {
    assert.strictEqual(doesWordExist([]), false);
  });

  it("returns true if the word we are looking is the only one on the array", () => {
    assert.strictEqual(doesWordExist(["machine"], "machine"), true);
  });

  it("returns false if the word we are looking is not in the array", () => {
    assert.strictEqual(
      doesWordExist(
        ["machine", "poison", "eat", "apple", "horse"],
        "ratatouille"
      ),
      false
    );
  });

  it("returns true if the word we are looking is in the array", () => {
    assert.strictEqual(
      doesWordExist(
        ["pizza", "sandwich", "snack", "soda", "book", "computer"],
        "book"
      ),
      true
    );
  });
});

describe("Counting Repetion - howManyTimes #8", () => {
  it("Defines howManyTimes", () => {
    assert.strictEqual(typeof howManyTimes, "function");
  });
  it('returns false testh an empty array', ()=> {
    assert.strictEqual(howManyTimes([]),undefined);
  });
  it('returns one when the word appears only one time on the array', ()=> {
    assert.strictEqual(howManyTimes(['a', 'b', 'c'], 'a'),1);
  });
  it('returns zero when the word does not appears on the array', ()=> {
    assert.strictEqual(howManyTimes(['a', 'b', 'c'], 'z'),0);
  });
  it('returns five when the word appears 5 times on the array', ()=> {
    assert.strictEqual(howManyTimes(['basketball', 'football', 'tennis', 'rugby', 'rugby', 'ping pong', 'rugby', 'basketball', 'rugby', 'handball', 'rugby'], 'rugby'),5);
  });
});

describe('Counting Repetion - greatestProduct', ()=> {
   it('Defines greatestProduct #9', ()=> {
       assert.strictEqual(typeof greatestProduct,'function');
     });
  
   it('Return 1 when all the numbers of the arrays are 1', ()=> {
       let matrix = [
         [1, 1, 1, 1],
         [1, 1, 1, 1],
        [1, 1, 1, 1],
         [1, 1, 1, 1]
       ];
       assert.strictEqual(greatestProduct(matrix),1);
     });
  
   it('Return maxProduct when all max is horizontal', ()=> {
       let matrix = [
         [9, 9, 9, 9],
         [1, 1, 1, 1],
         [1, 1, 1, 1],
         [1, 1, 1, 1]
       ];
       assert.strictEqual(greatestProduct(matrix),6561);
     });
  
   it('Return maxProduct when all max is horizontal, not first row', ()=> {
       let matrix = [
         [1, 1, 1, 1],
         [1, 1, 1, 1],
         [9, 9, 9, 9],
         [1, 1, 1, 1]
       ];
       assert.strictEqual(greatestProduct(matrix),6561);
     });
  
   it('Return maxProduct when all max is vertical', ()=> {
       let matrix = [
         [9, 1, 1, 1],
         [9, 1, 1, 1],
         [9, 1, 1, 1],
         [9, 1, 1, 1]
       ];
       assert.strictEqual(greatestProduct(matrix),6561);
     });
  
   it('Return maxProduct when all max is vertical, not first column', ()=> {
       let matrix = [
         [1, 9, 1, 1],
         [1, 9, 1, 1],
         [1, 9, 1, 1],
         [1, 9, 1, 1]
       ];
       assert.strictEqual(greatestProduct(matrix),6561);
   });
  
     it('Return maxProduct when all max is diagonal', ()=> {
       let matrix = [
         [9, 1, 1, 1],
         [1, 9, 1, 1],
         [1, 1, 9, 1],
         [1, 1, 1, 9]
       ];
       assert.strictEqual(greatestProduct(matrix),6561);
     });
  
  
  
     it('Return 16 when all the numbers of the arrays are 2', ()=> {
       let matrix = [
         [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
         [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
         [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
         [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
         [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
        [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
         [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
         [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
         [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
         [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
         [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
         [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
         [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
         [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
         [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
         [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
         [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
        [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
         [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
       [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
       ];
       assert.strictEqual(greatestProduct(matrix),70600674);
    });
  });