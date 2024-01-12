# You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

# Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

# Return true if a and b are alike. Otherwise, return false.

class Solution(object):
    def halvesAreAlike(self, s):
        """
        :type s: str
        :rtype: bool
        """
        
        vowels = set('aeiouAEIOU')
        a = b = 0
        for i in range(len(s) // 2):
            if s[i] in vowels:
                a += 1
            if s[len(s) // 2 + i] in vowels:
                b += 1
        return a == b