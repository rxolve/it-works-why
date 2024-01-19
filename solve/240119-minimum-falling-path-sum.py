# Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

# A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

class Solution(object):
    def minFallingPathSum(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """

        for row in range(1, len(matrix)):
            for col in range(len(matrix[0])):
                matrix[row][col] += min(matrix[row - 1][max(0, col - 1): min(len(matrix[0]), col + 2)])

        return min(matrix[-1])
        