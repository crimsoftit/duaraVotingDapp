import 'regenerator-runtime/runtime';
import React,{useState, Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { login, logout } from './utils';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
		<Router>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='/'>Home Page</Navbar.Brand>
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
				<Route>
					<Home />
				</Route>
				<Route>
					<NewPoll />
				</Route>
				<Route>
					<PollingStation />
				</Route>
			</Switch>
		</Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NewPoll() {
  return (
    <div>
      <h2>NewPoll</h2>
    </div>
  );
}