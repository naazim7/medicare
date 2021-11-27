import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import image from '../../assets/images/Why-Choose-us.png'

const Speciality = () => {
    return (
			<>
				<Container className="customCard mt-5">
					<Row>
						<Col lg={6} md={6} sm={12}>
							<img src={image} alt="fdfh" className="img-fluid"></img>
						</Col>
                    <Col lg={6} md={6} sm={12}>
                        <h3 className="text-center titleRegular my-2">Why You Choose us?</h3>
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Excellent Services</Accordion.Header>
									<Accordion.Body>
										Clinical excellence must be the priority for any health care
										service provider. SQUARE Hospital ensures the best
										healthcare service comprise of professional (clinical)
										service excellence with outstanding personal service.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Qualified Doctors</Accordion.Header>
									<Accordion.Body>
										SQUARE Hospital aims to provide the highest possible level
										of care by the qualified consultants from India, Singapore,
										USA, UK & quality hospitals in the Middle East. Even the
										nurses & technicians are also proficiently trained from
										Bangladesh, Australia, UK, India and The Philippines.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Emergency Departments</Accordion.Header>
									<Accordion.Body>
										For appointment, emergency, billing & information: 10616
										Land phone: +88 02 8144400 Mobile no.: +88 01713377775
										24-hour emergency & ambulance service: +88 01713377775
										Email: info@squarehospital.com Facebook:
										https://www.facebook.com/squarehospital.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header >Great Infrastructure</Accordion.Header>
									<Accordion.Body>
										SQUARE Hospital has 3 buildings on both sides of the
										Panthapath Main Road, connected by an over bridge. The
										hospital with more than 6 lac square feet of space is
										situated in the central region of Dhaka city, capital of
										Bangladesh.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>
					</Row>
				</Container>
			</>
		);
};

export default Speciality;