import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'


const TopBanner = () => {
    return (
			<>
				<Container fluid={true} className="topBanner">
					<div className="topBannerOverlay text-center">
						<Row>
							<Col>
								<h1 className="topContent">MediCare Hospital</h1>
								<h6 className="topText">
									"Compassionate care Extraordinary nursing"
								</h6>
							</Col>
						</Row>
					</div>
				</Container>
			</>
		);
};

export default TopBanner;