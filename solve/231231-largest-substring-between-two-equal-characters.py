# Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

# A substring is a contiguous sequence of characters within a string.

class Solution(object):
    def maxLengthBetweenEqualCharacters(self, s):
        """
        :type s: str
        :rtype: int
        """
        
        # Find the first and last index of each character.
        first = {}
        last = {}
        for i, c in enumerate(s):
            if c not in first:
                first[c] = i
            last[c] = i
        
        # Find the maximum length.
        max_length = -1
        for c in first:
            max_length = max(max_length, last[c] - first[c] - 1)
        return max_length