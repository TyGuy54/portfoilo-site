import React from 'react';
import {SideNav} from '../../sideNav/sideNav';
import '../../../assets/css/homeSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';


export const HomePage = () =>{
    return (
        <>
            <SideNav/>
            <Container>
                <div className='homeBG'></div>
                <Col className='homeContent'>
                    <div className='homeH1'>Hey I Program</div>
                    <div className='homeP'>I dont know it's pretty cool I guess</div>
                </Col>
            </Container>
        </>
    )
}