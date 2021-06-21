import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './genre-view.scss';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick, movies } = this.props;

    return (
      <>
        <Container>
          <Card className='genre-view'>
            <Card.Body>
              <Card.Title><h1 className="font-weight-bold">{genre.Name}</h1></Card.Title>
              <Card.Text className="genre-description"><b>Description:</b> {genre.Description}</Card.Text>
              <Button onClick={() => onBackClick(null)} block variant="danger">Back</Button>
            </Card.Body>
          </Card>
        </Container>

        <Container className='my-3'>
          <div>
            <h4 className=' text-center mb-4 white-words'>{genre.Name} Movies:</h4>
            <div className="genre-movies text-center">
            </div>
          </div>
        </Container>

      </>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Description: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};