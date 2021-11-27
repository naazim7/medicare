import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const PageTop = (props) => {
    return (
			<Container fluid={true} className="PageTopBanner">
				<div className="PageTopBannerOverlay text-center">
					<Row>
						<Col>
                        <h1 className="topContent">{props.pageTitle}</h1>
							
						</Col>
					</Row>
				</div>
			</Container>
		);
};

export default PageTop;