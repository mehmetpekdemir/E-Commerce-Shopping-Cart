import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Cart from "./Cart";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const info = props.info;
  return (
    <div>
      <Navbar color="secondary" dark expand="md">
        <NavbarBrand href="/">Shopping App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mehmetpekdemir">GitHub</NavLink>
            </NavItem>
            <Cart info={info} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
