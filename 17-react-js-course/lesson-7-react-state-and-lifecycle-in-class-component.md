- We should not touch the `index.js` file normally; instead, we will use a modular approach.
- Component file names should be capitalized.
- The state of a component refers to the data that can be changed within the component. In other words, State = Data that changes.
- Props are not the component's own data.
- A component itself is like an app.
- The state is represented by a JavaScript object.
- The `setState()` method is used to set the state.
- The `componentDidMount()` method runs after the component has been rendered to the DOM, and it also runs after the `render()` method.
- The `componentWillUnmount()` method runs immediately before the component is unmounted.

- Do not modify the state directly:
  // Wrong
  this.state.comment = 'Hello';

  // Right
  this.setState({ comment: 'Hello' });

- State updates may be asynchronous; React may batch multiple `setState()` calls into a single update for performance.
- State updates are merged.
- Always make a copy of reference values. For example, do not run `Array.splice()` on the `this.state.posts` value as it will change the state before updating it.
- Data flows down from parent components to child components.
