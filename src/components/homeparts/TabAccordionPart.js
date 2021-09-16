import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import firstPicture from '../../Tab images/tab-1.jpg';
import secondPicture from '../../Tab images/tab-2.jpg';
import thirdPicture from '../../Tab images/tab-3.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TabAccordionPart() {
    return (
       
            <>
                    <div className="d-none d-md-block tabs">
                        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="tabs__container">
                            <Tab eventKey="first" title="First" className="tabs__folder">
                                        <div className="tabs-content tabs__item">
                                            <Row className="tabs__row">
                                                <Col md="auto" className="tabs__column">
                                                    <img src= {firstPicture} alt="pic" className="tabs__image"/>
                                                </Col>
                                                <Col className="tabs__column">
                                                    <p className="tabs__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                                    <i className="fab fa-facebook-f tabs__icon"></i>
                                                    <i className="fab fa-twitter tabs__icon"></i>
                                                </Col>
                                            </Row>
                                        </div>  
                            </Tab>
                            <Tab eventKey="second" title="Second" className="tabs__folder">
                                <div className="tabs-content tabs__item">
                                            <Row className="tabs__row">
                                                <Col md="auto" className="tabs__column">
                                                    <img src= {secondPicture} alt="pic" className="tabs__image"/>
                                                </Col>
                                                <Col className="tabs__column">
                                                    <p className="tabs__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                                    <i className="fab fa-facebook-f tabs__icon"></i>
                                                    <i className="fab fa-twitter tabs__icon"></i>
                                                </Col>
                                            </Row>
                                        </div>  
                            </Tab>
                            <Tab eventKey="third" title="Third" className="tabs__folder">
                                <div className="tabs-content tabs__item">
                                            <Row className="tabs__row">
                                                <Col md="auto" className="tabs__column">
                                                    <img src= {thirdPicture} alt="pic" className="tabs__image"/>
                                                </Col>
                                                <Col className="tabs__column">
                                                    <p className="tabs__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                                    <i className="fab fa-facebook-f tabs__icon"></i>
                                                    <i className="fab fa-twitter tabs__icon"></i>
                                                </Col>
                                            </Row>
                                </div>  
                            </Tab>
                    
                        </Tabs>
                    </div>
                        <Accordion defaultActiveKey="0" className="d-md-none accordion">
                                <Accordion.Item eventKey="0" className="accordion__item">
                                    <Accordion.Header className="accordion__header">First</Accordion.Header>
                                    <Accordion.Body className="accordion__body">
                                        <div className="accordion__content">
                                            <p className="accordion__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                            <img src= {firstPicture} alt="pic" className="accordion__image"/>
                                            <div className="accordion__iconholder">
                                                <i className="fab fa-facebook-f accordion__icon"></i>
                                                <i className="fab fa-twitter accordion__icon"></i>
                                            </div>
                                        </div>   
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="accordion__header">Second</Accordion.Header>
                                    <Accordion.Body className="accordion__body">
                                        <div className="accordion__content">
                                            <p className="accordion__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                            <img src= {secondPicture} alt="pic" className="accordion__image"/>
                                            <div className="accordion__iconholder">
                                                <i className="fab fa-facebook-f accordion__icon"></i>
                                                <i className="fab fa-twitter accordion__icon"></i>
                                            </div>
                                        </div>   
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="accordion__header">Third</Accordion.Header>
                                    <Accordion.Body className="accordion__body">
                                        <div className="accordion__content">
                                            <p className="accordion__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                            <img src= {thirdPicture} alt="pic" className="accordion__image"/>
                                            <div className="accordion__iconholder">
                                                <i className="fab fa-facebook-f accordion__icon"></i>
                                                <i className="fab fa-twitter accordion__icon"></i>
                                            </div>
                                        </div>   
                                    </Accordion.Body>
                                </Accordion.Item>
                               
                    </Accordion>
        </>
        
    )
}

export default TabAccordionPart
