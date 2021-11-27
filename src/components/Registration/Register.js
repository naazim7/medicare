
import { Card, Container, Form,Button, Row, Col, Alert } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import TopNav from '../Header/TopNav/TopNav';
import PageTop from '../PageTop/PageTop';
import login from '../../assets/images/login.jpg'

import { Link,useHistory,useLocation } from 'react-router-dom';

import useAuth from '../hooks/useAuth';


const Register = () => {
    const { signUpWithEmail,setEmail,setPassword,error,setError,setUser } = useAuth();
 const location = useLocation();
	const history = useHistory();
	 const url = location.state?.from || "/home";
   
	const handleEmail = (e) => {
		
        e.preventDefault();
       setEmail(e.target.value);
}

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
}

  
	const handleRegistration = (e) => {
		e.preventDefault();
		signUpWithEmail()
			.then((result) => {
			
				setUser(result.user)
				
				history.push(url)
	

				console.log("user");
			})
			.catch((error) => {
				const errorMessage = error.message;
				
			});
}

    return (
			<>
				<TopNav></TopNav>
				<PageTop pageTitle="Registration"></PageTop>

				<Container>
					<Card className="m-5 p-2">
						<Row>
							<Col>
								<img src={login} alt="reg"></img>
							</Col>
							<Col>
								<Form onSubmit={handleRegistration}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											onBlur={handleEmail}
										/>
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
											onBlur={handlePassword}
										/>
									</Form.Group>
								{error &&	<Alert>{error}</Alert>}
									<Button variant="success" type="submit">
										Register
									</Button>{" "}
									<p>
										already have an account? <Link to="/login">Login</Link>
									</p>
								</Form>
							</Col>
						</Row>
					</Card>
				</Container>

				<Footer></Footer>
			</>
		);
};

export default Register;