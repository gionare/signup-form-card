```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

- State variables **(firstName, lastName, email, password)** are used to store the values of form inputs, and their respective **onChange** event handlers are used to update these state variables when input values change.
<hr>

- The handleSubmit function is called when the form is submitted. It prevents the default form submission behavior, validates the form inputs, and sets any error messages in the errors state array.
<hr>

```jsx
const errorsArray = [];
if (XXX) {
  errorsArray.push("First Name cannot be empty");
}
```

- Error messages are rendered below the form inputs if there are any errors detected during form submission.
<hr>

```jsx
<Form onSubmit={handleSubmit}>
  ...
  <Button type="submit">
    <p>CLAIM YOUR FREE TRIAL</p>
  </Button>
</Form>
```

- **onSubmit={handleSubmit}** This is an event handler attribute that assigns the handleSubmit function to be executed when the form is submitted. When the form is submitted (e.g., by clicking a submit button or pressing enter in an input field), the handleSubmit function will be called.

<hr>

- **handleSubmit:** This is a function defined elsewhere in the code that contains the logic to handle form submission. It typically prevents the default behavior of form submission, performs validation, submits data to a server, or performs any other necessary tasks related to form submission.
<hr>

```jsx
if (!firstName.trim()) {
  errorsArray.push("First Name cannot be empty");
}
```

**!firstName.trim()**: The trim() method removes whitespace from both ends of a string. If the resulting string is empty (i.e., it contains only whitespace characters), trim() returns an empty string, which is considered "falsy" in JavaScript. The ! operator negates the result, so **!firstName.trim()** evaluates to true if firstName is empty or contains only whitespace characters.

<hr>
