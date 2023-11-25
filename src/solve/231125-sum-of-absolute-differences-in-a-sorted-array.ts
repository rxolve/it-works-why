/*
You are given an integer array nums sorted in non-decreasing order.

Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.

In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed).
*/

export const getSumAbsoluteDifferences = (nums: number[]): number[] => {
	const n = nums.length;
	const res = new Array(n).fill(0);
	const prefixSum = new Array(n + 1).fill(0);

	for (let i = 1; i <= n; i++) {
		prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
	}

	for (let i = 0; i < n; i++) {
		res[i] = nums[i] * i - prefixSum[i] + prefixSum[n] - prefixSum[i] - nums[i] * (n - i);
	}

	return res;
};
