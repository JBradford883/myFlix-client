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
          <Card.Title>{genre.Name}</Card.Title>
          <Card.Text class="genre-description">{genre.Description}</Card.Text>
        </Card.Body>
        <Button onClick={() => onBackClick(null)} variant="primary">Back</Button>
      </Card>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};