# You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.

# You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

# Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without ending up in debt, return money. Note that the leftover must be non-negative.

class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        # Assume minimum and second minimum
        minimum = min(prices[0], prices[1])
        second_minimum = max(prices[0], prices[1])

        # Iterate over the remaining elements
        for i in range(2, len(prices)):
            if prices[i] < minimum:
                second_minimum = minimum
                minimum = prices[i]
            elif prices[i] < second_minimum:
                second_minimum = prices[i]
            
        # Minimum Cost
        min_cost = minimum + second_minimum

        # We can buy chocolates only if we have enough money
        if min_cost <= money:
            # Return the Amount of Money Left
            return money - min_cost
        
        # We cannot buy chocolates. Return the initial amount of money
        return money
        