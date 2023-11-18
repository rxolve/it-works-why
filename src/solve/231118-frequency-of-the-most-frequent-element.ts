/*
The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.
*/

export const maxFrequency = (nums: number[], k: number): number => {
	nums.sort((a, b) => a - b);
	let max = 0;
	let sum = 0;
	let i = 0;
	for (let j = 0; j < nums.length; j++) {
		sum += nums[j];
		while (sum + k < nums[j] * (j - i + 1)) {
			sum -= nums[i];
			i++;
		}
		max = Math.max(max, j - i + 1);
	}
	return max;
};
