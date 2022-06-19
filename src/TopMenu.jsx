import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';


export function TopMenu(props) {
  return(
    <div className="navDiv">
    <Navbar bg="light" expand="md">
    <Container>
      <Navbar.Brand href="https://artofpc.com/" style={{color: '#7b13fc'}}>Art of PC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="https://artofpc.com/">Home</Nav.Link>
          <Nav.Link href="https://artofpc.com/search-posts/">Articles</Nav.Link>
          <Nav.Link href="https://artofpc.com/reviews/">Reviews</Nav.Link>
          <Nav.Link href="https://artofpc.com/category/crypto/">Crypto</Nav.Link>
          <Nav.Link href="https://artofpc.com/pc-builds/">PC Builds</Nav.Link>
          <Nav.Link href="https://artofpc.com/how-to-build-a-pc-step-by-step/">How to Build a PC</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <br/>
  </div>
  )

}

