import React, { Component } from "react";

import Category from "./Category";
import Product from "./Product";
import Navi from "./Navi";

import { Col, Container, Row } from "reactstrap";

class App extends Component {
  state = {
    currentCategory: null,
    products: [],
    cart: [],
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
    let newCart = this.state.cart;
    var addedItem = newCart.find((item) => item.product.id === product.id);
    if (addedItem) {
      addedItem.quantity++;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (item) => item.product.id !== product.id
    );
    this.setState({ cart: newCart });
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

    const naviInfo = {
      cart: this.state.cart,
      removeFromCart: this.removeFromCart,
    };

    return (
      <div>
        <Container>
          <Navi info={naviInfo} />
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
export default App;
