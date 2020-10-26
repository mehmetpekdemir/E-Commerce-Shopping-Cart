import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import React, { Component } from "react";

class Cart extends Component {
  emptyCart() {
    return (
      <NavItem>
        <NavLink>Your Cart is Empty</NavLink>
      </NavItem>
    );
  }

  fullCart(info) {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {info.cart.map((item) => (
            <DropdownItem key={item.product.id}>
              <h6>
                <Badge
                  color="danger"
                  onClick={() => info.removeFromCart(item.product)}
                >
                  Remove
                </Badge>
                {item.product.productName} -{" "}
                <Badge color="secondary">{item.quantity}</Badge>
              </h6>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Show Cart Detail</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    const info = this.props.info;
    return (
      <div>{info.cart.length > 0 ? this.fullCart(info) : this.emptyCart()}</div>
    );
  }
}

export default Cart;
