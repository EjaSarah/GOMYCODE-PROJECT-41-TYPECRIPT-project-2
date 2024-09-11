// Steps:
// Import Types: We need to import FC (FunctionComponent) from React.
// Define Props Type: We will define a type for the name prop.
// Add Type Annotations: We'll specify the type for the Greeting component.



import React, { FC } from 'react';  // Step 1: Importing FC (FunctionComponent)

interface GreetingProps {  // Step 2: Define type for props
  name: string;  // 'name' is a string
}

// Step 3: Add type to the component using FC and props
const Greeting: FC<GreetingProps> = ({ name }) => {  
  return <div>Hello, {name}!</div>;
};

export default Greeting;

// Explanation:
// FC<GreetingProps> ensures that the Greeting component expects a name prop of type string.
// The GreetingProps interface explicitly defines what props are accepted and their types.


// Code 02: Counter Class Component Conversion
// Here, the code is using class components with state but without types. In TypeScript, we need to specify types for both the component's state and props (if any).

// Steps:
// Import Types: Import Component from React, and we'll define state and props types.
// Define State Type: Create an interface to describe the shape of the component's state.
// Add Type Annotations: We will annotate the Counter class to use the state and props types.


import React, { Component } from 'react';  // Step 1: Import Component from React

// Step 2: Define state type
interface CounterState {
  count: number;  // State has a 'count' of type number
}

// Step 3: Annotate the component to use the state type
class Counter extends Component<{}, CounterState> {  
  state: CounterState = {
    count: 0,  // Initialize the count state
  };

  // Step 4: Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 5: Render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

// Explanation:
// We define a CounterState interface to describe the state object. In this case, count is a number.
// The Component<{}, CounterState> tells TypeScript that this class component has no props (denoted by {}) and has a state of type CounterState.