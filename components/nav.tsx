import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

interface NavProps {}

const NavComponent: React.FC<NavProps> = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="index" className='text-red-500'>MY Profile </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="info" >Home</Nav.Link>
            <Nav.Link href="profile">ข้อมูล</Nav.Link>
            <NavDropdown title="เพิ่มเติม" id="basic-nav-dropdown">
              <NavDropdown.Item href="hobby">งานอดิเรก</NavDropdown.Item>
              <NavDropdown.Item href="skill">Skill</NavDropdown.Item>
              <NavDropdown.Item href="#">สิ่งที่คาดหวัง</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="contact">ติดต่อ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
