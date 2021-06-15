import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './genre-view.scss';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Card className='genre-view'>
        <Card.Body>
          <Card.Title><h1 className="font-weight-bold">{genre.Name}</h1></Card.Title>
          <Card.Text className="genre-description"><b>Description:</b> {genre.Description}</Card.Text>
          <Button onClick={() => onBackClick(null)} block variant="danger">Back</Button>
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