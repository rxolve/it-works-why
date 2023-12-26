# You have n dice, and each die has k faces numbered from 1 to k.

# Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7.

class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        dp = [[0 for _ in range(target + 1)] for _ in range(n + 1)]
        mod = 10 ** 9 + 7
        
        for i in range(1, k + 1):
            if i <= target:
                dp[1][i] = 1
        
        for i in range(2, n + 1):
            for j in range(1, target + 1):
                for m in range(1, k + 1):
                    if j - m >= 0:
                        dp[i][j] = (dp[i][j] + dp[i - 1][j - m]) % mod
        
        return dp[n][target]