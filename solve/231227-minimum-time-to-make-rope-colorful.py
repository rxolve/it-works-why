# Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.

# Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

# Return the minimum time Bob needs to make the rope colorful.

class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        total_time = 0
        max_time = 0

        for i in range(1, len(colors)):
            # 이전 풍선과 색이 같은 경우
            if colors[i] == colors[i - 1]:
                # 이전 풍선을 제거하는 시간과 현재 풍선을 제거하는 시간 중 더 적은 시간을 합산
                total_time += min(neededTime[i], neededTime[i - 1])
                # 필요한 시간이 더 큰 풍선을 남깁니다.
                max_time = max(neededTime[i], neededTime[i - 1])
                # 현재 풍선을 제거하는 시간을 최대 시간으로 업데이트
                neededTime[i] = max_time
            else:
                max_time = 0  # 색이 다르므로 최대 시간을 리셋합니다.

        return total_time