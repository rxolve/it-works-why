/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.
*/

export const countCharacters = (words: string[], chars: string): number => {
	let res = 0;
	for (const word of words) {
		let flag = true;
		const charsArr = chars.split('');
		for (const char of word) {
			const index = charsArr.indexOf(char);
			if (index === -1) {
				flag = false;
				break;
			}
			charsArr.splice(index, 1);
		}
		if (flag) {
			res += word.length;
		}
	}

	return res;
};
