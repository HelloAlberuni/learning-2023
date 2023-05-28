- Component and element are not the same in React
- An element is the result of a function, and the function itself is referred to as a component.
- When writing a class component, React provides the advantage of statefulness. This is one of the benefits of using class components.

- We can't use class components like HTML tags. To use them, we need to extend the `React.Component` class.
- Avoid overriding props inside a component. Instead, always pass props from the element, such as `<img src="hello.png">`. The reason for this is that when a prop is changed, React re-renders the element inside the component, which can lead to an infinite error. Alternatively, the state can be changed.
- When a parent element renders, the child elements are rendered again.

- Presentational components should be converted to functional components. Functional components are suitable for components with static content and no complex logic. Functional components with dynamic logic and content should be converted to class components.
