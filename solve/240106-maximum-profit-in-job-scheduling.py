# We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

# You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

# If you choose a job that ends at time X you will be able to start another job that starts at time X.

class Solution(object):
    def jobScheduling(self, startTime, endTime, profit):
        """
        :type startTime: List[int]
        :type endTime: List[int]
        :type profit: List[int]
        :rtype: int
        """
            
        # Sort the jobs by end time.
        jobs = sorted(zip(startTime, endTime, profit), key=lambda x: x[1])
        
        # Find the maximum profit for each job.
        dp = [0] * len(jobs)
        for i in range(len(jobs)):
            dp[i] = jobs[i][2]
            for j in range(i):
                if jobs[j][1] <= jobs[i][0]:
                    dp[i] = max(dp[i], dp[j] + jobs[i][2])
        
        return max(dp)


