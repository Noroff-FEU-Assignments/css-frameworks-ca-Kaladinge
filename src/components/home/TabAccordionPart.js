import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import firstPicture from '../../Tab images/tab-1.jpg';
import secondPicture from '../../Tab images/tab-2.jpg';
import thirdPicture from '../../Tab images/tab-3.jpg';

function TabAccordionPart() {
    return (
       
            <>
                    <div className="d-none d-md-block">
                        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="first" title="First">
                                <div className="my-flex">
                                    <img src= {firstPicture}/>
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                </div> 
                            </Tab>
                            <Tab eventKey="second" title="Second">
                                <div className="my-flex">
                                    <img src= {secondPicture}/>
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                </div>  
                            </Tab>
                            <Tab eventKey="third" title="Third">
                                <div className="my-flex">
                                    <img src= {thirdPicture}/>
                                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                </div>   
                            </Tab>
                    
                        </Tabs>
                    </div>
                        <Accordion defaultActiveKey="0" className="d-md-none">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Lorem</Accordion.Header>
                                    <Accordion.Body>
                                Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Ipsum</Accordion.Header>
                                    <Accordion.Body>
                                    Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Dolor</Accordion.Header>
                                    <Accordion.Body>
                                    Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Porta</Accordion.Header>
                                    <Accordion.Body>
                                    Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna.
                                    </Accordion.Body>
                                </Accordion.Item>
                    </Accordion>
        </>
        
    )
}

export default TabAccordionPart
