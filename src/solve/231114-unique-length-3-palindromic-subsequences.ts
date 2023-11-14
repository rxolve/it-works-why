/*
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
*/

export const countPalindromicSubsequence = (s: string): number => {
	const seen = new Set<string>();
	const n = s.length;
	const firstOccurList = new Array(26).fill(n);
	const lastOccurList = new Array(26).fill(-1);

	for (let i = 0; i < n; i++) {
		const idx = s.charCodeAt(i) - 97;
		firstOccurList[idx] = Math.min(firstOccurList[idx], i);
		lastOccurList[idx] = Math.max(lastOccurList[idx], i);
	}

	for (let i = 0; i < 26; i++) {
		const first = firstOccurList[i];
		const last = lastOccurList[i];
		if (last - first > 1) {
			for (let j = first + 1; j < last; j++) {
				seen.add(s[first] + s[j] + s[last]);
			}
		}
	}

	return seen.size;
};
