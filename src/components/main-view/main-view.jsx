import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { setMovies, setUser } from '../../actions/actions';

import MoviesList from '../movies-list/movies-list';

import { LoginView } from '../login-view/login-view';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { FavoriteMovies } from '../favorite-movies/favorite-movies'

import { Row, Col } from 'react-bootstrap';

class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      user: null,
      userData: null,
      token: null,
    };
    this.onProfileUpdate = this.onProfileUpdate.bind(this);
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    let userToken = localStorage.getItem('user');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
        token: localStorage.getItem('token')
      });
      this.getAcc(accessToken, userToken);
      this.getMovies(accessToken);
    }
  }

  getAcc(token, user) {
    axios.get(`https://myflix-2388-app.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        console.log('Account was received successfully');
        this.setState({
          userData: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /*
  When a user successfully logs in, this function updates the `user` property in state to that *particular user
  Stores users data in their browser so when a page refresh occur they do not need to log back in.
  */
  getMovies(token) {
    axios.get('https://myflix-2388-app.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
      token: authData.token
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getAcc(authData.token, authData.user.Username)
    this.getMovies(authData.token);
  }

  onRegister(register) {
    console.log(register);
    this.setState({
      register,
    });
  }

  onProfileUpdate(updatedUserData) {
    this.setState({
      userData: updatedUserData,
      user: updatedUserData.Username
    });
    localStorage.setItem("user", updatedUserData.Username);
  }

  render() {
    let { movies } = this.props;
    let { user, userData, token } = this.state;

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
          <Route path={`/users/${user}`} render={({ history }) => {
            if (!userData) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            if (movies.length === 0) return <div className="main-view" />;
            return <>
              <NavigationBar user={user} history={history} />
              <Col lg={8} md={12}>
                <ProfileView user={user} token={token} history={history} userData={userData} onProfileUpdate={this.onProfileUpdate} onBackClick={() => history.goBack()} />
                <FavoriteMovies userData={userData} movies={movies} history={history} />
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
              <Col lg={12} md={10} sm={8} className="movie-view">
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
    movies: state.movies
  }
}

export default connect(mapStateToProps, { setMovies })(MainView);
