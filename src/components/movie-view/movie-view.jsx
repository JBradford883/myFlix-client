import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div>
          <img className="movie-img float-left" src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label"><b>Title:</b> </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label"><b>Description:</b> </span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-director">
          <span className="label"><b>Director:</b> </span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        <div className="movie-genre">
          <span className="label"><b>Genre:</b> </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <Button onClick={() => onBackClick(null)} variant="primary">Back</Button>

      </div>
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