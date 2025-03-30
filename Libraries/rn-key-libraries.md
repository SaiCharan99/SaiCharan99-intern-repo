# React Native Key Libraries

1. `@pusher/pusher-websocket-react-native`  
   Purpose:  
   This library enables real-time communication in React Native apps through WebSocket connections. It allows the app to send and receive updates instantly without needing frequent API polling.

2. `react-native-reanimated`  
   Purpose:  
   This library enhances animations in React Native by offloading complex animations to the native thread. It provides high-performance animations that are smoother and more efficient compared to the default React Native animation system.

3. `posthog-react-native`  
   Purpose:  
   PostHog is an open-source analytics tool that helps track user behavior within the app. It enables developers to collect and analyze user interactions, providing insights into how people engage with different features.

I was mainly unfamiliar with `react-native-background-fetch`, and after researching, I learned that it enables React Native apps to execute scheduled background tasks even when the app is not actively running in the foreground. It is useful for tasks like data fetching, syncing content, or triggering notifications without requiring user interaction. Unlike normal timers (`setInterval` or `setTimeout`), which only run when the app is open, this library ensures tasks execute even when the app is closed. On iOS, it leverages Apple's Background Fetch API, which runs tasks based on system heuristics like battery level and user activity. On Android, it utilizes JobScheduler and AlarmManager to schedule tasks at predefined intervals, optimizing resource usage while maintaining continuous app functionality.

## Reflections

`Redux-Persist` saves the Redux store's state in persistent storage so that even when the app is closed and reopened, the data persists. It is useful for restoring all the user's saved information and any data that needs to be retained, creating a seamless experience.

`react-native-background-fetch` allows the app to perform tasks such as data syncing, notifications, or API calls even when the app is not in the foreground or is completely closed. It ensures the app can maintain its functionality without being actively open. While a normal timer operates only when the app is running in the foreground, `react-native-background-fetch` ensures tasks can still run in the background, improving the app’s ability to operate continuously without requiring user interaction.

`react-native-auth0` is used for handling authentication with Auth0, a service that simplifies and secures user login and registration processes. Auth0 handles many security concerns such as password management, authentication tokens, and user identity securely. It integrates seamlessly with various authentication providers like Google, Facebook, or Apple. This reduces the need for building and maintaining complex authentication systems manually, enhancing security and development efficiency, which is why it is preferred over manual authentication.

`PostHog` tracks user interactions and events, offering insights into how users engage with the app. This data helps identify pain points or areas for improvement, allowing us, the Focus Bear developers, to make data-driven decisions to enhance the app’s usability.

`Sentry` is primarily used for error and crash reporting, helping developers monitor the app’s health in production, while `PostHog` focuses on tracking user events and interactions for analytics. Sentry is used for debugging, while PostHog helps understand user behavior and engagement.

`react-native-localize` detects the device's locale settings and provides information about the user’s language and region. It works with `i18next` to switch translations and regional preferences based on the detected locale, ensuring content is tailored for different users. This is useful for us as we try to cater to multiple languages like English and Spanish.

If I had to replace a library, I would consider replacing `react-native-background-fetch` with a more modern alternative like `react-native-background-task` if it offers better performance or flexibility. The reason would be to ensure that background tasks are managed more efficiently or with fewer resource overheads, especially for apps with battery life concerns.
