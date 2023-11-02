export const binaryInsertionSort = (A: number[]) => {
	let sorted: number[] = [];
	A.forEach((e, i) => {
		let left = 0;
		let right = sorted.length - 1;

		while (left < right) {
			const mid = Math.floor((left + right) / 2);
			if (e < sorted[mid]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}

		if (e < sorted[left]) {
			sorted.splice(left, 0, e);
		} else {
			sorted.splice(left + 1, 0, e);
		}
	});

	return sorted;
};
