import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Card className='genre-view'>
        <Card.Body>
          <Card.Title><h1>{genre.Name}</h1></Card.Title>
          <Button onClick={() => onBackClick(null)} variant="primary">Back</Button>
          <Card.Text className="genre-description"><b>Description:</b> {genre.Description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Description: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};