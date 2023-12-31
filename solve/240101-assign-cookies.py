# Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

# Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

class Solution(object):
    def findContentChildren(self, g, s):
        """
        :type g: List[int]
        :type s: List[int]
        :rtype: int
        """
        
        # Sort the children and cookies by greed factor and size.
        g.sort()
        s.sort()
        
        # Give each child the smallest cookie that will satisfy them.
        i = 0
        for j in range(len(s)):
            if i < len(g) and s[j] >= g[i]:
                i += 1
        
        return i