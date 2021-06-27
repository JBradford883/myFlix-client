import React from 'react';
import axios from 'axios';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './favorite-movies.scss';

export class FavoriteMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // DELETE request to remove a movie from favorites list
  removeFavorite(movie) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    axios.delete(`https://myflix-2388-app.herokuapp.com/users/${user}/movies/${movie._id}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(
      (response) => {
        console.log(response);
        alert('You have sucessfully updated your favorites list.');
      }).catch(
        function (error) {
          console.log(error)
          alert('There was an error.');
        }
      );
  }

  render() {
    const favoriteMovies = this.props.userData.FavoriteMovies;
    const { movies } = this.props;

    return (
      <Container>
        <Card className='fav-view shadow'>
          <Card.Body>
            <h2 className="profile-title d-flex justify-content-center text-danger">Your Favorite Movies</h2>
            <Row className="fav-movies mb-3 justify-content-center">
              {favoriteMovies.length === 0 && <div className='card-content'>You don't have any favorite movies yet!</div>}
              <div className='favorites-container'>
                {favoriteMovies.length > 0 && movies.filter(movie => {
                  return movie._id === favoriteMovies.find((favMovie) => favMovie === movie._id)
                }).map((movie) => {
                  return (
                    <Col className="fav-card text-center mb-2" key={movie._id}>
                      <Link to={`/movies/${movie._id}`}>
                        <Card.Img className="fav-img" key={movie._id} src={movie.ImagePath} />
                      </Link>
                      <Card.Body className='movie-card-body'>
                        <Button className='remove-favorite' variant='danger' onClick={() => this.removeFavorite(movie)}> Remove
                        </Button>
                      </Card.Body>
                    </Col>
                  );
                })}
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

