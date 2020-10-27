import React from "react";
import { Button, Table } from "reactstrap";

const ProductContainer = (props) => {
  const info = props.productInfo;
  return (
    <div>
      <h3>{info.title}</h3>
      <h4>{info.currentCategory}</h4>
      <Table striped>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {info.products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <Button onClick={() => info.addToCart(product)} color="info">
                  Add to cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductContainer;
