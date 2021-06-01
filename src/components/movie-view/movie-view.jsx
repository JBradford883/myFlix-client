import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';


export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card>
        <Card.Img className="movie-img float-left" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text className="description"><b>Description:</b> {movie.Description}</Card.Text>
          <Card.Text>
            <span className='label'>Genre: </span>
            <span className='value'>{movie.Genre.Name}</span>
          </Card.Text>
          <Card.Text>
            <span className='label'>Director: </span>
            <span className='value'>{movie.Director.Name}</span>
          </Card.Text>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button className="mb-2" block variant="danger">Genre Information</Button>
          </Link>
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button className="mb-2" block variant="danger">Director Information</Button>
          </Link>
          <Button onClick={() => onBackClick()} block variant='danger'>Back to main</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};