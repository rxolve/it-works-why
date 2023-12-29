# You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).

# You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done on that day.

# You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job is jobDifficulty[i].

# Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.

class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        n = len(jobDifficulty)
        if n < d:
            return -1

        dp = [[float('inf')] * n + [0] for _ in range(d+1)]

        for day in range(1, d + 1):
            for i in range(day - 1, n):
                max_d = jobDifficulty[i]
                for j in range(i, day - 2, -1):
                    max_d = max(max_d, jobDifficulty[j])
                    dp[day][i] = min(dp[day][i], dp[day-1][j-1] + max_d)
        return dp[d][n-1]