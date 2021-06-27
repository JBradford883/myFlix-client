import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './genre-view.scss';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick, movies } = this.props;

    return (
      <Container>
        <Card className='genre-view shadow'>
          <Card.Body>
            <h1 className="font-weight-bold text-center">{genre.Name}</h1>
            <Card.Text className="genre-description"><b>Description:</b> {genre.Description}</Card.Text>
            <Card.Text className="text-center h5 mb-4">Movies belonging to this genre:</Card.Text>

            <Row className="genre-movies mb-3">
              {movies.map(m => {
                if (m.Genre.Name === genre.Name) {
                  return (
                    <Col className="genre-card text-center mb-2" lg={3} md={6} key={m._id}>
                      <Link to={`/movies/${m._id}`}>
                        <Card.Img className="genre-img" key={m._id} src={m.ImagePath} />
                      </Link>
                    </Col>
                  );
                }
              })}
            </Row>

            <Button onClick={() => onBackClick(null)} variant="dark">Back</Button>
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