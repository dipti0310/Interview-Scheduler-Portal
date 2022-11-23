// import React from 'react'
import * as ReactBootstrap from "react-bootstrap";
import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    // let location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname);
    //   }, [location]);

  return (
    <div>
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootstrap.Container>
  <ReactBootstrap.Navbar.Brand href="#home">Interview-Creation-Portal</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="me-auto">
      {/* <ReactBootstrap.Nav.Link href="#features">Schedule Interview</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pricing">Upcoming Interviews</ReactBootstrap.Nav.Link> */}
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
    {/* <ReactBootstrap.Nav.Link className='mx-2 active' href="#features">Schedule Interview</ReactBootstrap.Nav.Link> */}
      {/* <ReactBootstrap.Nav.Link className='mx-2' href="#pricing">Upcoming Interviews</ReactBootstrap.Nav.Link> */}
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Container>
</ReactBootstrap.Navbar>
    </div>
  )
}

export default Navbar