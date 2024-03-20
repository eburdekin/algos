// EASY

// Contains Duplicate

var containsDuplicate = (nums) => {
  const set = new Set(nums);
  const isEqual = set.size === nums.length;

  return !isEqual;
};

var containsDuplicateEarlyExit = function (nums) {
  const set = new Set();

  for (const n of nums) {
    if (set.has(n)) return true;
    set.add(n);
  }
  return false;
};
