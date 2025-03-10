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
