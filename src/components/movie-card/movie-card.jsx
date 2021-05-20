import React from 'react';

export class MovieCard extends React.Component {

  render() {
    const { movie, onMovieClick } = this.props;
    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}> {movie.Title}
      <div className="movie-description">
        <span className="label">Description: </span>
        <span className="value">{movie.Description}</span>
      </div>
    </div>
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};