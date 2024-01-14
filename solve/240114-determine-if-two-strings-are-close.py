# Two strings are considered close if you can attain one from the other using the following operations:

# Operation 1: Swap any two existing characters.
# For example, abcde -> aecdb
# Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
# For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
# You can use the operations on either string as many times as necessary.

# Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        count1 = [0] * 26
        count2 = [0] * 26

        for char1 in word1:
            count1[ord(char1) - ord('a')] += 1

        for char2 in word2:
            count2[ord(char2) - ord('a')] += 1

        for i in range(26):
            if (count1[i] == 0 and count2[i] > 0) or (count1[i] > 0 and count2[i] == 0):
                return False

        count1.sort()
        count2.sort()

        for i in range(26):
            if count1[i] != count2[i]:
                return False

        return True