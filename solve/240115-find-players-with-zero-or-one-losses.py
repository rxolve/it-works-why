# You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

# Return a list answer of size 2 where:

# answer[0] is a list of all players that have not lost any matches.
# answer[1] is a list of all players that have lost exactly one match.
# The values in the two lists should be returned in increasing order.

# Note:

# You should only consider the players that have played at least one match.
# The testcases will be generated such that no two matches will have the same outcome.

class Solution(object):
    def findWinners(self, matches):
        """
        :type matches: List[List[int]]
        :rtype: List[List[int]]
        """

        losses = {}
        for winner, loser in matches:
            losses[winner] = losses.get(winner, 0)
            losses[loser] = losses.get(loser, 0) + 1

        no_losses = sorted(player for player, loss in losses.items() if loss == 0)
        one_loss = sorted(player for player, loss in losses.items() if loss == 1)

        return [no_losses, one_loss]