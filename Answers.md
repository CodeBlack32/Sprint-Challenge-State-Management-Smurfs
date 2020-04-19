1. What problem does the context API help solve?

Context API allows variables in an app to become usable all around your React app. This solves the issue of trying to use props and pass data from one component to the next.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: these are methods composed of a executable (known as a 'payload') which is placed in the Redux store. This executable can be taken from the store using a 'dispatch' function.

Reducers: This is sort of like an explanation of what the action changes. In example the action would be what's going to happen as the reducer would be what effects took place after the executable.

Store: This would be like a centralized storage container that holds 'state', and the actions that can change it. Store also allows other components to use state (puts actions and reducers together).

a.) Single Source of Truth:

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

1) Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

1. What is your favorite state management system you've learned and this sprint? Please explain why!
