import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import TopNav from '../../components/Header/TopNav/TopNav';
import PageTop from '../../components/PageTop/PageTop';
import contact from '../../assets/images/contact.jpg';

const Contact = () => {
    return (
        <>
        <TopNav></TopNav>
            <PageTop pageTitle="Contact With Us"></PageTop>


            <Container className="my-5">
                
                <Card>

                    <Row>
                        <Col lg={6} md={6} sm={12} className="centerXY">
<img src={contact} alt="contact" className="sliderImage "></img>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="centerXY">
                            <form action="">
					<div class="row">
						<div class="col-md-10 col-md-offset-1">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Name"></input>
									</div>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Email"></input>
									</div>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Phone"></input>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
									</div>
									<div class="form-group">
										<input type="submit" class="btn btn-danger mt-2 btn-md" value="Send Message"></input>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</form>
                        </Col>
                    </Row>
                </Card>
</Container>

            <Footer></Footer>
            </>
    );
};

export default Contact;