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

// import components
import PollingBooth from './Components/PollingBooth';
import Home from './Components/Home';
import RegPoll from './Components/RegPoll';

export default function App() {
  return (
		<Router>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='/'>Home Page</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mx-auto'></Nav>
				<Nav>
					<Nav.Link href='/RegPoll'>Register poll</Nav.Link>
					<Nav.Link onClick={window.accountId === "" ? login : logout}>
					{window.accountId === "" ? "Login" : window.accountId}
					</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/RegPoll'>
					<RegPoll />
				</Route>
				<Route exact path='/PollingBooth'>
					<PollingBooth />
				</Route>
			</Switch>
		</Router>
  );
}
