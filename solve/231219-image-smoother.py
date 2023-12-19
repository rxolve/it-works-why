# An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).


# Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.

class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        rows, cols = len(img), len(img[0])
        res = [[0]*cols for _ in range(rows)]
        for i in range(rows):
            for j in range(cols):
                res[i][j] = self.getAverage(img, i, j)
        return res
    
    def getAverage(self, img, i, j):
        rows, cols = len(img), len(img[0])
        count, total = 0, 0
        for x in range(i-1, i+2):
            for y in range(j-1, j+2):
                if 0<=x<rows and 0<=y<cols:
                    count += 1
                    total += img[x][y]
        return total//count
        