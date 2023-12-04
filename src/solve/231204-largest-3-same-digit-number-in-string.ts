/*
You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.
*/

export const largestGoodInteger = (num: string): string => {
	let maxGoodInteger = '';

	for (let i = 0; i < num.length - 2; i++) {
		const str = num.slice(i, i + 3);
		if (str[0] === str[1] && str[1] === str[2]) {
			maxGoodInteger = maxGoodInteger < str ? str : maxGoodInteger;
		}
	}

	return maxGoodInteger;
};
