import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick } = this.props;

    return (
      <Card className='director-view'>
        <Card.Body>
          <Card.Title><h1>{director.Name}</h1></Card.Title>
          <Card.Text class="director-bio"><b>Bio:</b> {director.Bio}</Card.Text>
          <Card.Text class="director-birth"><b>Birth Year:</b> {director.Birth}</Card.Text>
          <Card.Text class="director-death"><b>Death Year:</b> {director.Death}</Card.Text>
          <Button onClick={() => onBackClick(null)} variant="primary">Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};