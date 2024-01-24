# Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

# Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def pseudoPalindromicPaths (self, root):
        self.count = 0
        self.dfs(root, 0)
        return self.count

    def dfs(self, node, path):
        if node is None:
            return
        path ^= (1 << node.val)
        if node.left is None and node.right is None and bin(path).count('1') <= 1:
            self.count += 1
        self.dfs(node.left, path)
        self.dfs(node.right, path)
