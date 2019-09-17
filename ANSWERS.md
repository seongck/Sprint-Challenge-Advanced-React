- [x] Why would you use class component over function components (removing hooks from the question)?

You would use class components if your components need their own state or 
make use of life cycle methods.

- [x] Name three lifecycle methods and their purposes.

1. constructor(): to initialize state, take in props, and use a ref (if
   required)
2. componentDidMount(): to do all the setup you couldn't do without a DOM.  Eg.
   load data, render elements from a collection, add event listeners, etc.
3. componentWillUnmount(): to clean up anything that only involves this
   component. Eg. outgoing network requests, event listeners, etc.

- [x] What is the purpose of a custom hook?

Custom hooks allow you to apply non-visual behavior and stateful logic throughout your
components by reusing them. Examples: handling controlled inputs,
managing event listeners, setting/getting localStorage.

- [x] Why is it important to test our apps?

It minimizes the risk of bugs finding their way into production code, acts as a
safety net when making changes, makes us think about edge cases, acts as
documentation for the code, and encourages us to write more testable code.
