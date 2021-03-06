import React from 'react';

// React-Bootstrap components
import { Nav, Navbar } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';

export class NavigationBar extends React.Component {

  constructor(props) {
    super(props)
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
      movies: []
    });
    console.log("You have been logged out");
    window.open('/', '_self');
  }


  render() {
    const { history, user } = this.props;

    return (
      <>
        <Navbar className="navbar fixed-top" expand="lg" bg="danger" variant="dark">
          <Navbar.Brand className="font-weight-bold">Welcome to myFlix Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="navsize2">
              <Nav.Link className="text-white" onClick={() => { history.push(`/`); }}>
                All Movies
              </Nav.Link>
              <Nav.Link className="text-white" onClick={() => { history.push(`/users/${user.Username}`); }}>
                <span>Profile</span>
              </Nav.Link>

              <Nav.Link className="text-white" onClick={() => { this.onLoggedOut() }}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NavigationBar);