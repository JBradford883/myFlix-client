import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.post('https://myflix-2388-app.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday

    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
        alert('You have sucessfully registered.');
      })
      .catch(e => {
        console.log('error registering the user')
      });
  };

  // const formValidation = () => {
  //   const usernameError = {};
  //   const emailError = {};
  //   const passwordError = {};
  //   const birthdayError = {};
  //   let isValid = true;
  //   if (username.trim().length < 6) {
  //     usernameError.usernameShort = "Must be alphanumeric and contains at least 6 characters";
  //     isValid = false;
  //   }
  //   else if (password.trim().length < 4) {
  //     passwordError.passwordMissing = "You must enter a password.(minimum 4 characters) ";
  //     isValid = false;
  //   }
  //   else if (!email.includes(".") || !email.includes("@")) {
  //     emailError.emailNotEmail = "A valid email address is required.";
  //     isValid = false;
  //   }
  //   else if (birthday === '') {
  //     BirthdayError.noBirthday = "Please enter a birthdate";
  //     isValid = false;
  //   }
  //   return isValid;
  // };

  // Form to register username, password, email, birthday
  return (
    <>
      <h1 className="headline text-center font-weight-bold text-danger">Register for myFlix App</h1>
      <Form className="col-md-6 offset-3">
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </Form.Group>

        <Button variant="danger" type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
}
