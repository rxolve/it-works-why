# Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

# A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

# Note that points on the edge of a vertical area are not considered included in the area.

class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        # Sort the points based on the x-coordinate
        points.sort(key = lambda x: x[0])
        
        # Initialize the maximum width
        max_width = 0
        
        # Iterate over the points
        for i in range(1, len(points)):
            # Update the maximum width
            max_width = max(max_width, points[i][0] - points[i - 1][0])
        
        # Return the maximum width
        return max_width
        