import React from 'react';
import TopNav from '../../components/Header/TopNav/TopNav';
import PageTop from '../../components/PageTop/PageTop';
import Doctors from '../../components/Doctors/Doctors'
import Footer from '../../components/Footer/Footer';
const DoctorsPage = () => {
    return (
        <>
            
<TopNav></TopNav>
            <PageTop pageTitle="Doctors"></PageTop>
            <Doctors></Doctors>
            <Footer></Footer>
            </>
    );
};

export default DoctorsPage;