/*
You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

0 <= i < j < nums.length
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7.
*/

export const countNicePairs = (nums: number[]): number => {
	const mod = 1e9 + 7;
	const freq = new Map<number, number>();
	let count = 0;

	for (let num of nums) {
		let rev = Number(num.toString().split('').reverse().join(''));
		let diff = (num - rev + mod) % mod;
		count = (count + (freq.get(diff) || 0)) % mod;
		freq.set(diff, (freq.get(diff) || 0) + 1);
	}

	return count;
};
