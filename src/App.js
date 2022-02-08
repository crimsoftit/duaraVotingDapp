import 'regenerator-runtime/runtime';
import React,{useState, Component} from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { login, logout } from './utils';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import getConfig from './config';
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
	return (
	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<Container>
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mx-auto">
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
					<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link>New Poll</Nav.Link>
					<Nav.Link>
					Sign in
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>);
}
