/*
The chess knight has a unique movement, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L). The possible movements of chess knight are shown in this diagaram:

A chess knight can move as indicated in the chess diagram below:


We have a chess knight and a phone pad as shown below, the knight can only stand on a numeric cell (i.e. blue cell).


Given an integer n, return how many distinct phone numbers of length n we can dial.

You are allowed to place the knight on any numeric cell initially and then you should perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps.

As the answer may be very large, return the answer modulo 1e9 + 7.
*/

export const knightDialer = (n: number): number => {
	const mod = 1e9 + 7;
	const moves = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];
	const dp = new Array(n + 1).fill(0).map(() => new Array(10).fill(1));
	for (let i = 2; i <= n; i++) {
		for (let j = 0; j < 10; j++) {
			dp[i][j] = 0;
			for (const move of moves[j]) {
				dp[i][j] = (dp[i][j] + dp[i - 1][move]) % mod;
			}
		}
	}
	let ans = 0;
	for (let i = 0; i < 10; i++) {
		ans = (ans + dp[n][i]) % mod;
	}
	return ans;
};
