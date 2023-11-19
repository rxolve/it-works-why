/*
Given an integer array nums, your goal is to make all elements in nums equal. To complete one operation, follow these steps:

Find the largest value in nums. Let its index be i (0-indexed) and its value be largest. If there are multiple elements with the largest value, pick the smallest i.
Find the next largest value in nums strictly smaller than largest. Let its value be nextLargest.
Reduce nums[i] to nextLargest.
Return the number of operations to make all elements in nums equal.
 */

export const reductionOperations = (nums: number[]): number => {
	nums.sort((a, b) => b - a);
	let count = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] !== nums[i + 1]) {
			count += i + 1;
		}
	}
	return count;
};
