import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DoctorDetails from '../../components/Doctors/DoctorDetails';

import Login from '../../components/Login/Login';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Register from '../../components/Registration/Register';
import DoctorsPage from '../Doctors/DoctorsPage';
import Overview from '../Overview/Overview';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Error from '../ErrorPage/Error';


const AppRoute = () => {
    return (
			<>
				<Router>
					
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/home">
							<Home></Home>
						</Route>
						<Route path="/contact">
						<Contact></Contact>
                    </Route>
						<Route path="/about">
							<About></About>
                    </Route>
						<PrivateRoute path="/doctors">
						<DoctorsPage></DoctorsPage>
                    </PrivateRoute>
						<Route path="/overview">
					<Overview></Overview>
                    </Route>
                
						<PrivateRoute path="/details/:id">
							<DoctorDetails></DoctorDetails>
                    </PrivateRoute>
						<Route path="/login">
						<Login></Login>
                    </Route>
						<Route path="/register">
						<Register></Register>
                     </Route>
						<Route path="*">
						<Error></Error>
                     </Route>
						
                    
					</Switch>
				</Router>
			</>
		);
};

export default AppRoute;