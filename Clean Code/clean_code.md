# Clean Code

## Reflections

Simplicity – Simple code is easier to understand and debug when issues arise.  
Readability – Code should be easy to read, with proper indentation and meaningful variable names.  
Maintainability – Code should be easy to modify and extend in the future.  
Consistency – Project conventions, style guides, and coding patterns should remain uniform across files.  
Efficiency – Optimizing code is important to ensure smooth performance, even after adding new features.

## Messy Code

```python
def abc(n):
if n<=1: return 1
return n*abc(n-1)
print(abc(5))
```

The function above calculates the factorial of a number but lacks readability and clarity.

## Cleaner Code

```python
def factorial(n):
    """Returns the factorial of a given number using recursion."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # Output: 120
```

### Improvements:

Renamed the function to `factorial` for clarity.
Added a docstring explaining its purpose.
Improved readability with proper indentation and spacing.
Easier to debug and maintain.

# Code Formatting & Style Guides

Code formatting is important for maintaining code readability and making it easier for others to work in a team setting. It also helps reduce errors.

The linter detected inconsistent indentation and trailing spaces. It also added semicolor to a sample code that I added in AI tools
Formatting made the entire file much more readable and easier to understand.

# Naming Variables & Functions

A good variable or function name is self-explanatory and consistent with other names.

Poorly named variables and functions delay the debugging process, as extra time is needed to first understand the code, variables, and functions, along with their purpose, before actual debugging can begin.

Refactoring the code made the meaning of variables and functions immediately clear, improving future maintainability.

# Writing Small, Focused Functions

Breaking down functions makes code simpler, more readable, and more reusable. When a function is long and unstructured, it becomes difficult to read and understand. However, by breaking it into smaller functions with appropriate names, the code becomes easier to follow, and debugging and testing become more efficient.

# Avoiding Code Duplication

I was introduced to the DRY principle earlier in the workplace when I was writing similar pieces of code in multiple places. This made it difficult when changes had to be made. It is better to avoid repetition and keep the code in one common place, then use it everywhere.

Refactoring improved code clarity and centralized related changes in one place.

# Refactoring Code for Simplicity

Extract Method: As seen earlier, this involves creating smaller, focused functions.

Inline: Sometimes, functions don't contain specific logic but simply call another function. These should be avoided.

Simplifying Code: Complex conditionals should be converted into simpler ones. For example, instead of multiple `if-else` statements for ranges and small breakpoints, we should use simple, concise `if` statements with clear breakpoints.

In the original code, nested conditionals were used, making it hard to read and increasing complexity. In the refactored version, the conditions are flattened, which makes the code easier to read and understand.

# Commenting & Documentation

Comments are crucial when working in teams or even to remind yourself of the purpose of a piece of code, as some code may not be as obvious without context. Hence, comments need to be added.

Initially, we need the code to be as clear as possible by using clear variable names and simplifying logic. In such cases, it's better to improve the code than to add comments.
