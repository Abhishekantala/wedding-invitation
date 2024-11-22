import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import brideGroomSticker from '../assets/couple.png';
import Countdown from './component/contdown';

const WeddingInvitation = () => {
    const targetDate = '2025-02-20T00:00:00';

    return (
        <Container fluid className="invitation-container">
            <Row className="justify-content-center text-center py-0 py-sm-0 py-md-0 lg-py-5">
                <Col>
                    <h1 className="couple-title">Mansi & Abhi</h1>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center text-center mt-5">
                <Col md={4} className='p-0'>
                    <img src={brideGroomSticker} alt="Bride and Groom Sticker" className="sticker-img" />
                </Col>
                <Col md={8} className='background-moon'>
                    <h1 className="invitation-title">Save the Date</h1>
                    <h2 className="invitation-date ">20 Feb 2025</h2>
                    <Countdown targetDate={targetDate} />
                    <h2 className="alt-text mt-5">"Batter Together" – where love and laughter never end.</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default WeddingInvitation;
