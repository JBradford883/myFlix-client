import React from 'react';

// React-Bootstrap components
import { Button, Card, Row, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

// Redux
import { connect } from 'react-redux';

import './favorite-movies.scss';

import { authClient } from '../../xhr/auth';

export class FavoriteMovies extends React.Component {
  constructor(props) {
    super(props);
  }

  // DELETE request to remove a movie from favorites list
  removeFavorite(movie) {
    let user = localStorage.getItem('user');
    authClient.delete(`https://myflix-2388-app.herokuapp.com/users/${user}/movies/${movie._id}`)
      .then(
        (response) => {
          console.log(response);
          alert('You have sucessfully updated your favorites list.');
          location.reload();
        }).catch(
          function (error) {
            console.log(error)
            alert('There was an error.');
          }
        );
  }

  render() {
    const favoriteMovies = this.props.user.FavoriteMovies;
    const { movies } = this.props;

    return (
      <Card className='movie-card shadow-sm mb-2'>
        <h2 className="profile-title d-flex justify-content-center text-danger mt-3">Your Favorite Movies</h2>
        <Row className="fav-movies mb-3 justify-content-center">
          {favoriteMovies.length === 0 && <div>You don't have any favorite movies yet!</div>}
          <div className='favorite-movies__container'>
            {favoriteMovies.length > 0 && movies.filter(movie => {
              return movie._id === favoriteMovies.find((favMovie) => favMovie === movie._id)
            }).map((movie) => {
              return (
                <div key={movie._id}>
                  <Col className="container-fluid text-center mb-2" md={8}>
                    <Link to={`/movies/${movie._id}`}>
                      <Card.Img className="fav-img" src={movie.ImagePath} />
                    </Link>

                    <Button
                      className='remove-favorite mt-2 mb-2'
                      variant='dark'
                      onClick={() => this.removeFavorite(movie)}>
                      Remove Favorite
                    </Button>
                  </Col>
                </div>
              );
            })}
          </div>
        </Row>
      </Card>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user,
    movies: state.movies
  }
}

export default connect(mapStateToProps)(FavoriteMovies);