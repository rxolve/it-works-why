# You are given an array of strings words (0-indexed).

# In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

# Return true if you can make every string in words equal using any number of operations, and false otherwise.

from collections import Counter

class Solution(object):
    def makeEqual(self, words):
        """
        :type words: List[str]
        :rtype: bool
        """
        
        count = Counter()
        for word in words:
            count += Counter(word)
        return all(v % len(words) == 0 for v in count.values())
    