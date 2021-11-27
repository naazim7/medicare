import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

const ClientReview = () => {
	var settings = {
		autoplay: true,
		autoplaySpeed: 2000,
		
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<Container className="text-center my-3">
				<h1 className="titleRegular">Client Says</h1>
				<Slider {...settings}>
					<Row>
						<Col>
							<div className="text-center ">
								<div className="centerXY">
									<img
										className="roundedImg "
										alt="txtffsdgf"
										src="https://media-eng.dhakatribune.com/uploads/2019/05/web-zaheed-1556971049382.jpg"
										></img>
								</div>
								<h1>Mr. Mahbub</h1>
								<p>This is Very Good Service I have ever Treatment! </p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="text-center ">
								<div className="centerXY">
									<img
										className="roundedImg "
										alt="txjtdd"
										src="https://media-eng.dhakatribune.com/uploads/2018/02/alan-edelman-EDITED.jpg"></img>
								</div>
								<h1>Mr. Kabir Khan</h1>
								<p>
									The way they treat very caring ..Their Environment is very
									Clean and Gorgeous
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="text-center ">
								<div className="centerXY">
									<img
										className="roundedImg "
										alt="tjxtd"
										src="https://upload.wikimedia.org/wikipedia/commons/1/11/Shahriar_Manzoor.jpg"></img>
								</div>
								<h1>Shahriar Monzoor</h1>
								<p>The doctors are very caring and very good</p>
							</div>
						</Col>
					</Row>
				</Slider>
			</Container>
		</>
	);
};

export default ClientReview;
