/*
You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.

You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.

There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.

Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.

Return the minimum number of minutes needed to pick up all the garbage.
*/

export const garbageCollection = (garbage: string[], travel: number[]): number => {
	const prefixSum = new Array(travel.length + 1);
	prefixSum[1] = travel[0];
	for (let i = 1; i < travel.length; i++) {
		prefixSum[i + 1] = prefixSum[i] + travel[i];
	}

	const garbageLastPos = new Map();
	const garbageCount = new Map();

	for (let i = 0; i < garbage.length; i++) {
		for (const c of garbage[i]) {
			garbageLastPos.set(c, i);
			garbageCount.set(c, (garbageCount.get(c) || 0) + 1);
		}
	}

	const garbageTypes = 'MPG';

	let ans = 0;

	for (const c of garbageTypes) {
		if (garbageCount.has(c)) {
			const cPrefixSum = prefixSum[garbageLastPos.get(c)] ? prefixSum[garbageLastPos.get(c)] : 0;
			ans += cPrefixSum + garbageCount.get(c);
		}
	}

	return ans;
};
