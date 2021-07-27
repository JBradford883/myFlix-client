import React from 'react';

// Redux
import { connect } from 'react-redux';
import { setMovies, setUser, deleteUser } from '../../actions/actions';

// Router
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Components
import MoviesList from '../movies-list/movies-list';
import { LoginView } from '../login-view/login-view';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { FavoriteMovies } from '../favorite-movies/favorite-movies'

import { authClient } from '../../xhr/auth';

// React-Bootstrap components
import { Row, Col } from 'react-bootstrap';

class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      user: null
    };
    this.onProfileUpdate = this.onProfileUpdate.bind(this);
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    let username = localStorage.getItem('user');
    if (accessToken !== null) {
      this.getUser(username);
      this.getMovies();
    }
  }

  // Gets the user account from the database
  getUser(user) {
    authClient.get(`https://myflix-2388-app.herokuapp.com/users/${user}`)
      .then(response => {
        //console.log('Account was received successfully');
        this.props.setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Gets the movies from the Database
  getMovies() {
    authClient.get('https://myflix-2388-app.herokuapp.com/movies')
      .then(response => {
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Login function
  onLoggedIn(authData) {
    console.log(authData);
    this.props.setUser(authData.user);

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getUser(authData.user.Username)
    this.getMovies();
  }

  onRegister(register) {
    console.log(register);
    this.props.setUser(register);
  }

  onProfileUpdate(updatedUser) {
    this.props.setUser(updatedUser);
    localStorage.setItem('user', updatedUser.Username);
  }

  render() {
    let { movies, user } = this.props;

    return (
      <Router>

        <Row className="main-view justify-content-md-center">

          {/*Main View*/}
          <Route exact path="/" render={({ history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <>
              <NavigationBar user={user} history={history} />
              <MoviesList movies={movies} />
            </>
          }} />

          {/*Registration View*/}
          <Route path="/register" render={() => {
            if (user) return <Redirect to="/" />
            return <Col>
              <RegistrationView />
            </Col>
          }} />

          {/*Profile View*/}
          <Route path="/users/:Username" render={({ history }) => {
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            if (movies.length === 0) return <div className="main-view" />;
            return <>
              <NavigationBar user={user} history={history} />
              <Col lg={8} md={12}>
                <ProfileView user={user} history={history} onProfileUpdate={this.onProfileUpdate} onBackClick={() => history.goBack()} />
              </Col>
              <Col lg={12} md={12}>
                <FavoriteMovies user={user} movies={movies} history={history} />
              </Col>
            </>

          }} />

          {/*Movie View*/}
          <Route exact path="/movies/:movieId" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <>
              <NavigationBar user={user} history={history} />
              <Col lg={9} md={12} className="movie-view">
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
              </Col>
            </>
          }} />

          {/*Director View*/}
          <Route exact path="/directors/:name" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <>
              <NavigationBar user={user} history={history} />
              <Col md={12}>
                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} movies={movies} />
              </Col>
            </>
          }
          } />

          {/*Genre View*/}
          <Route exact path="/genres/:name" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <>
              <NavigationBar user={user} history={history} />
              <Col md={12}>
                <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} movies={movies} />
              </Col>
            </>
          }} />

        </Row>
      </Router>
    );
  }
}

let mapStateToProps = state => {
  return {
    movies: state.movies,
    user: state.user
  }
}

export default connect(mapStateToProps, { setMovies, setUser, deleteUser })(MainView);
