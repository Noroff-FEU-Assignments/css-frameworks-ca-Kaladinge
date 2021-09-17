import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './sass/style.scss';
import Home from './components/Home';


import News from './components/News';
import Contact from './components/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Formcontrol';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  return (
    <Router>
      <div className="wrapper">
       <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
                <NavLink to="/news" className="nav-link">News</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button className="btn-secondary" variant="outline-success">Go</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>

      
        <div className="footer">
          <Container className="footer__container">
            <Row>
              <Col xs={12} md={4} className="footer__column footer__column1">
                <div className="footer__item">
                  <i className="fab fa-vimeo-v footer__icons"></i>
                  <i className="fab fa-youtube footer__icons"></i>
                </div>
              </Col>
              <Col xs={6} md={4} className="footer__column footer__column2">
                <div className="footer__item">hello@yay.com</div>
              </Col>
              <Col xs={6} md={4} className="footer__column footer__column3">
                <div className="footer__item">Copyright 2020</div>
              </Col>
            </Row>
          </Container>
        </div>
      
    </Router>
    
  );
}

export default App;
