import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './movie-card.scss';
import axios from 'axios';

export class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // POST request to add movie to users favorites list
  addFavorite(movieData) {
    axios.post(`https://myflix-2388-app.herokuapp.com/users/${this.props.user}/movies/${movie._id}`,
    )
      .then(response => {
        console.log(response);
        console.log('Successfully added movies to Favorites list');
        alert("Added to favorites!")
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    const { movie } = this.props;

    return (
      <Card className='movie-card shadow-sm'>
        <Card.Img className="movie-poster" variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text className="movie-description">{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button className="mb-2" block variant="danger">Movie Info</Button>
          </Link>
          <div>
            <Button className="Favorite-Movies" block variant="danger" onClick={() => this.addFavorite(movie._id)}>Add to Favorites</Button>
          </div>
        </Card.Body>
      </Card >
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
};

/* Director and Genre Buttons

<Link to={`/directors/${movie.Director.Name}`}>
            <Button className="mb-2" block variant="danger">Director</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button className="mb-2" block variant="danger">Genre</Button>
          </Link>

*/