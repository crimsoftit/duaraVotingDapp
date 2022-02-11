import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { login, logout } from './utils';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
		<Router>
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
		  <Container>
			<Navbar.Brand href='/'>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
			  <Nav className='mx-auto'></Nav>
			  <Nav>
				<Nav.Link href='/NewPoll'>New Poll</Nav.Link>
				<Nav.Link onClick={window.accountId === "" ? login : logout}>
				  {window.accountId === "" ? "Login" : window.accountId}
				</Nav.Link>
			  </Nav>
			</Navbar.Collapse>
		  </Container>
		</Navbar>
		<Switch>
		  
		</Switch>
	  </Router>
    );
  }
}

export default App;