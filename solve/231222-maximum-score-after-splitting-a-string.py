# Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

# The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

class Solution:
    def maxScore(self, s: str) -> int:
        max = 0
        for i in range(1, len(s)):
            left = s[:i]
            right = s[i:]
            left_count = left.count('0')
            right_count = right.count('1')
            if left_count + right_count > max:
                max = left_count + right_count
        return max