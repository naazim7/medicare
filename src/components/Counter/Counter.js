import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor'


const Counter = () => {
    return (
			<>
				<Container fluid={true} className="counterBg mt-5 text-center ">
					<div className="counterBgOverlay">
						<Row className="my-5 mx-auto">
							<Col
								lg={4}
								md={6}
								sm={12}
								className="d-flex flex-column  justify-content-center align-items-center p-0">
								<h1 className="text-white">
									<CountUp start={0} end={100} duration={1}>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start}>
												<span ref={countUpRef} />
											</VisibilitySensor>
										)}
									</CountUp>
								</h1>
								<h3 className="text-white">Consultation Rooms</h3>
							</Col>

							<Col
								lg={4}
								md={6}
								sm={12}
								className="d-flex justify-content-center flex-column  align-items-center p-0">
								<h1 className="text-white">
									<CountUp start={0} end={3000} duration={1}>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start}>
												<span className="counter" ref={countUpRef} />
											</VisibilitySensor>
										)}
									</CountUp>
								</h1>
								<h3 className="text-white"> In Patients Bed</h3>
							</Col>

							<Col
								lg={4}
								md={6}
								sm={12}
								className="d-flex justify-content-center flex-column  align-items-center p-0 m-0">
								<h1 className="text-white">
									<CountUp start={0} end={100} duration={1}>
										{({ countUpRef, start }) => (
											<VisibilitySensor onChange={start}>
												<span ref={countUpRef} />
											</VisibilitySensor>
										)}
									</CountUp>
								</h1>
								<h3 className="text-white">Staff +</h3>
							</Col>
						</Row>
					</div>
				</Container>
			</>
		);
};

export default Counter;