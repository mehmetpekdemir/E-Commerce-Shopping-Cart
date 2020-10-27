import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class CartDetailContainer extends Component {
  renderCart() {
    const info = this.props.cartInfo;
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {info.cart.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.id}</td>
              <td>{item.product.productName}</td>
              <td>{item.product.unitPrice}</td>
              <td>{item.quantity}</td>
              <td>{item.product.unitPrice * item.quantity} $</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => info.removeFromCart(item.product)}
                >
                  Remove from cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
export default CartDetailContainer;
