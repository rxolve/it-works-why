# You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.

# Each minute, a node becomes infected if:

# The node is currently uninfected.
# The node is adjacent to an infected node.
# Return the number of minutes needed for the entire tree to be infected.

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def amountOfTime(self, root, start):
        """
        :type root: Optional[TreeNode]
        :type start: int
        :rtype: int
        """
        
        graph = defaultdict(list)
        queue = deque([(root, None)])

        while queue:
            node, parent = queue.popleft()
            if parent is not None:
                graph[node.val].append(parent.val)
                graph[parent.val].append(node.val)
            if node.left is not None:
                queue.append((node.left, node))
            if node.right is not None:
                queue.append((node.right, node))

        infected = {start}
        queue = deque([start])
        minutes = 0

        while queue:
            for _ in range(len(queue)):
                node = queue.popleft()
                for neighbor in graph[node]:
                    if neighbor not in infected:
                        infected.add(neighbor)
                        queue.append(neighbor)
            if queue:
                minutes += 1

        return minutes