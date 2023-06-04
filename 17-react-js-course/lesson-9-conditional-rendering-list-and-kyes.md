- Use inline JSX conditionals rather than if statements to render JSX conditionally in the render method
- Don't use ternary operator 2nd level deep in JSX https://youtu.be/k_q-SCeYLJU?t=581
- At least return null if you don't want to render anything in the render function https://youtu.be/k_q-SCeYLJU?t=1170
- Every life cycle method will run at least once even we return null in the render method

- List and keys is very important in React like array in php
- In JSX inline coding is recommended & to use loop inside JSX we can use map function
- In the render method of JSX we can pass single element or array of elements also

- Tip: Don't use index as key in map function because it will not be unique, Math.random() can be used to generate unique key if we don't have any unique key in the array
- The key can be uni only for the particular array / JSX element, not for the whole page or app 