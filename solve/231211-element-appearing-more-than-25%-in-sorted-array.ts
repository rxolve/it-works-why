/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
*/
export const findSpecialInteger = (arr: number[]): number => {
  const quarter = Math.floor(arr.length / 4);
  let count = 0;
  let current = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === current) {
      count++;
      if (count > quarter) {
        return current;
      }
    } else {
      current = arr[i];
      count = 1;
    }
  }
  return current;
};
