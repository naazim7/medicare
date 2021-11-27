import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import TopNav from '../../components/Header/TopNav/TopNav';
import PageTop from '../../components/PageTop/PageTop';
import errorImg from '../../assets/images/errors.jpg'

const Error = () => {
    return (<>
        <TopNav></TopNav>
        <PageTop pageTitle="Page Not Found"></PageTop>

        <Container>
            <Card>
            <img src={errorImg} alt="errors" className="imgFluid" />
            </Card>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Error;