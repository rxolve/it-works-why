/*
There is an integer array nums that consists of n unique elements, but you have forgotten it. However, you do remember every pair of adjacent elements in nums.

You are given a 2D integer array adjacentPairs of size n - 1 where each adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums.

It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear in any order.

Return the original array nums. If there are multiple solutions, return any of them.
*/

export const restoreArray = (adjacentPairs: number[][]): number[] => {
	const map = new Map<number, number[]>();
	for (let [u, v] of adjacentPairs) {
		if (!map.has(u)) map.set(u, []);
		if (!map.has(v)) map.set(v, []);
		map.get(u)!.push(v);
		map.get(v)!.push(u);
	}

	const n = adjacentPairs.length + 1;
	const res = new Array(n).fill(0);
	for (let [k, v] of map.entries()) {
		if (v.length === 1) {
			res[0] = k;
			break;
		}
	}

	res[1] = map.get(res[0])![0];
	for (let i = 2; i < n; i++) {
		const adj = map.get(res[i - 1])!;
		res[i] = adj[0] === res[i - 2] ? adj[1] : adj[0];
	}

	return res;
};
