import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


export class NavigationBar extends React.Component {

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
    console.log("You have been logged out");
  }


  render() {
    const { history, user } = this.props;

    return (
      <>
        <Navbar className="navbar fixed-top" expand="lg" bg="danger" variant="dark">
          <Navbar.Brand className="font-weight-bold">myFlix Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="navsize2">
              <Nav.Link className="text-white" onClick={() => { history.push(`/`); }}>
                All Movies
              </Nav.Link>
              <Nav.Link className="text-white" onClick={() => { history.push(`/users/${user}`); }}>
                <span>{`${user}`}</span>
              </Nav.Link>

              <Nav.Link className="text-white" onClick={() => { this.onLoggedOut() }}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="margin"></div>
      </>
    );
  }
}
