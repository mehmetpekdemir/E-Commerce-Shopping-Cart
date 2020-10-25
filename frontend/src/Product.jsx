import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h4>{this.props.info.currentCategory}</h4>
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.info.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.info.addToCart(product)}
                    color="info"
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
