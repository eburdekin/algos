// EASY

// Contains Duplicate
//// Sets store collections of unique values

var containsDuplicate = (nums) => {
  // faster but takes up more memory
  const set = new Set(nums);
  const isEqual = set.size === nums.length;

  return !isEqual;
};

var containsDuplicateEarlyExit = function (nums) {
  // slower but takes up less memory due to early exit
  const set = new Set();

  for (const n of nums) {
    if (set.has(n)) return true;
    set.add(n);
  }
  return false;
};

//// instead of Set, store key-value pairs of char:1 in cache object

var containsDuplicate = function (nums) {
  const cache = {};

  for (const num of nums) {
    if (num in cache) return true;

    cache[num] = 1;
  }

  return false;
};
