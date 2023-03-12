const domContainer = document.querySelector('#root');

const root = ReactDOM.createRoot(domContainer);

// Create a react element (not html element)
// const myElement = React.createElement('div', null, "hello world")

// Create div & add p element inside it
// const myElement = React.createElement(
//     'div', 
//     null,
//     [
//         React.createElement("p", null, "Hello world"),
//         React.createElement("p", null, "Hello world")
//     ]
// );

// Create react lement using JSX syntax
// The above code is equivalent to this one which is more easier and cleaner
// const myElement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increment +</button>
//         </div>
//     </div>
// );

// Create react element using function
const Increment = () => {
    // const reactState = React.useState(0); // Define state and set default value
    const [counter, setCounter] = React.useState(0); // Destructure and save the retuned values in 2 diffent variable

    return(
        <div>
        <h1 id="display">{counter}</h1>
        {/* Here {counter} is called Interpolation, that means by default the value will used in the app initial state. When the variable will be changed the value will be change here. */}
        <div>
            <button id="button" onClick={ () => setCounter(counter + 1) }>Increment +</button>
        </div>
    </div>
    );
}

// Raw way
// root.render(myElement);

// Directly call the function
// root.render(Increment());

// We can call the function element using JSX syntax
// root.render(<Increment />);

// We can use the counter several times in the app
root.render([ 
    <Increment />, 
    <Increment />
]);

// let number = 0;
// const display = document.querySelector('#display');
// const button = document.querySelector('#button');

// console.log( document.querySelector('#display'));
// console.log(button);

// button.addEventListener('click', () => {
//     number++;
//     display.textContent = number;
// });