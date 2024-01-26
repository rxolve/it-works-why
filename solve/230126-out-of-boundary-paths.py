# There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

# Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

class Solution(object):
    def findPaths(self, m, n, maxMove, startRow, startColumn):
        """
        :type m: int
        :type n: int
        :type maxMove: int
        :type startRow: int
        :type startColumn: int
        :rtype: int
        """

        MOD = 10**9 + 7
        dp = [[[0 for _ in range(n)] for _ in range(m)] for _ in range(maxMove + 1)]
        for move in range(1, maxMove + 1):
            for i in range(m):
                for j in range(n):
                    for x, y in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                        if x < 0 or y < 0 or x == m or y == n:
                            dp[move][i][j] += 1
                        else:
                            dp[move][i][j] += dp[move - 1][x][y]
                        dp[move][i][j] %= MOD
        return dp[maxMove][startRow][startColumn]
        
