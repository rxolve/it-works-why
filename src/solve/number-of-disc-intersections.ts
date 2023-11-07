export const numberOfDiscIntersections = (A: number[]) => {
	// Implement your solution here
	const leftPosition = A.map((a, i) => {
		return i - a;
	});

	const rightPosition = A.map((a, i) => {
		return i + a;
	});

	let result = 0;
	for (let i = 0; i < A.length; i++) {
		for (let j = i + 1; j < A.length; j++) {
			if (rightPosition[i] >= leftPosition[j]) result++;
		}
	}

	return result;
};
