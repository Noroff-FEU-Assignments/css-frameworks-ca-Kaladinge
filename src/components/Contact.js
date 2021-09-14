import React from 'react'
import Container from 'react-bootstrap/Container'
import FormPart from './contactparts/FormPart'
import ContactInfo from './contactparts/ContactInfo'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
    return (
        <Container>
            <h1>Submit your details</h1>
            <Row>
                <Col xs={12} md={6}>
                    <FormPart/>
                </Col>
                <Col xs={12} md={6}>
                    <ContactInfo/>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
