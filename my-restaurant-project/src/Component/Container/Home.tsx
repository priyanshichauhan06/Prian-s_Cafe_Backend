import { Carousel } from "react-bootstrap";
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigationbar.css';
import {Link, useNavigate} from 'react-router-dom'


function Home() {
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
  //function to close the sidebar
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
          <Navbar.Brand>Prian's Restaurant</Navbar.Brand>
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
      <Carousel interval={3000} prevIcon={null} nextIcon={null} >
            <Carousel.Item>
                <img className="d-block w-100 h-100" src="https://img.freepik.com/free-vector/positive-lettering-with-food_52683-34388.jpg?w=740&t=st=1683464109~exp=1683464709~hmac=228a268a93d77d7f8ce4ebef9ffebe00a716514608a3c7e8021805565ab28278" alt="First slide" />
                
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 h-100" src="https://cdn.profoto.com/cdn/05238cd/globalassets/tips-and-tricks/profoto-c1-plus-food-photography-anders-hannola.jpg?width=1200&quality=75&format=jpg"/>
                
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 h-100" src="https://as1.ftcdn.net/v2/jpg/01/18/34/98/1000_F_118349845_tHfNu1UaptC3SCZSIDVZilah0FFNYlOI.jpg" alt="Third slide" />
                
            </Carousel.Item>
        </Carousel>

        
        </div>
        </>
        
    )
}

export default Home;