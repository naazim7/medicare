import React from 'react';
import Footer from '../../components/Footer/Footer';
import TopNav from '../../components/Header/TopNav/TopNav';
import PageTop from '../../components/PageTop/PageTop';
import Speciality from '../../components/Speciality/Speciality';

const Overview = () => {
    return (
        <>
            
            <TopNav></TopNav>
            <PageTop pageTitle="OverView"></PageTop>

            <Speciality></Speciality>
            <Footer></Footer>

        </>
    );
};

export default Overview;