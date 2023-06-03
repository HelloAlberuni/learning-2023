- Normal function does not carry this variable
- Arrow function carry this variable
- function(){}.bind() or let self = this can be used to solve the carrying this issue instead of using the arrow function
  [Context https://youtu.be/QLxjMwVu0xY?t=1431]

- shouldComponentUpdate(nextProps, nextState) is a lifecycle method which run immediately before each compoent render https://youtu.be/QLxjMwVu0xY?t=3044
- Tips: Do not pass any parameter with reference function call https://tppr.me/v2pyc
