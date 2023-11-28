/*
Along a long library corridor, there is a line of seats and decorative plants. You are given a 0-indexed string corridor of length n consisting of letters 'S' and 'P' where each 'S' represents a seat and each 'P' represents a plant.

One room divider has already been installed to the left of index 0, and another to the right of index n - 1. Additional room dividers can be installed. For each position between indices i - 1 and i (1 <= i <= n - 1), at most one divider can be installed.

Divide the corridor into non-overlapping sections, where each section has exactly two seats with any number of plants. There may be multiple ways to perform the division. Two ways are different if there is a position with a room divider installed in the first way but not in the second way.

Return the number of ways to divide the corridor. Since the answer may be very large, return it modulo 1e9 + 7. If there is no way, return 0.
*/

export const numberOfWays = (corridor: string): number => {
	// Store 1000000007 in a variable for convenience
	const MOD = 1e9 + 7;

	// Cache the result of each sub-problem
	const cache = new Map();

	// Count the number of ways to divide from "index" to the last index
	// with "seats" number of "S" in the current section
	const count = (index: number, seats: number) => {
		// If we have reached the end of the corridor, then
		// the current section is valid only if "seats" is 2
		if (index == corridor.length) {
			return seats == 2 ? 1 : 0;
		}

		// If we have already computed the result of this sub-problem,
		// then return the cached result
		if (cache.has(`${index}-${seats}`)) {
			return cache.get(`${index}-${seats}`);
		}

		// Result of the sub-problem
		let result = 0;

		// If the current section has exactly 2 "S"
		if (seats == 2) {
			// If the current element is "S", then we have to close the
			// section and start a new section from this index. Next index
			// will have one "S" in the current section
			if (corridor[index] == 'S') {
				result = count(index + 1, 1);
			} else {
				// If the current element is "P", then we have two options
				// 1. Close the section and start a new section from this index
				// 2. Keep growing the section
				result = (count(index + 1, 0) + count(index + 1, 2)) % MOD;
			}
		} else {
			// Keep growing the section. Increment "seats" if present
			// element is "S"
			if (corridor[index] == 'S') {
				result = count(index + 1, seats + 1);
			} else {
				result = count(index + 1, seats);
			}
		}

		// Memoize the result, and return it
		cache.set(`${index}-${seats}`, result);
		return result;
	};

	// Call the count function
	return count(0, 0);
};
