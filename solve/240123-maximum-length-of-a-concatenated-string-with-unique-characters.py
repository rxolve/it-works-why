# You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.
# Return the maximum possible length of s.
# A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

class Solution(object):
    def maxLength(self, arr):
        """
        :type arr: List[str]
        :rtype: int
        """
        masks = []
        for s in arr:
            mask = 0
            for c in s:
                if (mask >> (ord(c) - ord('a'))) & 1:
                    mask = 0
                    break
                mask |= 1 << (ord(c) - ord('a'))
            if mask:
                masks.append(mask)

        dp = [0]
        for mask in masks:
            for i in reversed(range(len(dp))):
                if dp[i] & mask:
                    continue
                dp.append(dp[i] | mask)

        return max(bin(mask).count('1') for mask in dp)