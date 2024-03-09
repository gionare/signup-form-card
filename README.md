# React + Vite + Styled-components - Intro component with sign up form

`npm install vite@latest`
`npm install`
`npm i styled-components`

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

<img src="public/images/Screenshot.png" width="450px">

### Links

- Live Site URL: [Vercel Live URL]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I Improved

- Use React state to manage form input values and validation errors
- Implement form validation logic to ensure data integrity
- Utilize styled-components to style React components
- Handle form submission events and prevent default behavior

Example of handling form submission in React:

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [success, setSuccess] = useState("");
```

```jsx
const handleSubmit = (event) => {
  event.preventDefault();

  const errorsArray = [];
  if (!firstName.trim()) {
    errorsArray.push("First Name cannot be empty");
  }
  if (!password.trim()) {
      errorsArray.push("Password cannot be empty");
    }
  ...

  if (errorsArray.length > 0) {
    setErrors(errorsArray);
    return;
  }
};
```

**Example of rendering error messages in React:**

```jsx
{
  errors.length > 0 && (
    <div className="error-messages">
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
}
```

### Continued development

- Implementing more advanced form validation techniques
- Exploring other CSS-in-JS libraries and styling methodologies

### Useful resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - Official documentation for React
- [Styled-components Documentation](https://styled-components.com/docs) - Documentation for styled-components
- [CSS-Tricks](https://css-tricks.com/) - A great resource for learning CSS and front-end development techniques
- [Galaxy Button](https://www.buttons.cool/button/bGzgMGo)

## Author

- Giorgi Nareklishvili - [Portfolio](https://portfolio-giorgi-nareklishvili.vercel.app/)
- LinkedIn - [@gionare](https://www.linkedin.com/in/gionare/)

- [GitHub Pages](https://github.com/gionare)

## Acknowledgments

@bitcamp
