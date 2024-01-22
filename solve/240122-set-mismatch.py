# You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

# You are given an integer array nums representing the data status of this set after the error.

# Find the number that occurs twice and the number that is missing and return them in the form of an array.

class Solution(object):
    def findErrorNums(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """

        # 1. sort the list
        # 2. find the missing number
        # 3. find the duplicated number

        nums.sort()
        missing = 0
        duplicated = 0
        for i in range(len(nums)):
            if i == 0:
                if nums[i] != 1:
                    missing = 1
            else:
                if nums[i] - nums[i-1] > 1:
                    missing = nums[i-1] + 1
            if i != len(nums) - 1:
                if nums[i] == nums[i+1]:
                    duplicated = nums[i]
        if missing == 0:
            missing = len(nums)
        return [duplicated, missing]