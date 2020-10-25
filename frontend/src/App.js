import React, { Component } from "react";

import Category from "./Category";
import Product from "./Product";
import Navi from "./Navi";

import { Col, Container, Row } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: null,
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({ products: response }));
  };

  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    this.getProducts(category.id);
  };

  addToCart = (product) => {
    alert(product.productName);
  };

  render() {
    const categoryInfo = {
      title: "Category List",
      currentCategory: this.state.currentCategory,
      changeCategory: this.changeCategory,
    };

    const productInfo = {
      title: "Product List",
      currentCategory: this.state.currentCategory,
      products: this.state.products,
      addToCart: this.addToCart,
    };

    return (
      <div>
        <Container>
          <Navi />
          <Row>
            <Col xs="3">
              <Category info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Product info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
