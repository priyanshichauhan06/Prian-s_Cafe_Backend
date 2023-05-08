import React from 'react';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigationbar.css';
import {Link, useNavigate} from 'react-router-dom'

function Navigationbar(props: any) {
  
  //get navigation fn from react router
  const navigate= useNavigate();
  //navigate user to the desired page
  const handleLogout=()=>{
    navigate('/');
  }
  //fn to open sidebar
  function openNav(): void {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
      sidebar.style.width = "250px";
    }
    const main = document.getElementById("main");
    if (main) {
      main.style.marginLeft = "250px";
    }
  }
  //fn to close sidebar
  function closeNav(): void {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
      sidebar.style.width = "0";
    }
    const main = document.getElementById("main");
    if (main) {
      main.style.marginLeft = "0";
    }
  }
  
  return (
    <>
      
        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Nav.Link as={Link} to="/menu" onClick={closeNav}>Menu</Nav.Link>
            <Nav.Link as={Link} to="/category" onClick={closeNav}>Categories</Nav.Link>
            <Nav.Link as={Link} to="/dish" onClick={closeNav}>Dishes</Nav.Link>
        </div>
        <div id="main">
        <Navbar bg="dark" variant="dark">
        <button className="openbtn" onClick={openNav} >&#9776; </button>

        <Container>
          <Navbar.Brand>Prian's Cafe </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          </Nav>
          
        </Container>
      </Navbar>

      
    </div>
    </>
  );
}

export default Navigationbar;
