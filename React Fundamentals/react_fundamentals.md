# React Fundamentals

Successfully ran the react project with tailwind css:-

![React App With Tail Wind](image.png)

Challenges Faced:-

The major challenge I faced was when I was trying to install Tailwind and set up the environment, the CSS changes were not visible. Even after receiving help from AI, the issue remained unresolved. The problem was eventually fixed when I realized that the `tailwind.config.js` file was not placed in the root of the project directory.

## Understanding Components & Props

Made a new component in the components folder called HelloWorld.js
Used App. to dynamically pass Focus Bear to this child component, destructured the props and displayed it:-
![alt text](image-1.png)

## Handling State & User Input

Developed `Counter.js`, a component that displays the count value and includes a button that changes color when hovered (to make it visually distinct as a button). When clicked, the button increments the count by setting its value to the previous count plus one.

![With Counter](image-2.png)

I tried modifying the count directly by using `count++`, but this resulted in a warning stating that `count` is a constant and cannot be reassigned. More importantly, directly modifying the state does not trigger a re-render. This is why we use `setState`—to ensure that the value updates properly and the component re-renders wherever the state is used.
