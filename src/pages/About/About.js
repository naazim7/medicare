import React from 'react';
import { Card, Container, Row,Col} from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import TopNav from '../../components/Header/TopNav/TopNav';
import PageTop from '../../components/PageTop/PageTop';

const About = () => {
    return (
			<>
				<TopNav></TopNav>

				<PageTop pageTitle="About Us"></PageTop>

				<Container>
					<Card className="my-5">
						<h3 className="text-center mt-3 titleRegular">MediCare LIMITED</h3>
						<p className="p-3 justify-text">
							Opening its doors in August 2006 and situated beside the
							picturesque Gulshan Lake, this hospital is one of the largest
							private sector healthcare facilities in Bangladesh. MediCare
							Hospital has the capacity to house over 500 patients and has 12
							state of the art operation theatres to cater to the needs of
							varied patient base.With more than 30 clinical sub specialties,
							our centres of Excellence like Cardiac, Cancer, Renal, Surgical,
							Neuroscience, Mother & Child Health and Critical Care Centres are
							staffed by the most esteemed doctors in their respective fields.
							Since inception till date (July 2021) we have conducted 420,000
							Cardiac Investigations, 55,000 Cardiac Procedures, 14,000 Heart
							Surgeries with 98% success rate, 39 Kidney Transplant, 295,000
							Haemodialysis, 185,000 Radiation Therapy Sessions & 196,000 Health
							Checkups completed.MediCare Hospital has pioneered in many
							endeavors and has achieved many breakthrough milestones.
							Transcatheter Aortic Valve Implant (TAVI) procedure for Aortic
							Stenosis patients, first of its kind in Bangladesh was conducted
							in MediCare Hospital Cardiac Centre, which also prides itself with
							the lone & pioneer iGS 520 Hybrid Cardio-Neuro Cathlab of the
							country. The hospital Pathology Laboratory received ISO 15189:2012
							Accreditation, as the first hospital of the country. The
							comprehensive Cancer Care Centre of the hospital has the country’s
							only Medical Cyclotron to produce radioactive tracer isotope for
							all centres of the country; it also has the first & only TrueBeam
							Linear Accelerator providing accurate radiation to ensure less
							timed precise therapy with minimal side effect. MediCare Hospital
							Renal Centre added Hemo Diafiltration & Bio impedance technology,
							first time in the country, for patients suffering from kidney
							diseases. The 3.0T Signa Pioneer Wide Bore MRI in its Radiology &
							Imaging Centre is also first of its kind in the country.At
							MediCare Hospital, providing our patients with a trusted and
							compassionate environment for healthcare is central to our
							mission. We draw strength from our purpose, which is above all to
							help and to heal. Our physicians, nurses and other caregivers &
							supporting staff are passionate about providing the right care at
							the right time, bringing hope and healing to our patients and
							their families. Patients trust us with their most valuable
							possession – their lives - and all of our caregivers recognize the
							immense responsibility that comes with that trust.
						</p>
					</Card>
				</Container>
				<Container>
					<Card className="my-5">
						<h3 className="text-center mt-3 titleRegular">Services</h3>
						<p className="p-3 justify-text">
							We are committed to (i) Quality, (ii) Effectiveness, (iii)
							Integration, (iv) Caring for the Community, (v) Caring for our
							staff and (vi) Research & Training. Our number one priority is to
							provide our patients with high quality healthcare in a friendly
							and compassionate environment. Some of the major equipments
							installed and services/facilities available in the hospital to
							provide patients with “better than the best” service are
							<Row className="mt-3">
								<Col>
									<p>a) Flat Panel Digital Cathlab</p>
									<p>b) Modular Operation Theatres</p>
									<p>
										c) Critical Care (ICU/CCU/HDU/CICU/KTICU/NICU/PICU) beds{" "}
									</p>
									<p>d) Fresenius 4008S Dialysis Units</p>
									<p>e) Multifiltrate CRRT for critically ill patients</p>
									<p>g) Medical Cyclotron</p>
								</Col>
								<Col>
									<p>h) Linear Accelerator</p>
									<p>i) Spect-CT</p>
									<p>j) 500 Slice CT Scanner</p>
									<p>d) Fresenius 4008S Dialysis Units</p>
									<p>k) High Definition MRI System 1.5 T</p>
									<p>l) 24 hour Emergency Service </p>
								</Col>
							</Row>
						</p>
					</Card>
				</Container>
				<Footer></Footer>
			</>
		);
};

export default About;