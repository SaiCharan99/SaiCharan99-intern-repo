# Identifying & Fixing Code Smells

Code Smells These are traces in the code that aren't bugs or errors but are violations of code design that would eventually lead to technical debt.

## Example code with code smells and their fixes

### Magic Numbers & Strings Code Smell

```javascript
function calculateCircleArea(radius) {
  return 3.14159 * radius * radius // Magic number (π)
}

console.log(calculateCircleArea(5))
```

### Magic Numbers & Strings Fixed Code

```javascript
const PI = Math.PI
const calculateCircleArea = (radius) => PI * radius * radius
console.log(calculateCircleArea(5))
```

### Long Function Code Smell

```javascript
function processOrder(order) {
  console.log('Processing order for', order.customerName)
  let total = 0
  for (let item of order.items) {
    total += item.price * item.quantity
  }
  console.log('Total price', total)
  if (total > 100) {
    console.log('Applying discount...')
    total *= 0.9
  }
  console.log('Final price', total)
}
```

### Long Function Fixed Code

```javascript
const calculateTotal = (items) => items.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
const applyDiscount = (total) => (total > 100 ? total * 0.9  total);

const processOrder = ({ customerName, items }) => {
    console.log(`Processing order for ${customerName}`);
    console.log(`Final price ${applyDiscount(calculateTotal(items))}`);
};
```

### Duplicate Code Code Smell

```javascript
function calculateRectangleArea(width, height) {
  return width * height
}

function calculateTriangleArea(base, height) {
  return (base * height) / 2
}
```

### Duplicate Code Fixed Code

```javascript
const calculateArea = (shape, d1, d2) => (shape === "rectangle" ? d1 * d2  (d1 * d2) / 2);
```

### Large Classes (God Object) Code Smell

```javascript
class Order {
  constructor(customerName) {
    this.customerName = customerName
    this.items = []
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity })
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  applyDiscount() {
    let total = this.calculateTotal()
    if (total > 100) total *= 0.9
    return total
  }

  generateInvoice() {
    return `Invoice for ${this.customerName} ${this.applyDiscount()}`
  }
}
```

### Large Classes (God Object) Fixed Code

```javascript
class Cart {
    constructor() { this.items = []; }
    addItem(name, price, quantity) { this.items.push({ name, price, quantity }); }
    calculateTotal() { return this.items.reduce((sum, { price, quantity }) => sum + price * quantity, 0); }
}

class Order {
    constructor(customerName, cart) { this.customerName = customerName; this.cart = cart; }
    generateInvoice() { return `Invoice for ${this.customerName} ${Order.applyDiscount(this.cart.calculateTotal())}`; }
    static applyDiscount(total) { return total > 100 ? total * 0.9  total; }
}
```

### Deeply Nested Conditionals Code Smell

```javascript
function validateUser(user) {
  if (user) {
    if (user.age >= 18) {
      if (user.isActive) {
        console.log('User is valid')
      } else {
        console.log('User is not active')
      }
    } else {
      console.log('User is underage')
    }
  } else {
    console.log('User does not exist')
  }
}
```

### Deeply Nested Conditionals Fixed Code

```javascript
const validateUser = (user) => {
    if (!user) return console.log("User does not exist");
    if (user.age < 18) return console.log("User is underage");
    console.log(user.isActive ? "User is valid"  "User is not active");
};
```

### Commented-Out Code Code Smell

```javascript
function fetchData() {
  // fetch("https//api.example.com/data")
  //   .then(response => response.json())
  //   .then(data => console.log(data));

  console.log('Fetching data...')
}
```

### Commented-Out Code Fixed Code

```javascript
const fetchData = () => console.log('Fetching data...')
```

### Inconsistent Naming Code Smell

```javascript
function calc(num1, num2) {
  return num1 + num2
}

const a = 5
const b = 10
console.log(calc(a, b)) // What is calc? What are a and b?
```

### Inconsistent Naming Fixed Code

```javascript
const add = (num1, num2) => num1 + num2
console.log(add(5, 10))
```

### Reflections

I tried to write code that highlights each code smell and provided a refactored version for each.

Refactoring improved the code in several ways, such as enhancing modularity, readability, and maintainability by breaking large functions into smaller ones.

It also eliminated redundancy by removing duplicate code, making future modifications easier and resulting in a cleaner codebase.

Avoiding code smells simplifies the debugging process by preventing duplication, ensuring that a single fix is sufficient when a bug arises. Additionally, well-structured and minimal code reduces dependencies and minimizes potential errors.
