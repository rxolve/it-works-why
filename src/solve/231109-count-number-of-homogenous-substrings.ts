export const countHomogenous = (s: string): number => {
	const mod = 1e9 + 7;
	let count = 0;
	let length = 0;
	let prev = '';

	for (let c of s) {
		length = c === prev ? length + 1 : 1;
		count = (count + length) % mod;
		prev = c;
	}

	return count;
};
