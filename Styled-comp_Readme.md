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

- scoped styles, dynamic styling with props, and easy integration with JavaScript logic.

- createGlobalStyle from styled-components to define global styles for the entire application.

- Passing Props: pass props to styled components to dynamically change styles based on prop values.

```js
// Button.js
import React from "react";
import styled from "styled-components";

// Define a styled button component
const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "blue" : "green")};
  border-radius: 5px;
`;

// Export the Button component
export default Button;
```

- ThemeProvider to provide a theme to styled components, allowing for consistent theming across the application.

- Advanced Features: such as animations, media queries, and extending existing styled components.

```jsx
// Define a styled component with media queries
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 80px;
  }
`;
```
