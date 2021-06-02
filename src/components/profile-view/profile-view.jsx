import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function ProfileView(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.get('https://myflix-2388-app.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday

    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
      })
      .catch(e => {
        console.log('error registering the user')
      });
  };

  // Form to register username, password, email, birthday
  return (
    <>
      <h1 className="headline text-center font-weight-bold text-danger">Your myFlix Profile</h1>
      <Form className="col-md-6 offset-3">
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" onChange={e => setUserName(e.target.value)} />
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
          <Form.Control type="text" placeholder="dd/mm/yyyy" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </Form.Group>

        <Button className="mr-2" variant="danger" type="submit" onClick={handleSubmit}>Update</Button>
        <Link to={`/genres/${movie.Genre.Name}`}>
          <Button variant="link">Genre</Button>
        </Link>
      </Form>
    </>
  );
}