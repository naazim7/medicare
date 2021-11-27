import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
	const url=`/details/${doctor.id}`
    return (
			<Col lg={3} md={6} sm={12} className="centerXY">
				<Card className="doctorCard">
					<img src={doctor.img} className="doctorImg" alt="imggs"></img>

                <div className="doctorCardText text-center">
                    <p>{doctor.name}</p>
                    <p>{doctor.degree}</p>
                    <p>{doctor.special}</p>
					<button className="buttonCustom"><Link to={url}>See Details</Link></button>
					</div>
				</Card>
			</Col>
		);
};

export default Doctor;