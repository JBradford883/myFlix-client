import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card>
        <Card.Img className="movie-img float-left" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text class="description"><b>Description:</b> {movie.Description}</Card.Text>
          <Card.Text class="movie-genre"><b>Genre:</b> {movie.Genre.Name}</Card.Text>
          <Card.Text class="movie-director"><b>Director:</b> {movie.Director.Name}</Card.Text>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button className="mb-2" block variant="danger">Genre Information</Button>
          </Link>
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button className="mb-2" block variant="danger">Director Information</Button>
          </Link>
          <Button variant="danger" block onClick={() => { onBackClick(); }}>Back to main</Button>
        </Card.Body>
      </Card>
    );
  }
}


/*
  return (
    <div className="movie-view">
      <div>
        <img className="movie-img float-left" src={movie.ImagePath} />
      </div>
      <div className="movie-title">
        <span className="label"><b>Title:</b> </span>
        <span className="value">{movie.Title}</span>
      </div>
      <div className="description">
        <span className="label"><b>Description:</b> </span>
        <span className="value">{movie.Description}</span>
      </div>
      <div className="movie-director">
        <span className="label"><b>Director:</b> </span>
        <span className="value">{movie.Director.Name}</span>
      </div>
      <Link to={`/directors/${movie.Director.Name}`}>
        <Button variant="primary">More Info</Button>
      </Link>
      <div className="movie-genre">
        <span className="label"><b>Genre:</b> </span>
        <span className="value">{movie.Genre.Name}</span>
      </div>
      <Link to={`/genres/${movie.Genre.Name}`}>
        <Button variant="primary">More Info</Button>
      </Link>
      <div>
        <Button className="t-5" onClick={() => onBackClick(null)} variant="primary">Back</Button>
      </div>
    </div>
  );
}
}
*/

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