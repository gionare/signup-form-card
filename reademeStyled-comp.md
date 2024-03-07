# Using styled-components in React

- This guide will walk you through the steps to install and use `styled-components` in a React project.
- Styled-components allow you to write CSS in JavaScript, making it easy to manage component-specific styles and use dynamic values.

## Installation

```bash
npm install styled-components
```

# Usage

1. **Create a styled component:** import styled from styled-components and create a component with your desired styles.

```js
// ExampleComponent.js
import styled from "styled-components";

const ExampleComponent = styled.div`
  color: blue;
  font-size: 20px;
`;

export default ExampleComponent;
```

2. **Use the styled component:** Import the styled component into your React components and use it in your JSX.

```js
// App.js
import React from "react";
import ExampleComponent from "./ExampleComponent";

function App() {
  return (
    <div>
      <ExampleComponent>This is a styled component</ExampleComponent>
    </div>
  );
}

export default App;
```
