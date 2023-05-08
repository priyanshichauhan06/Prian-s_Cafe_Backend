import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

function NavbarComponent() {
    // const [isCollapsed, setIsCollapsed]=useState(true);

    // const handleCollapse = () => {
    //     setIsCollapsed(!isCollapsed);
    // };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        {/* <div className="collapsed-sidebar">
            <div className={'sidebar ${sidebaropen ? "open" : ""}'}>
                <button onClick={handleCollapse}> Collapse</button>
                <ul>
                    <li>Menu</li>
                    <li>Category</li>
                </ul>

            </div>
        </div> */}

        <Container>
          <Navbar.Brand href="#home">Prian's Restaurant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://quoteideas.com/wp-content/uploads/Food-quotes-status-images-sayings-6.jpg.webp" alt="Second slide"/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default NavbarComponent;