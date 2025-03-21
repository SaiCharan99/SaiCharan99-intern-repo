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

### Improvements

Renamed the function to factorial for clarity.
Added a docstring explaining its purpose.
Improved readability with proper indentation and spacing.
Easier to debug and maintain.

## Code Formatting & Style Guides

Code formatting is important for maintaining code readability and making it easier for others to work in a team setting. It also helps reduce errors.

The linter detected inconsistent indentation and trailing spaces. It also added semicolon to a sample code that I added in AI tools
Formatting made the entire file much more readable and easier to understand.

## Naming Variables & Functions

A good variable or function name is self-explanatory and consistent with other names.

Poorly named variables and functions delay the debugging process, as extra time is needed to first understand the code, variables, and functions, along with their purpose, before actual debugging can begin.

Refactoring the code made the meaning of variables and functions immediately clear, improving future maintainability.

## Writing Small, Focused Functions

Breaking down functions makes code simpler, more readable, and more reusable. When a function is long and unstructured, it becomes difficult to read and understand. However, by breaking it into smaller functions with appropriate names, the code becomes easier to follow, and debugging and testing become more efficient.

## Avoiding Code Duplication

I was introduced to the DRY principle earlier in the workplace when I was writing similar pieces of code in multiple places. This made it difficult when changes had to be made. It is better to avoid repetition and keep the code in one common place, then use it everywhere.

Refactoring improved code clarity and centralized related changes in one place.

## Refactoring Code for Simplicity

Extract Method: As seen earlier, this involves creating smaller, focused functions.

Inline: Sometimes, functions don't contain specific logic but simply call another function. These should be avoided.

Simplifying Code: Complex conditionals should be converted into simpler ones. For example, instead of multiple if-else statements for ranges and small breakpoints, we should use simple, concise if statements with clear breakpoints.

In the original code, nested conditionals were used, making it hard to read and increasing complexity. In the refactored version, the conditions are flattened, which makes the code easier to read and understand.

## Commenting & Documentation

Comments are crucial when working in teams or even to remind yourself of the purpose of a piece of code, as some code may not be as obvious without context. Hence, comments need to be added.

Initially, we need the code to be as clear as possible by using clear variable names and simplifying logic. In such cases, it's better to improve the code than to add comments.

## Handling Errors & Edge Cases

**Guard Clause:** A check that immediately exits the function with a return statement or an exception. This makes the code shorter and simpler. Instead of having multiple deep if-else statements, we now have multiple if statements to check and exit early, followed by an else if and else to handle the final case.

### Poorly Handled Function

```javascript
function fetchUserData(userId) {
  const users = {
    1: { name: 'Alice', age: 25 },
    2: { name: 'Bob', age: 30 },
  }

  return `User: ${users[userId].name}, Age: ${users[userId].age}`
}
```

### Refactored Code with Improved Error Handling

```javascript
function fetchUserData(userId) {
  try {
    if (typeof userId !== 'number') {
      throw new TypeError('User ID must be a number.')
    }

    const users = {
      1: { name: 'Alice', age: 25 },
      2: { name: 'Bob', age: 30 },
    }

    if (!users[userId]) {
      throw new Error('User not found.')
    }

    return `User: ${users[userId].name}, Age: ${users[userId].age}`
  } catch (error) {
    return `Error: ${error.message}`
  }
}
```

### Issue with Original Code

- Lacked proper error handling.
- Assumed inputs were always valid, which could lead to potential crashes, e.g., accessing undefined users, null value exceptions, etc.

### How Handling Errors Improves Readability

- Validates user existence in the JavaScript function, preventing undefined property access.
- Returns user-friendly error messages instead of crashing.
- Makes debugging easier and allows the code to scale more efficiently to handle other exceptions.

## Test Cases - Jest for Javascript

```javascript
const fetchUserData = require('./fetchUserData') // Adjust the path as needed

describe('fetchUserData', () => {
  test('should return user details for a valid user ID', () => {
    expect(fetchUserData(1)).toBe('User: Alice, Age: 25')
    expect(fetchUserData(2)).toBe('User: Bob, Age: 30')
  })

  test('should return an error message for a non-existent user ID', () => {
    expect(fetchUserData(3)).toBe('Error: User not found.')
  })

  test('should return an error message when userId is not a number', () => {
    expect(fetchUserData('1')).toBe('Error: User ID must be a number.')
    expect(fetchUserData(null)).toBe('Error: User ID must be a number.')
    expect(fetchUserData(undefined)).toBe('Error: User ID must be a number.')
    expect(fetchUserData({})).toBe('Error: User ID must be a number.')
  })

  test('should return an error message when userId is missing', () => {
    expect(fetchUserData()).toBe('Error: User ID must be a number.')
  })
})
```

## Unit tests to keep code clean

Unit tests ensure the basic features of the function are are covered in the testing and makes sure what scenarios and conditions are working as expected.
This would help in maintainability of code and its reliability.

## Issues found while testing

The function did not initially handle missing userId, this was identified and fixed.
Edge cases, such as passing null, undefined, or non-numeric values, led to unintended behavior like crashes hence these led to the need for strict input validation.
