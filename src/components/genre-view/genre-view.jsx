import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './genre-view.scss';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick, movies } = this.props;

    return (
      <Container>
        <Card className='genre-view'>
          <Card.Body>
            <Card.Title className="font-weight-bold text-center h1">{genre.Name}</Card.Title>
            <Card.Text className="genre-description"><b>Description:</b> {genre.Description}</Card.Text>
            <Card.Text cclassName="text-center h5 mb-4">Movies belonging to this genre:</Card.Text>

            <Row className="genre-movies mb-3">
              {movies.map(m => {
                if (m.Genre && m.Genre.Name === genre.Name) {
                  return (
                    <Col className="genre-card text-center mb-2" lg={3} md={6}>
                      <Card.Img className="genre-img" key={m._id} src={m.ImagePath} />
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

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired
};