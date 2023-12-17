# Design a food rating system that can do the following:

# Modify the rating of a food item listed in the system.
# Return the highest-rated food item for a type of cuisine in the system.
# Implement the FoodRatings class:

# FoodRatings(String[] foods, String[] cuisines, int[] ratings) Initializes the system. The food items are described by foods, cuisines and ratings, all of which have a length of n.
# foods[i] is the name of the ith food,
# cuisines[i] is the type of cuisine of the ith food, and
# ratings[i] is the initial rating of the ith food.
# void changeRating(String food, int newRating) Changes the rating of the food item with the name food.
# String highestRated(String cuisine) Returns the name of the food item that has the highest rating for the given type of cuisine. If there is a tie, return the item with the lexicographically smaller name.
# Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

class FoodRatings:

    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        self.foods = foods
        self.cuisines = cuisines
        self.ratings = ratings
        

    def changeRating(self, food: str, newRating: int) -> None:
        for i in range(len(self.foods)):
            if self.foods[i] == food:
                self.ratings[i] = newRating
                break
        

    def highestRated(self, cuisine: str) -> str:
        max_rating = -1
        max_food = ""
        for i in range(len(self.foods)):
            if self.cuisines[i] == cuisine:
                if self.ratings[i] > max_rating:
                    max_rating = self.ratings[i]
                    max_food = self.foods[i]
                elif self.ratings[i] == max_rating:
                    max_food = min(max_food, self.foods[i])
        return max_food
        


# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings(foods, cuisines, ratings)
# obj.changeRating(food,newRating)
# param_2 = obj.highestRated(cuisine)