import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function RegistrationView(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const [usernameErr, setUsernameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});


  const formValidation = () => {
    const usernameErr = {};
    const passwordErr = {};
    const emailErr = {};
    let isValid = true;

    if (username === '') {
      usernameErr.userMissing = "You must enter a Username";
      isValid = false;
    }

    if (username.trim().length < 6) {
      usernameErr.usernameShort = "Username must be at least 6 characters";
      isValid = false;
    }

    if (password === '') {
      passwordErr.passwordMissing = "You must enter a Password"
    }

    if (!email.includes(".") && !email.includes("@")) {
      emailErr.emailNotEmail = "A valid email address is required";
    }

    setUsernameErr(usernameErr);
    setPasswordErr(passwordErr);
    setEmailErr(emailErr);
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
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
    }
  };


  //Form to register username, password, email, birthday
  return (
    <>
      <h1 className="headline text-center font-weight-bold text-danger">Register for myFlix App</h1>
      <Form className="col-md-6 offset-3">
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" value={username} placeholder="Enter a valid username of at least 6 characters" onChange={e => setUsername(e.target.value)} />
          {Object.keys(usernameErr).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {usernameErr[key]}
              </div>
            );
          })}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} placeholder="Enter a Password" onChange={e => setPassword(e.target.value)}
          />
          {Object.keys(passwordErr).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {passwordErr[key]}
              </div>
            );
          })}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} placeholder="Enter a valid Email (ex. user@email.com)" onChange={e => setEmail(e.target.value)}
          />
          {Object.keys(emailErr).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {emailErr[key]}
              </div>
            );
          })}
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
