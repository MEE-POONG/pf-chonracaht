import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

interface NavProps {}

const NavComponent: React.FC<NavProps> = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="http://localhost:3000/">MY Profile </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/info">Home</Nav.Link>
            <Nav.Link href="profile">ข้อมูล</Nav.Link>
            <NavDropdown title="เพิ่มเติม" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">งานอดิเรก</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Skill</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">สิ่งที่คาดหวัง</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="http://localhost:3000/contact">ติดต่อ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
