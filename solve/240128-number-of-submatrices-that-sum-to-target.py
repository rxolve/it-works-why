# Given a matrix and a target, return the number of non-empty submatrices that sum to target.

# A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

# Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

class Solution(object):
    def numSubmatrixSumTarget(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: int
        """
        from collections import defaultdict
        
        m, n = len(matrix), len(matrix[0])
        prefix = [[0] * (n + 1) for _ in range(m)]
        for i in range(m):
            for j in range(n):
                prefix[i][j + 1] = prefix[i][j] + matrix[i][j]
        
        res = 0
        for c1 in range(n):
            for c2 in range(c1, n):
                count = defaultdict(int)
                count[0] = 1
                curr = 0
                for r in range(m):
                    curr += prefix[r][c2 + 1] - prefix[r][c1]
                    res += count[curr - target]
                    count[curr] += 1
        return res