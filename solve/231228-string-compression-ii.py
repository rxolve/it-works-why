# Run-length encoding is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "aabccc" we replace "aa" by "a2" and replace "ccc" by "c3". Thus the compressed string becomes "a2bc3".

# Notice that in this problem, we are not adding '1' after single characters.

# Given a string s and an integer k. You need to delete at most k characters from s such that the run-length encoded version of s has minimum length.

# Find the minimum length of the run-length encoded version of s after deleting at most k characters.

class Solution:
    def getLengthOfOptimalCompression(self, s: str, k: int) -> int:
        def getLength(maxFreq: int) -> int:
            """Returns the length to compress `maxFreq`."""
            if maxFreq == 1:
                return 1  # c
            if maxFreq < 10:
                return 2  # [1-9]c
            if maxFreq < 100:
                return 3  # [1-9][0-9]c
            return 4    # [1-9][0-9][0-9]c

        @functools.lru_cache(None)
        def dp(i: int, k: int) -> int:
            if k < 0:
                return math.inf
            if i == len(s) or len(s) - i <= k:
                return 0

            ans = math.inf
            maxFreq = 0  # the maximum frequency in s[i..j]
            count = collections.Counter()

            # Make letters in s[i..j] be the same.
            # Keep the letter that has the maximum frequency in this range and remove
            # the other letters.
            for j in range(i, len(s)):
                count[s[j]] += 1
                maxFreq = max(maxFreq, count[s[j]])
                ans = min(ans, getLength(maxFreq) +
                        dp(j + 1, k - (j - i + 1 - maxFreq)))

            return ans

        return dp(0, k)