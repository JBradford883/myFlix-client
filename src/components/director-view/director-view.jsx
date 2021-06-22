import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick, movies } = this.props;

    return (
      <Container className='director-view'>
        <Card>
          <Card.Body>
            <h1 className="font-weight-bold text-center">{director.Name}</h1>

            <Card.Text className="font-weight-bold mb-0">Biography</Card.Text>
            <Card.Text>{director.Bio}</Card.Text>

            <Card.Text className="font-weight-bold mb-0">Birth Year</Card.Text>
            <Card.Text>{director.Birth}</Card.Text>

            <Card.Text className="font-weight-bold mb-0">Death Year</Card.Text>
            <Card.Text>{director.Death}</Card.Text>
            <h4 className='text-center mb-4'>Movies this director has filmed:</h4>

            <Row className="director-movies mb-3">
              {movies.map(m => {
                if (m.Director && m.Director.Name === director.Name) {
                  return (
                    <Col className="director-card text-center mb-2" lg={3} md={6}>
                      <Card.Img className="director-img" key={m._id} src={m.ImagePath} />
                    </Col>
                  );
                }
              })}
            </Row>

            <Button onClick={() => onBackClick(null)} variant="danger">Back</Button>
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