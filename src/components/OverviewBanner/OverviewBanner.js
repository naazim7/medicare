import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';


const OverviewBanner = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
		dots: true,
		infinite: true,
		speed: 2500,
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 1,
        slidesToScroll: 1,
       
		};
    return (
			<>
				<Slider {...settings}>
					<Container>
						<Row className="p-4 my-2">
							<Col lg={6} md={6} sm={12} className="centerXY">
								<img src={slider1} className="videoThumb" alt="txt"></img>
							</Col>
							<Col lg={6} md={6} sm={12} className="centerXY">
								<h3 className="titleRegular">Video Consultation</h3>
								<div className="justify-text">
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Ease of booking appointment from the safety of your home
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										In the times of crisis, the best way to get screened and
										advised
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										On demand access to specailists
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Prescription will be sent through E mail given by you.
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										24/7 OnlineServices
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Online Consul Will Help you
									</p>
								</div>
							</Col>
						</Row>
					</Container>
					<Container fluid={true}>
						<Row className="p-4 my-2">
							<Col lg={6} md={6} sm={12} className="centerXY">
								<img src={slider2} className="videoThumb" alt="txt"></img>
							</Col>
							<Col lg={6} md={6} sm={12} className="centerXY">
								<h3 className="titleRegular">24/7 Pharmacy</h3>
								<div className="justify-text">
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Upload Your Prescription .
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										You will get a confirmation call from Our Pharmacist .
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Place your order and get delivered at door steps
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Home Delivary Of Medicine
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
									Medical Equipment Services
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
									Oxygen Silinder Also Provide
									</p>
								</div>
							</Col>
						</Row>
					</Container>
					<Container fluid={true}>
						<Row className="p-4 my-2">
							<Col lg={6} md={6} sm={12} className="centerXY">
								<img src={slider3} className="videoThumb" alt="txt"></img>
							</Col>
							<Col lg={6} md={6} sm={12} className="centerXY">
								<h3 className="titleRegular">Ambulance Service</h3>
								<div className="justify-text">
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Standard Ambulance with Proper equipment
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Stretchers are available to carrying the patient
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Service available to go anywhere in Bangladesh
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Clean & Hygienic Ambulance
									</p>
									<p>
										<FontAwesomeIcon
											className="bulletIcon"
											icon={faArrowCircleRight}
										/>
										Certified & Skilled Driver
									</p>
								</div>
							</Col>
						</Row>
					</Container>
				</Slider>
			</>
		);
};

export default OverviewBanner;