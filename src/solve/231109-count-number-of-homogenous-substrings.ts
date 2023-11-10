/* 
Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 109 + 7.

A string is homogenous if all the characters of the string are the same.

A substring is a contiguous sequence of characters within a string.
*/

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
