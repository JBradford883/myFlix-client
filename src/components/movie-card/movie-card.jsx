import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './movie-card.scss';
import axios from 'axios';

export class MovieCard extends React.Component {

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
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button className="mb-2" block variant="danger">Director</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button className="mb-2" block variant="danger">Genre</Button>
          </Link>
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