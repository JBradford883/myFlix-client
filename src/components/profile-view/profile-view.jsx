import axios from 'axios';
import React from 'react';

import PropTypes from 'prop-types';

// React-Bootstrap-components
import { Form, Button, Container } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';

import { authClient } from '../../xhr/auth';

import './profile-view.scss';

export class ProfileView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        Username: props.user.Username,
        Password: '',
        Email: props.user.Email,
        Birthday: this.formatDate(props.user.Birthday),
        FavoriteMovies: props.user.FavoriteMovies,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.deleteAcc = this.deleteAcc.bind(this);
  }

  // PUT request to update the users profile
  updateProfile() {
    authClient.put(`https://myflix-2388-app.herokuapp.com/users/${this.props.user}`,
      this.state.formValues)
      .then(response => {
        this.props.onProfileUpdate(response.data);
        alert('You have sucessfully updated your profile.');
        this.props.history.push(`/users/${response.data.Username}`)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /*
  DELETE request to remove the user profile 
  Refreshes the page and brings user back to login in view
  */
  deleteAcc() {
    authClient.delete(`https://myflix-2388-app.herokuapp.com/users/${this.props.user}`)
      .then(() => {
        alert(`${this.props.user} has been deleted`);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.pathname = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Function to convert date into YYYY/MM/DD
  formatDate(date) {
    if (date) date = date.substring(0, 10);
    return date;
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

  handleSubmit(e) {
    e.preventDefault();
    this.updateProfile();
  }

  render() {
    let { user } = this.props;

    return (
      <Container className="profile-view">

        <div className="user-info mb-5">
          <h2 className="profile-title d-flex justify-content-center text-danger mt-2">{`${user.Username}`} Profile Info</h2>
          <p className="d-flex justify-content-center mb-1"><b className="mr-1">Username:</b> {`${user.Username}`} </p>
          <p className="d-flex justify-content-center mb-1"><b className="mr-1">Email:</b> {`${user.Email}`}</p>
          <p className="d-flex justify-content-center mb-1"><b className="mr-1">Birthday:</b> {`${this.formatDate(user.Birthday)}`}</p>
        </div>

        <Form>
          <h3 className="profile-title d-flex justify-content-center text-danger mt-3">Update your user profile</h3>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="Username" type="username" value={this.state.formValues.Username} placeholder="Update your username" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="Password" type="password" value={this.state.formValues.Password} placeholder="Update your password" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="Email" type="email" value={this.state.formValues.Email} placeholder="Update your email address" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control name="Birthday" type="date" value={this.state.formValues.Birthday} onChange={this.handleChange} />
          </Form.Group>
        </Form>

        <div className="buttons text-center mb-3">
          <Button className="update-profile mr-2" variant="dark" type="submit" onClick={this.handleSubmit}>Update Profile</Button>
          <Button className="delete-button" variant="dark" onClick={() => {
            const confirmBox = window.confirm("Are you sure you want to delete your account?")
            if (confirmBox === true) { this.deleteAcc() }
          }} > Delete Account </Button>
        </div>

      </Container >
    );
  }
}

ProfileView.propTypes = {
  users: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthdate: PropTypes.string,
    FavoriteMovies: PropTypes.array,
  }),
};

let mapStateToProps = state => {
  return {
    user: state.user,
    movies: state.movies
  }
}

export default connect(mapStateToProps)(ProfileView);