import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  // Login form for username and password
  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={e => setUserName(e.target.value)} />
      </Form.Group>
    <>
      <h1 className="headline text-center font-weight-bold text-danger">Welcome to myFlix App</h1>
          <Form.Control type="text" placeholder="Enter Username" onChange={e => setUserName(e.target.value)} />

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
          <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />

        <Button variant="danger" type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
}