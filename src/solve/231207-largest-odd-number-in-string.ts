/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.
*/

export const largestOddNumber = (num: string): string => {
	for (let i = num.length - 1; i >= 0; i--) {
		if (Number(num[i]) % 2 === 1) {
			return num.slice(0, i + 1);
		}
	}
	return '';
};
