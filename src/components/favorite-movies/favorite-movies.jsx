import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './favorite-movies.scss';

export class FavoriteMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeFavorite = this.removeFavorite.bind(this);
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
    const FavoriteMovies = this.props.user.FavoriteMovies;
    const { movies } = this.props;

    return (
      <Container>
        <Card className='fav-view shadow'>
          <Card.Body>
            <Row className="fav-movies mb-3">
              {FavoriteMovies.length === 0 && <div className='card-content'>You don't have any favorite movies yet!</div>}
              <div className='favorites-container'>
                {FavoriteMovies.length > 0 && movies.map((movie) => {
                  if (movie._id === FavoriteMovies.find((favMovie) => favMovie === movie._id)) {
                    return (
                      <Col className="fav-card text-center mb-2" lg={3} md={6}>
                        <Link to={`/movies/${m._id}`}>
                          <Card.Img className="fav-img" key={movie._id} src={movie.ImagePath} />
                        </Link>
                      </Col>
                    );
                  }
                })}
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

