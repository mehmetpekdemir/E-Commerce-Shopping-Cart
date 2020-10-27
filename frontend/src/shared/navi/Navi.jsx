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
import CartContainer from "../../container/cart/CartContainer";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const info = props.naviInfo;
  return (
    <div>
      <Navbar color="secondary" dark expand="md">
        <NavbarBrand>Shopping App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mehmetpekdemir">GitHub</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <CartContainer info={info} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
