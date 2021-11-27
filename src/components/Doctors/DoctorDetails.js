import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import TopNav from '../Header/TopNav/TopNav';
import useFakeDb from '../hooks/useFakeDb';
import PageTop from '../PageTop/PageTop';

const DoctorDetails = () => {
   
    const [doctors] = useFakeDb();

    const { id } = useParams();
   
    const doctor= doctors?.find((doctor) => doctor.id === Number(id));
   

    return (
			<>
				<TopNav></TopNav>
				<PageTop pageTitle="Doctor Details"></PageTop>

				{doctors.length && (
					<Container className="my-4">
						<Card className="p-3">
							<Row>
								<Col lg={6} md={12} sm={12}>
									<img src={doctor.img} className="doctorProfile" alt={doctor.name}></img>
								</Col>
								<Col lg={6} md={12} sm={12}>
									<div >
										<p className="fw-bold fs-4">{doctor.name}</p>
										<p className="text-primary">{doctor.special}</p>
										<p>{doctor.degree}</p>
                                    <p>{doctor.desc}</p>
                                    <Button variant="success" className="text-white"> Contact With {doctor.name}</Button>
									</div>
								</Col>
							</Row>
						</Card>
					</Container>
				)}
				<Footer></Footer>
			</>
		);
};

export default DoctorDetails;