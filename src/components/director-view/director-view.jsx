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
          <Card.Title className="director-name"><h1>{director.Name}</h1></Card.Title>

          <Card.Text className="font-weight-bold mb-0">Biography</Card.Text>
          <Card.Text className="director-bio">{director.Bio}</Card.Text>

          <Card.Text className="font-weight-bold mb-0">Birth Year</Card.Text>
          <Card.Text className="director-birth">{director.Birth}</Card.Text>

          <Card.Text className="font-weight-bold mb-0">Death Year</Card.Text>
          <Card.Text className="director-death">{director.Death}</Card.Text>

          <Button onClick={() => onBackClick(null)} block variant="primary">Back to Main</Button>
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