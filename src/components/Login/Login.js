import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { Card, Container, Form,Button, Row, Col, Alert } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import TopNav from '../Header/TopNav/TopNav';
import PageTop from '../PageTop/PageTop';
import login from '../../assets/images/login.jpg'

import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Login = () => {
	const { googleSignIn, emailSignIn, setEmail, setPassword, error, user,setError,setUser,setLoading } = useAuth();
	const location = useLocation();
	const history = useHistory();
		const url = location.state?.from || "/home";


 const handleEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
 };

 const handlePassword = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
 };

	
	
	
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				history.push(url);
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => setLoading(false));
      
	
	}










	
	const handleEmailSignIn = (e) => {
		   e.preventDefault();
	
		           emailSignIn()
									.then(() => {
										history.push(url);
									})
									.catch((error) => {
										const errorMessage = error.message;
										setError(errorMessage);
									})
									.finally(() => setLoading(false));
	}
	

    return (
			<>
				<TopNav></TopNav>
				<PageTop pageTitle="Login"></PageTop>

				<Container>
					<Card className="m-5 p-2">
						<Row>
							<Col>
								<img src={login} alt="login"></img>
							</Col>
						<Col>
							
							<Form onSubmit={handleEmailSignIn}>
								
								
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} />
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" onBlur={handlePassword} />
									</Form.Group>
									{error && <Alert>{error}</Alert>}
									<Button variant="success" type="submit" >
										LogIn
									</Button>
									<p className="my-2">
										New Here? <Link to="/register">Regiser</Link>
									</p>
								
									<Button
										variant="dark"
									
										onClick={handleGoogleSignIn}>
										<FontAwesomeIcon
											icon={faGoogle}
											style={{ color: "green" }}
										/>
										Login Using Google
									</Button>
								</Form> 
							</Col>
						</Row>
					</Card>
				</Container>

				<Footer></Footer>
			</>
		);
};

export default Login;