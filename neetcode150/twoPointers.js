// EASY

// VALID PALINDROME

/// built-in functions - reverse
function isPalindrome(string) {
  let reverse = string.split("").reverse().join("");

  if (reverse == string) {
    return true;
  }

  return false;
}

/// manually reverse
function isPalindrome2(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  if (reverse == string) {
    return true;
  } else {
    return false;
  }
}

/// iterate over string from both ends - more efficient, can stop earlier if there's a mismatch
function isPalindrome3(string) {
  let j = string.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[j]) {
      return false;
    }
    j--;
  }
  return true;
}

/// more standard way to write it
function isPalindrome4(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/// modify to account for strings like "Was it a car or a cat I saw?"
/// using built-in functions
function isPalindrome5(string) {
  // const cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const cleaned = string.replace(/[^a-z0-9]/gi, ""); // i flag to handle case-insensitivity

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }

  return true;
}
