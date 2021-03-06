import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import CategoryService from "../../api/CategoryService";
class CategoryContainer extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    CategoryService.getCategories().then((response) => {
      this.setState({ categories: response.data });
    });
  };

  render() {
    const info = this.props.categoryInfo;
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
export default CategoryContainer;
