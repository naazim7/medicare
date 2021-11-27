import React from 'react';
import Counter from '../../components/Counter/Counter';
import Doctors from '../../components/Doctors/Doctors';
import Footer from '../../components/Footer/Footer';
import TopBanner from '../../components/Header/TopBanner/TopBanner';
import TopNav from '../../components/Header/TopNav/TopNav';
import OverviewBanner from '../../components/OverviewBanner/OverviewBanner';
import ClientReview from '../../components/PatientReview/Review';
import Speciality from '../../components/Speciality/Speciality';
import Support from '../../components/Support/Support';


const Home = () => {
    return (
			<>
				<TopNav></TopNav>
				<TopBanner></TopBanner>
				<OverviewBanner></OverviewBanner>
				<Doctors></Doctors>
				<Speciality></Speciality>
			<Counter></Counter>
			<ClientReview></ClientReview>
               <Support></Support>
             <Footer></Footer>
			</>
		);
};

export default Home;