# RN Unit Testing

Already set up Jest testing and wrote unit tests for API calls and a UI component, then pushed them:

`apiClient.test.js`
`AxiosHomeScreen.test.js`

![Test Report](image-10.png)

![Test Report Axios](image-11.png)

## Reflections

Automated testing ensures that code works correctly and continues to function as expected when changes are made. It helps catch bugs early, improves code reliability, and speeds up the development process by eliminating the need for repetitive manual testing. Automated tests also serve as documentation, making it easier for developers to understand how functions are expected to behave.

When writing test cases, the initial setup and package installation were the first hurdles. After configuring Jest, including setting up `jest.config.js`, the next challenge was mocking the data correctly and ensuring the expected results. Through trial and error, adjusting expectations, and verifying the output, I was able to fix the test cases and gain a deeper understanding of how to write them effectively.

Jest & React Native Testing Library:-

Pushed files Message.test.js
![alt text](image-16.png)
React Native Testing Library encourages testing components the way users interact with them rather than relying on internal implementation details.

It is important to mock API calls in tests because it ensures network failures don't cause crashes and API downtimes are handled gracefully.

Some common pitfalls when testing asynchronous code are ignoring error scenarios and not using waitFor, which is crucial to ensure the test waits for state updates.

## Redux Reflections

Added test cases to previously written redux components
![alt text](image-18.png)

The most challenging part of testing Redux is mocking the entire Redux store and reducer, and setting everything up before actually testing the components. Manually writing to fire events and expecting the outcome, though tedious, was fun to implement and learn.
Redux tests examine state management logic - verifying reducers transform state correctly and actions work properly. They're typically pure JavaScript without DOM requirements. React component tests focus on UI and interactions - checking rendering, event handling, and updates based on props. These require DOM simulation and more complex setup with extensive mocking of dependencies.
