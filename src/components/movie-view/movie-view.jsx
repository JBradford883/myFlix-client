import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Container, Col } from 'react-bootstrap';
import axios from 'axios';

import { Link } from 'react-router-dom';

import './movie-view.scss';

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  addFavorite(movie) {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    axios.post(`https://myflix-2388-app.herokuapp.com/users/${user}/movies/${movie._id}`, null, {
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
    const { movie } = this.props;

    return (
      <Container>
        <Card className="movie-view shadow">
          <div className="m-4">
            <div className="movie-poster float-left text-center mr-3">
              <img src={movie.ImagePath} />
            </div>
            <div className="movie-title text-center mb-3">
              <span className="value font-weight-bold h3">{movie.Title}</span>
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
            <div className="">
              <Button className='add-favorite mt-3' variant='danger' onClick={() => this.addFavorite(movie)}>Add to Favorites</Button>
            </div>
            <div>
              <Link to={`/`}>
                <Button className="return-button mt-2" variant="danger">Back to Main</Button>
              </Link>
            </div>
          </div>
        </Card>
      </Container>
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