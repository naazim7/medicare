import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import useFakeDb from '../hooks/useFakeDb.js';
import Doctor from './Doctor';

const Doctors = () => {
	const [doctors] = useFakeDb();
	
	
 
    
    return (
		<Container>
			<h1 className="text-center titleRegular my-4">Our Hononrable Doctors</h1>
				<Row>
				
						{doctors.map((doctor) => (
							<Doctor key={doctor.id} doctor={doctor}></Doctor>
						))}
					
				</Row>
			</Container>
		);
};

export default Doctors;