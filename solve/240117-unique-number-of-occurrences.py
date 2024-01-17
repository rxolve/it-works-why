# Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
class Solution(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        
        counts = {}
        for num in arr:
            counts[num] = counts.get(num, 0) + 1
        
        return len(counts) == len(set(counts.values()))