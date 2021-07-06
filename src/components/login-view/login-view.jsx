import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.post('https://myflix-2388-app.herokuapp.com/login', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('no such user')
        alert('Invalid username or password')
      });
  };

  /*
  Login form
  Expects - valid username and password to be entered into the form
  */
  return (
    <Container className="mt-3" >
      <h1 className="headline text-center font-weight-bold text-danger">Welcome to myFlix App</h1>
      <Form className="col-md-6 offset-3">
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button className="submit mb-2" variant="danger" type="submit" onClick={handleSubmit}>Submit</Button>
        <Link to={`/register`}>
          <h6 className="not-a-member">Not a member? Register Here</h6>
        </Link>
      </Form>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
  onRegister: PropTypes.func,
};