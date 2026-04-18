// EASY

// CONTAINS DUPLICATE

/// instead of brute force (checking every item in array against every other item)
/// instead of sorting array (checking each pair)
/// store items in object and check if value is already in there
function hasDuplicate(nums) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    // index of 0 will be falsey
    // if (seen[nums[i]] !== undefined) {
    if (nums[i] in seen) {
      return true;
    }
    seen[nums[i]] = true;
  }
  return false;
}

/// simplify with for...of loop
/// don't need index, just care about values
function hasDuplicate2(nums) {
  const seen = {};
  for (let num of nums) {
    if (seen[num]) return true;
    seen[num] = true;
  }
  return false;
}

/// rewritten using set (unique values)
function hasDuplicate3(nums) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }
  return false;
}

/// using set, more concise
function hasDuplicate4(nums) {
  return new Set(nums).size < nums.length;
}

// VALID ANAGRAM

/// first compare length
/// split strings into arrays, sort arrays, then join back into strings to compare
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  return s.split("").sort().join("") === t.split("").sort().join("");
}

/// build frequency maps for each string and then compare
function isAnagram2(s, t) {
  if (s.length !== t.length) return false;

  const countS = {};
  const countT = {};

  for (let char of s) {
    countS[char] = (countS[char] || 0) + 1;
  }

  for (let char of t) {
    countT[char] = (countT[char] || 0) + 1;
  }

  for (let key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }

  return true;
}

/// simplify frequency map solution (build using counts in s, then subtract counts in t)
/// still compare lengths first
function isAnagram3(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    // if character doesn't exist or count is 0, immediately return false
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// TWO SUM

/// brute force - nested loop
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/// more efficient - hash map
function twoSum2(nums, target) {
  const map = {}; // val:index

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const needed = target - current;

    // has the needed number been looped over already
    // check undefined because index of 0 will be falsey
    if (needed in map) {
      return [map[needed], i];
    }

    // store current number with index in map
    map[current] = i;
  }
}
