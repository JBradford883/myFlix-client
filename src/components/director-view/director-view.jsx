import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container } from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick } = this.props;

    return (
      <Container className='director-view'>
        <Card>
          <Card.Body>
            <Card.Title><h1 className="font-weight-bold">{director.Name}</h1></Card.Title>

            <Card.Text className="font-weight-bold mb-0">Biography</Card.Text>
            <Card.Text>{director.Bio}</Card.Text>

            <Card.Text className="font-weight-bold mb-0">Birth Year</Card.Text>
            <Card.Text>{director.Birth}</Card.Text>

            <Card.Text className="font-weight-bold mb-0">Death Year</Card.Text>
            <Card.Text>{director.Death}</Card.Text>

            <Button onClick={() => onBackClick(null)} block variant="danger">Back to Main</Button>
          </Card.Body>
        </Card>
      </Container>
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