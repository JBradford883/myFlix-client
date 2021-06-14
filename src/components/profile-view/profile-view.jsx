import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

import './profile-view.scss';

export class ProfileView extends React.Component {


  render() {
    const { onBackClick, user, token, deleteAcc } = this.props;


    return (
      <Container className="profile-view" >
        <Card>
          <h2 className="profile-title d-flex justify-content-center text-danger mt-2">Your Profile Info</h2>
          <Card.Body>
            <Card.Title className="d-flex justify-content-center mb-1">Username: {`${user.Username}`}</Card.Title>
            <Card.Title className="d-flex justify-content-center mb-1">Email: {user.Email}</Card.Title>
            <Card.Title className="d-flex justify-content-center">Birthday: {user.Birthday}</Card.Title>
          </Card.Body>
        </Card>

        <Form className="block">
          <h2 className="profile-title d-flex justify-content-center text-danger mt-3">Update your profile</h2>
          <Form.Group controlId="formUsername" onSubmit={this.handleSubmit}>
            <Form.Label>Username</Form.Label>
            <Form.Control name="Username" type="username" placeholder="Update your username" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formPassword" onSubmit={this.handleSubmit}>
            <Form.Label>Password</Form.Label>
            <Form.Control name="Password" type="password" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formEmail" onSubmit={this.handleSubmit}>
            <Form.Label>Email</Form.Label>
            <Form.Control name="Email" type="email" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBirthday" onSubmit={this.handleSubmit}>
            <Form.Label>Birthday</Form.Label>
            <Form.Control name="Birthday" type="date" onChange={this.handleChange} />
          </Form.Group>
        </Form>

        <Button block variant="danger" type="submit">Update Profile</Button>

        <Button variant="danger" block type="button" onClick={() => { deleteAcc(token); onSignOut(null); history.push('/'); }}>Delete My Account</Button>

        <Button onClick={() => onBackClick()} block variant='danger'>Back to main</Button>

      </Container>
    );
  }
}
