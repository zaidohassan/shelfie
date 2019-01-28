import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      imageurl: "",
      price: ""
    };
    this.addtoInv = this.addtoInv.bind(this);
  }
  cancelClick() {
    this.setState({
      productname: "",
      imageurl: "",
      price: ""
    });
  }
  addtoInv() {
    axios
      .post("/api/inventory", {
        productname: this.state.productname,
        imageurl: this.state.imageurl,
        price: this.state.price
      })
      .then(response => {
        this.setState({ productname: "", imageurl: "", price: "" });
      });
    // console.log(this.state.inventoryList);
  }

  handleChange(value, id) {
    this.setState({ [id]: value });
  }
  render() {
    const { productname, imageurl, price } = this.state;
    return (
      <div className="entireBox">
        <div className="background">
          <span>Image URL:</span>
          <input
            type="text"
            placeholder="Image Url"
            value={this.state.imageurl}
            onChange={e => this.handleChange(e.target.value, "imageurl")}
          />
          <span>Prouct Name:</span>
          <input
            type="text"
            placeholder="Product Name"
            value={this.state.productname}
            onChange={e => this.handleChange(e.target.value, "productname")}
          />
          <span>Price:</span>
          <input
            type="text"
            placeholder="Price"
            value={this.state.price}
            onChange={e => this.handleChange(e.target.value, "price")}
          />
          <div className="buttons">
            <button onClick={() => this.cancelClick()}>Cancel</button>
            <button onClick={() => this.addtoInv()}>Add to Inventory</button>
          </div>
        </div>
      </div>
    );
  }
}
