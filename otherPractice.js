// ARRAY BASICS

// FIND MIN

/// loop
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMinBuiltIn(arr) {
  return Math.min(...arr);
}

// FIND MAX

/// loop
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++)
    if (arr[i] > max) {
      max = arr[i];
    }
  return max;
}

// built-in
function findMaxBuiltIn(arr) {
  return Math.max(...arr);
}

// SUM OF ARRAY

/// brute-force loop
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/// use reduce
function findSumWithReduce(arr) {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}

// AVERAGE OF ARRAY

/// brute-force loop
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

/// use reduce
function findAverageWithReduce(arr) {
  const sum = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return sum / arr.length;
}

/// use reduce + arrow function, one-line = implicit return
const findAverageWithReduceArrowFunc = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
};

// FLATTEN AN ARRAY

// MERGE 2 ARRAYS
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

function mergeArraysConcat(arr1, arr2) {
  return arr1.concat(arr2);
}

// REMOVE FALSEY VALUES
function removeFalsey(arr) {
  return arr.filter((val) => val);
}

//

// TWO-POINTERS

// REVERSE A STRING
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

// using built-in methods
function reverseString2(str) {
  return str.split("").reverse().join("");
}

// REMOVE DUPLICATES
function removeDuplicates(arr) {}

function removeDupesWithSet(arr) {
  return [...new Set(arr)];
}

//

// HASH MAP/OBJECT LOOKUP

// COUNT CHARS IN STRING
function countChars(str) {
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

// FIRST NON-REPEATING CHAR
function firstNonRepeating(str) {
  const count = {};

  // pass 1: count frequency
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // pass 2: find first non-repeating
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

// MOST FREQUENT ELEMENT
function mostFrequentElement(arr) {
  const count = {};
  let maxCount = 0;
  let result = null;

  for (let el of arr) {
    count[el] = (count[el] || 0) + 1;

    if (count[el] > maxCount) {
      maxCount = count[el];
      result = el;
    }
  }

  return result;
}

//

// STRING MANIPULATION

// COUNT VOWELS
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const count = {};

  for (let char of str) {
    if (vowels.includes(char)) {
      count[char] = (count[char] || 0) + 1;
    }
  }

  return count;
}

// CAPITALIZE WORDS
function capitalizeWords(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

//

// BASIC SORTING/COMPARISON

// SORT NUMBERS
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

//

// MAP PRACTICE

// DOUBLE EACH NUMBER
function doubleEachNumber(arr) {
  return arr.map((item) => item * 2);
}

// CONVERT TO STRINGS
function convertToStrings(arr) {
  return arr.map((item) => `${item}`);
}

// EXTRACT PROPERTY
function extractProperty(arrOfObj, key) {
  return arrOfObj.map((obj) => obj[key]);
}

//

// FILTER PRACTICE

// GET EVEN NUMBERS
function getEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// FILTER OBJS BY PROPERTY (ex: active users only - active=true)
function filterByProperty(arr, key) {
  return arr.filter((obj) => obj[key]);
}

//

// REDUCE PRACTICE

// Object from array of arrays
function objFromArrOfArrs(arr) {
  const obj = {};
  for (const [key, value] of arr) {
    obj[key] = value;
  }
}

function objFromArrOfArrs2(arr) {
  arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}
