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
                        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3 tabs__container">
                            <Tab eventKey="first" title="First" className="tabs__folder">
                                        <div className="tabs-content tabs__container">
                                            <Row>
                                                <Col md={4}>
                                                    <img src= {firstPicture} alt="pic" className="tabs__image"/>
                                                </Col>
                                                <Col md={8}>
                                                    <p className="tabs__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                                </Col>
                                            </Row>
                                        </div>  
                            </Tab>
                            <Tab eventKey="second" title="Second" className="tabs__folder">
                                <div className="tabs-content">
                                    <img src= {secondPicture} alt="pic" className="tabs__image"/>
                                    <p className="tabs__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                </div>  
                            </Tab>
                            <Tab eventKey="third" title="Third" className="tabs__folder">
                                <div className="tabs-content">
                                    <img src= {thirdPicture} alt="pic" className="tabs__image"/>
                                    <p className="tabs__text">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                </div>   
                            </Tab>
                    
                        </Tabs>
                    </div>
                        <Accordion defaultActiveKey="0" className="d-md-none">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>First</Accordion.Header>
                                    <Accordion.Body>
                                 <div className="accordion-content">
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                    <img src= {firstPicture} alt="pic"/>
                                </div>   
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Second</Accordion.Header>
                                    <Accordion.Body>
                                     <div className="accordion-content">
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                    <img src= {secondPicture} alt="pic"/>
                                </div>   
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Third</Accordion.Header>
                                    <Accordion.Body>
                                     <div className="accordion-content">
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                    <img src= {thirdPicture} alt="pic"/>
                                </div>   
                                    </Accordion.Body>
                                </Accordion.Item>
                               
                    </Accordion>
        </>
        
    )
}

export default TabAccordionPart
