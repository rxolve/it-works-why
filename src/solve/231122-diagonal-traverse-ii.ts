/*
Given a 2D integer array nums, return all elements of nums in diagonal order as shown in the below images.
*/

export const findDiagonalOrder = (nums: number[][]): number[] => {
	const result: number[] = [];
	const map = new Map<number, number[]>();
	let maxKey = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums[i].length; j++) {
			const key = i + j;
			maxKey = Math.max(maxKey, key);
			if (!map.has(key)) {
				map.set(key, []);
			}
			map.get(key)?.push(nums[i][j]);
		}
	}

	for (let i = 0; i <= maxKey; i++) {
		result.push(...(map.get(i) ?? []).reverse());
	}

	return result;
};
