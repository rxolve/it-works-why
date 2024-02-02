"""
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.
"""

class Solution(object):
    def sequentialDigits(self, low, high):
        """
        :type low: int
        :type high: int
        :rtype: List[int]
        """
        nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        result = []
        for length in range(2, 10):
            new_nums = []
            for num in nums:
                if num[-1] != "9":
                    new_num = num + str(int(num[-1]) + 1)
                    new_nums.append(new_num)
            nums = new_nums
            result.extend([int(x) for x in nums])
        return sorted([x for x in result if low <= x <= high])
        