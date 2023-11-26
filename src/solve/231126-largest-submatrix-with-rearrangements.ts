/*
You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order.

Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.
*/

export const largestSubmatrix = (matrix: number[][]): number => {
	const m = matrix.length;
	const n = matrix[0].length;

	// Count the number of consecutive 1s for each column
	const counts = new Array(n).fill(0);
	for (let i = 0; i < m; i++) {
		for (let j = 0, count = 0; j < n; j++) {
			matrix[i][j] === 1 ? counts[j]++ : (counts[j] = 0);
		}
		// Sort the counts in descending order
		counts.sort((a, b) => b - a);
		// Calculate the area of the largest submatrix
		for (let j = 0; j < n; j++) {
			matrix[i][j] = counts[j] * (j + 1);
		}
	}

	// Find the maximum area
	let max = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n && matrix[i][j] > 0; j++) {
			max = Math.max(max, matrix[i][j]);
		}
	}

	return max;
};
