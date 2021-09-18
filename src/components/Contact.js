import React from 'react'
import Container from 'react-bootstrap/Container'
import FormPart from './contactparts/FormPart'
import ContactInfo from './contactparts/ContactInfo'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <Container className="contact-container">
      <Row>
        <Col xs={12} md={6} className="order-md-2">
          <ContactInfo/>
        </Col>
        <Col xs={12} md={6} className="order-md-1">
          <FormPart/>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
