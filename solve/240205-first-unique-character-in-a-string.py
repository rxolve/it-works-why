"""
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
"""

from collections import Counter

class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        counter = Counter(s)
        for idx, ch in enumerate(s):
            if counter[ch] == 1:
                return idx     
        return -1