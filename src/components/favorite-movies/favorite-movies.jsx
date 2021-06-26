import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './favorite-movies.scss';

export class FavoriteMovies extends React.Component {
  constructor(props) {
    super(props);
    //this.removeFavorite = this.removeFavorite.bind(this);
  }

  render() {
    const FavoriteMovies = this.props.user.FavoriteMovies;
    const { movies } = this.props;

    return (
      <Container>
        <Card className='fav-view shadow'>
          <Card.Body>
            <Row className="fav-movies mb-3">
              {FavoriteMovies.length === 0 && <div className='card-content'>You don't have any favorite movies yet!</div>}
              <div className='favorites-container'>
                {FavoriteMovies.length > 0 && movies.map((movie) => {
                  if (movie._id === FavoriteMovies.find((favMovie) => favMovie === movie._id)) {
                    return (
                      <Col className="fav-card text-center mb-2" lg={3} md={6}>
                        <Link to={`/movies/${m._id}`}>
                          <Card.Img className="fav-img" key={m._id} src={m.ImagePath} />
                        </Link>
                      </Col>
                    );
                  }
                })}
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

