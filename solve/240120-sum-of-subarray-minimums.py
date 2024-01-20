# Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

class Solution(object):
    def sumSubarrayMins(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """

        # 1. brute force
        # time: O(n^2)
        # space: O(1)
        # res = 0
        # for i in range(len(arr)):
        #     min_val = arr[i]
        #     for j in range(i, len(arr)):
        #         min_val = min(min_val, arr[j])
        #         res += min_val
        # return res % (10**9 + 7)

        # 2. monotonic stack
        # time: O(n)
        # space: O(n)
        res = 0
        stack = []
        arr = [0] + arr + [0]
        for i in range(len(arr)):
            while stack and arr[stack[-1]] > arr[i]:
                cur = stack.pop()
                res += arr[cur] * (i - cur) * (cur - stack[-1])
            stack.append(i)
        return res % (10**9 + 7)

        