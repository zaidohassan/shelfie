import React, { Component } from "react";
import Product from "../Product/Product";
import "./Dashboard.css";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inventoryList: []
    };
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    axios.get("/api/inventory").then(response => {
      this.setState({ inventoryList: response.data });
    });
  }

  deleteButton(val) {
    axios.delete(`/api/inventory/${val}`).then(results => {
      console.log(results.data);
      this.setState({ inventoryList: results.data });
    });
  }

  edit(val) {
    const { productname, url, price } = this.state.inventoryList[val];
    axios
      .put(`/api/inventory/${val}`, { productname, url, price })
      .then(res => {
        this.setState({ inventoryList: res.data });
      });
  }

  render() {
    const { inventoryList } = this.state;
    let displayProduct = inventoryList.map((products, i) => {
      return (
        <div key={i}>
          <div className="entireBox2">
            <Product
              products={products}
              deleteButton={this.deleteButton}
              editButton={this.edit}
            />
          </div>
        </div>
      );
    });
    return <div>{displayProduct}</div>;
  }
}
