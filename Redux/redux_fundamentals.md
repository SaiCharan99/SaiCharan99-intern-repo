# Redux Toolkit

Set up a Redux store with `counterSlice` containing multiple actions to increment and decrement the counter. Also, add a selector to retrieve the stored value from the Redux store.

Redux state:  
![alt text](image.png)  
![alt text](image-1.png)

## Reflections

Although both `useState` and Redux can be used for state management, Redux is preferred for global state storage, as it allows multiple components to access and update the state. In contrast, `useState` is more suited for managing component-specific state.

Redux helps avoid prop drilling, where a prop is passed through multiple child components, leading to unnecessary re-renders. However, `useState` is preferable when state management is only required within a single component.
