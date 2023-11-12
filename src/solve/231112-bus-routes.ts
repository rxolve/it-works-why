/*
For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.
*/

export const numBusesToDestination = (
	routes: number[][],
	source: number,
	target: number
): number => {
	if (source === target) return 0;

	const stopToBus = new Map<number, number[]>();
	for (let i = 0; i < routes.length; i++) {
		for (let stop of routes[i]) {
			if (!stopToBus.has(stop)) stopToBus.set(stop, []);
			stopToBus.get(stop)!.push(i);
		}
	}

	const queue = [source];
	const visited = new Set<number>();
	let transfers = 0;

	while (queue.length > 0) {
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const stop = queue.shift()!;
			if (stop === target) return transfers;

			for (let bus of stopToBus.get(stop)!) {
				if (visited.has(bus)) continue;
				visited.add(bus);
				for (let nextStop of routes[bus]) {
					queue.push(nextStop);
				}
			}
		}
		transfers++;
	}

	return -1;
};
