import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const TopNav = () => {
	const { user,logOut } = useAuth();
    return (
			<>
				<Container fluid={true} className="p-0">
					<Navbar
						sticky="top"
						collapseOnSelect
						expand="lg"
						bg="dark"
						variant="dark">
						<Container>
							<Navbar.Brand as={Link} to="/">
								Medicare
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="me-auto"></Nav>
								<Nav>
									<Nav.Link as={Link} to="/">
										Home
									</Nav.Link>
									<Nav.Link as={Link} to="/doctors">
										Doctors
									</Nav.Link>
									<Nav.Link as={Link} to="/overview">
									OverView
									</Nav.Link>
									<Nav.Link as={Link} to="/about">
										About
									</Nav.Link>
									<Nav.Link as={Link} to="/contact">
										Contact Us
									</Nav.Link>
									{!user?.email ? (
									
											<Nav.Link as={Link} to="/login">
												Login
											</Nav.Link>
										
									) : (
										<Navbar.Text>
											{user.displayName || user.email}
											<Button className="ms-1" variant="danger" size="sm" onClick={logOut}>
												LogOut
											</Button>
										</Navbar.Text>
									)}
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</Container>
			</>
		);
};

export default TopNav;