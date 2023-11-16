/*
Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.
*/

export const findDifferentBinaryString = (nums: string[]): string => {
	const n = nums.length;
	const max = Math.pow(2, n);
	const set = new Set(nums.map((num) => parseInt(num, 2)));
	for (let i = 0; i < max; i++) {
		if (!set.has(i)) {
			return i.toString(2).padStart(n, '0');
		}
	}
	return '';
};
