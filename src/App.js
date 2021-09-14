import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './components/Home';


import News from './components/News';
import Contact from './components/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Formcontrol';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Router>
      <div>
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
                <Button variant="outline-success">Go</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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

      <Container>
        <div className="footer">
            <div>icons</div>
            <div>hello@yay.com</div>
            <div>Copyright 2020</div>
        </div>
      </Container>
    </Router>
    
  );
}

export default App;
