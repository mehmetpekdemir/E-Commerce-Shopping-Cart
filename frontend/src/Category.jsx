import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Category extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((response) => this.setState({ categories: response }));
  };

  render() {
    const info = this.props.info;
    const state = this.state;

    return (
      <div>
        <h3>{info.title}</h3>
        <ListGroup>
          {state.categories.map((category) => (
            <ListGroupItem
              active={category.categoryName === info.currentCategory}
              onClick={() => info.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
export default Category;
