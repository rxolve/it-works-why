# Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

# Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

class Solution:
    def isPathCrossing(self, path: str) -> bool:
        # Set to store the visited points
        visited = set()
        
        # Current point
        x, y = 0, 0
        
        # Add the current point to the set
        visited.add((x, y))
        
        # Iterate over the path
        for i in path:
            # Update the current point
            if i == 'N':
                y += 1
            elif i == 'S':
                y -= 1
            elif i == 'E':
                x += 1
            else:
                x -= 1
            
            # If the current point is already visited, return True
            if (x, y) in visited:
                return True
            
            # Add the current point to the set
            visited.add((x, y))
        
        # Return False
        return False