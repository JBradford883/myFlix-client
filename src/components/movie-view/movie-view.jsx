import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="movie-view shadow">
        <div className="m-3">
          <div className="movie-poster float-left mr-3">
            <img src={movie.ImagePath} />
          </div>
          <div className="movie-title mb-2">
            <span className="value font-weight-bold h2">{movie.Title}</span>
          </div>
          <div className="movie-info mb-2">
            <span className="label font-weight-bold">Description: </span>
            <span className="value">{movie.Description}</span>
          </div>
          <div className="movie-description mb-2">
            <span className="label font-weight-bold">Director: </span>
            <Link className="link" to={`/directors/${movie.Director.Name}`}>
              <span className="value">{movie.Director.Name}</span>
            </Link>
          </div>
          <div className="movie-description mb-2">
            <span className="label font-weight-bold">Genre: </span>
            <Link className="link" to={`/genres/${movie.Genre.Name}`}>
              <span className="value">{movie.Genre.Name}</span>
            </Link>
          </div>
          {/*<Button onClick={() => onBackClick()} variant='dark'>Back</Button>*/}

        </div>
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


// <Card className="movie-view">
      //   <Card.Body>
      //     <Card.Img className="movie-img mb-3" src={movie.ImagePath} />
      //     <Card.Title>{movie.Title}</Card.Title>
      //     <Card.Text className="description"><b>Description:</b> {movie.Description}</Card.Text>
      //     <Card.Text>
      //       <span className="label font-weight-bold">Director: </span>
      //       <Link className="link" to={`/directors/${movie.Director.Name}`}>
      //         <span className="value">{movie.Director.Name}</span>
      //       </Link>
      //     </Card.Text>
      //     <Card.Text>
      //       <span className="label font-weight-bold">Genre: </span>
      //       <Link className="link" to={`/genres/${movie.Genre.Name}`}>
      //         <span className="value">{movie.Genre.Name}</span>
      //       </Link>
      //     </Card.Text>
      //   </Card.Body>
      // </Card>