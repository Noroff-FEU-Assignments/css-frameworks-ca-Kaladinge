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
             <Col xs={12} sm={6} lg={3}>
                <Card className="card">
                <Card.Img variant="top" src= {firstPicture} className="card__image" />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary" className="card__button">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={3}>
                <Card className="card">
                <Card.Img variant="top" src= {secondPicture} className="card__image"/>
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={3}>
                <Card className="card">
                <Card.Img variant="top" src={thirdPicture} className="card__image"/>
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={3}>
                <Card className="card">
                <Card.Img variant="top" src={fourthPicture} className="card__image"/>
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={3}>
                <Card className="card">
                <Card.Img variant="top" src={fifthPicture} className="card__image"/>
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={3}>
                <Card className="card">
                <Card.Img variant="top" src={sixthPicture} className="card__image"/>
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={3}>
                <Card className="card">
                <Card.Img variant="top" src={seventhPicture} className="card__image"/>
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={3}>
                <Card className="card">
                <Card.Img variant="top" src={eightPicture} className="card__image"/>
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
