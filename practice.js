// ARRAY BASICS

// Find min

// Find max

// Sum of array

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

// Average of an array

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

// Flatten an array

// Merge 2 arrays

// Remove falsey values

//

// TWO-POINTERS

// Reverse a string

// Remove duplicates

// Check if array is sorted

//

// HASH MAP/OBJECT LOOKUP

// Contains duplicate

// Count characters in a string

// First non-repeating character

// Most frequent element

// Anagram check

//

// STRING MANIPULATION

// Count vowels

// Capitalize words

//

// BASIC SORTING/COMPARISON

// Sort numbers

// Sort objects by a property
