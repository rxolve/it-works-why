# You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

# Evaluate the expression. Return an integer that represents the value of the expression.

# Note that:

# The valid operators are '+', '-', '*', and '/'.
# Each operand may be an integer or another expression.
# The division between two integers always truncates toward zero.
# There will not be any division by zero.
# The input represents a valid arithmetic expression in a reverse polish notation.
# The answer and all the intermediate calculations can be represented in a 32-bit integer.

class Solution(object):
    def evalRPN(self, tokens):
        """
        :type tokens: List[str]
        :rtype: int
        """
        stack = []
        for token in tokens:
            if token in ["+", "-", "*", "/"]:
                b = stack.pop()
                a = stack.pop()
                if token == "+":
                    stack.append(a + b)
                elif token == "-":
                    stack.append(a - b)
                elif token == "*":
                    stack.append(a * b)
                else:  # token == "/"
                    stack.append(int(float(a) / b))
            else:
                stack.append(int(token))
        return stack[0]
        