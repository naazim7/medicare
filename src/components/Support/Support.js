import React, { useState } from 'react';
import { BigPlayButton, LoadingSpinner, Player } from "video-react";
import { Col, Container, Modal, Row,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import videoThumb from '../../assets/images/tube-img.jpg'
import "video-react/dist/video-react.css";

const Support = () => {



    const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
    return (
			<>
				<Container className="mt-5 customCard">
					<Row className="p-2">
						<Col lg={6} md={6} sm={12} className="centerXY">
							<h3>MediCare SUPPORT SERVICES</h3>

							<div className="justify-text">
								<p>
									<FontAwesomeIcon
										className="bulletIcon"
										icon={faArrowCircleRight}
									/>
									USA-standard housekeeping & cleaning services
								</p>
								<p>
									<FontAwesomeIcon
										className="bulletIcon"
										icon={faArrowCircleRight}
									/>
									24-hours pharmacy services
								</p>
								<p>
									<FontAwesomeIcon
										className="bulletIcon"
										icon={faArrowCircleRight}
									/>
									Convenient & secured carparking
								</p>
								<p>
									<FontAwesomeIcon
										className="bulletIcon"
										icon={faArrowCircleRight}
									/>
									USA-standard safety & security system
								</p>
								<p>
									<FontAwesomeIcon
										className="bulletIcon"
										icon={faArrowCircleRight}
									/>
									24/7 Cafeteria Services
								</p>
								<p>
									<FontAwesomeIcon
										className="bulletIcon"
										icon={faArrowCircleRight}
									/>
									ATM Booth Access
								</p>
							</div>
						</Col>
						<Col lg={6} md={6} sm={12} className="centerXY">
							<h3>KNOW ABOUT MediCare LTD</h3>
							<img
								src={videoThumb}
								className="videoThumb"
								onClick={handleShow}
								alt="txt"></img>
						</Col>
					</Row>
				</Container>

				<Modal show={show} onHide={handleClose}>
					<Modal.Body>
						<Player
							playsInline
							src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
							<BigPlayButton position="center" />
							<LoadingSpinner />
						</Player>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="success" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
};

export default Support;