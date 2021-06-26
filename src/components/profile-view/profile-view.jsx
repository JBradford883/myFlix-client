import axios from 'axios';
import React from 'react';
import { Form, Button, Container, Card, Row } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './profile-view.scss';

export class ProfileView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        Username: props.userData.Username,
        Password: '',
        Email: props.userData.Email,
        Birthday: this.formatDate(props.userData.Birthday),
        FavoriteMovies: props.userData.FavoriteMovies,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.deleteAcc = this.deleteAcc.bind(this);
  }

  // PUT request to update the users profile
  updateProfile(token) {
    axios.put(`https://myflix-2388-app.herokuapp.com/users/${this.props.user}`,
      this.state.formValues,
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        console.log('You have sucessfully updated your profile.');
        this.props.onProfileUpdate(response.data);
        alert('You have sucessfully updated your profile.');
        this.props.history.push(`/users/${response.data.Username}`)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // DELETE request to remove the user profile 
  deleteAcc(token) {
    axios.delete(`https://myflix-2388-app.herokuapp.com/users/${this.props.user}`,
      { headers: { 'Authorization': `Bearer ${token}` } })

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

  // // DELETE request to remove a movie from favorites list
  // removeFavorite(movie) {
  //   let token = localStorage.getItem('token');
  //   let user = localStorage.getItem('user');
  //   axios.delete(`https://myflix-2388-app.herokuapp.com/users/${user}/movies/${movie._id}`, {
  //     headers: { Authorization: `Bearer ${token}` }
  //   }).then(
  //     (response) => {
  //       console.log(response);
  //       alert('You have sucessfully updated your favorites list.');
  //     }).catch(
  //       function (error) {
  //         console.log(error)
  //         alert('There was an error.');
  //       }
  //     );
  // }

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
    this.updateProfile(this.props.token);
  }

  render() {
    let { movies, userData, token } = this.props;
    // let FavoriteMovies = this.state.formValues.FavoriteMovies;

    return (
      <Container className="profile-view" >
        <Card className="shadow-sm">
          <h2 className="profile-title d-flex justify-content-center text-danger mt-2">{`${userData.Username}`} Profile Info</h2>
          <Card.Body>
            <Card.Text className="d-flex justify-content-center mb-1">Username: {`${userData.Username}`}</Card.Text>
            <Card.Text className="d-flex justify-content-center mb-1">Email: {`${userData.Email}`}</Card.Text>
            <Card.Text className="d-flex justify-content-center mb-1">Birthday: {`${this.formatDate(userData.Birthday)}`}</Card.Text>
          </Card.Body>
        </Card >

        <Form className="block">
          <h2 className="profile-title d-flex justify-content-center text-danger mt-3">Update your user profile</h2>
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

        <Button block variant="danger" type="submit" onClick={this.handleSubmit}>Update Profile</Button>

        <Button id="delete-btn" variant="danger" block onClick={() => {
          const confirmBox = window.confirm(
            "Are you sure you want to delete your account?"
          )
          if (confirmBox === true) {
            this.deleteAcc(token)
          }
        }} >
          Delete Your Account
        </Button>

      </Container >
    );
  }
}


{/* <Form.Control name="Username" type="username" value={this.state.formValues.Username} placeholder="Enter a valid username of at least 6 characters" onChange={this.handleChange} />
{
  Object.keys(this.state.formValues.UsernameErr).map((key) => {
    return (
      <div key={key} style={{ color: "red" }}>
        {this.state.formValues.UsernameErr[key]}
      </div>
    );
  })
} */}


{/* <Container className='favorites-container'>
                <h2 className="profile-title d-flex justify-content-center text-danger mt-2">Favorite Movies</h2>
                {FavoriteMovies.length === 0 && <div className='text-center'>You don't have any favorite movies yet!</div>}
                <div>
                  {FavoriteMovies.length > 0 && movies.map((movie) => {
                    if (movie._id === FavoriteMovies.find((favMovie) => favMovie === movie._id)) {
                      return (
                        <div key={movie._id}>
                          <Card>
                            <Link to={`/movies/${movie._id}`}>
                              <Card.Img className='favorites-movie' src={movie.ImagePath} />
                            </Link>
                            <Card.Body className='movie-card-body'>
                              <Button className='remove-favorite' variant='danger' onClick={() => this.removeFavorite(movie)}> Remove
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    }
                  })}
                </div>
              </Container> */}