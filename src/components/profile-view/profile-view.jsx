import axios from 'axios';
import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

import './profile-view.scss';

export class ProfileView extends React.Component {

  render() {
    let { user, userData, token, history } = this.props;

    function updateProfile(token) {
      axios.put(`https://myflix-2388-app.herokuapp.com/users/${user}`, {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
      },
        { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => {
          console.log('Successfully updated your account information');
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function deleteAcc(token) {
      console.log('Not deleted yet');
      axios.delete(`https://myflix-2388-app.herokuapp.com/users/${user}`,
        { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => {
          console.log(response);
          console.log(`${user} has been deleted`);
        })
        .catch(e => {
          console.log('There is an error');
          console.log(e);
        });
    }


    return (
      <Container className="profile-view" >
        <Card>
          <h2 className="profile-title d-flex justify-content-center text-danger mt-2">Your Profile Info</h2>
          <Card.Body>
            <Card.Title className="d-flex justify-content-center mb-1">Username: {`${userData.Username}`}</Card.Title>
            <Card.Title className="d-flex justify-content-center mb-1">Email: {`${userData.Email}`}</Card.Title>
            <Card.Title className="d-flex justify-content-center mb-1">Birthday: {`${userData.Birthday}`}</Card.Title>
          </Card.Body>
        </Card>


        <Form className="block">
          <h2 className="profile-title d-flex justify-content-center text-danger mt-3">Update your profile</h2>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="Username" type="username" placeholder="Update your username" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="Password" type="password" placeholder="Update your password" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="Email" type="email" placeholder="Update your email address" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control name="Birthday" type="date" onChange={this.handleChange} />
          </Form.Group>
        </Form>



        <Button block variant="danger" type="submit" onClick={() => { updateProfile(token) }}>Update Profile</Button>

        <Button variant="danger" block type="button" onClick={() => { deleteAcc(token); history.push('/'); }}>Delete My Account</Button>

      </Container>
    );
  }
}




/*
constructor(props) {
    super(props);
    this.state = {
      formValues: {
        Username: props.userData.Username,
        Password: '',
        Email: props.userData.Email,
        Birthday: props.userData.Birthday
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;
    this.setState((prev) => ({
      formValues: {
        ...prev.formValues,
        [target.name]: target.value,
      },
    }));
  }

  handleSubmit(token) {
    e.preventDefault();
    this.props.updateProfile(this.state.inputValues)
    */