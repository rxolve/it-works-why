export const countDiv = (A: number, B: number, K: number) => {
	// Implement your solution here
	let quoA = Math.floor(A / K);
	let quoB = Math.floor(B / K);
	let result = quoB - quoA;
	if (A % K === 0) {
		result++;
	}
	return result;
};
