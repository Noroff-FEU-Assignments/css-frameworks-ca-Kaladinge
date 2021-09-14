import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import firstPicture from '../../News images/news-1.jpg';
import secondPicture from '../../News images/news-2.jpg';
import thirdPicture from '../../News images/news-3.jpg';
import fourthPicture from '../../News images/news-4.jpg';
import fifthPicture from '../../News images/news-5.jpg';
import sixthPicture from '../../News images/news-6.jpg';
import seventhPicture from '../../News images/news-7.jpg';
import eightPicture from '../../News images/news-8.jpg';

function CardPart() {
    return (
    
        <Row>
             <Col xs={12} md={3}>
                <Card >
                <Card.Img variant="top" src= {firstPicture} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3}>
                <Card >
                <Card.Img variant="top" src= {secondPicture} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3}>
                <Card >
                <Card.Img variant="top" src={thirdPicture} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3}>
                <Card >
                <Card.Img variant="top" src={fourthPicture} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3}>
                <Card >
                <Card.Img variant="top" src={fifthPicture} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3}>
                <Card >
                <Card.Img variant="top" src={sixthPicture} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3}>
                <Card >
                <Card.Img variant="top" src={seventhPicture} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3}>
                <Card >
                <Card.Img variant="top" src={eightPicture} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            
        </Row>
    )
}

export default CardPart
