# Unit & Integration Testing in React Native

I wrote test cases for the Axios home screen and realized that there were test IDs missing for some components. I added these test IDs and recognized their importance.

![Test Report](image-10.png)

I also conducted testing for the `apiClient` using Mock API requests.
![Test Report Axios](image-11.png)

## Reflections

Testing is crucial in React Native development because it ensures that all aspects are covered in unit and integration testing. It helps the developer identify and resolve any obvious bugs and ensures that all known scenarios are tested.

I used the `MockAdapter` from the `axios-mock-adapter` to intercept the API calls and return a mock predefined response that handled both success and failure cases for thorough testing.

Unit testing focuses on testing individual components or functions and their functionalities. On the other hand, integration testing checks multiple components together, ensuring they work correctly and that the integration between them is successful.
