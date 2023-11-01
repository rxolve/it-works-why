export const demicalToBinary = (n: number): string => {
	let bitString = '';

	while (n > 1) {
		bitString += n % 2;
		n = Math.floor(n / 2);
	}
	bitString += n;

	const result = bitString.split('').reverse().join('');
	return result;
};
