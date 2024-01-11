# Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

# A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.a

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        return self.dfs(root, root.val, root.val)

    def dfs(self, node, min_val, max_val):
        if not node:
            return max_val - min_val
        max_val = max(max_val, node.val)
        min_val = min(min_val, node.val)
        return max(self.dfs(node.left, min_val, max_val), self.dfs(node.right, min_val, max_val))