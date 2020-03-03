import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { filterProduct } from '../redux/actions/product'

class Navbar extends Component {
  state = {
    category: "",
    search: ""
  }

  sortProduct = event => {
    this.setState({
      category: event.target.value
    })
    this.props.dispatch(filterProduct(event.target.value, this.state.search))
  }

  searchProduct = event => {
    this.setState({
      search: event.target.value
    })
    this.props.dispatch(filterProduct(this.state.category, event.target.value))
  }

  render() {
    const { onClick } = this.props;
    const fontAW = {
      cursor: "pointer",
      color: "#fa7578",
      textShadow: "1px 1px 1px #ccc",
      padding: "10px 32px 10px 32px",
      textDecoration: "none",
      fontSize: "1.5em"
    };

    const titleAW = {
      display: "inline-grid",
      marginLeft: "2px",
      marginBottom: "10px",
      fontSize: "unset",
      textAlign: "center"
    }
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <span style={titleAW}><Link className="fa fa-home" style={fontAW} to="/" />HOME</span>
          <span style={titleAW}><Link className="fa fa-cutlery" style={fontAW} to="/product" />PRODUCT</span>
          <span style={titleAW}><Link className="fa fa-tags" style={fontAW} to="/category" />CATEGORY</span>
          <span style={titleAW}><Link className="fa fa-bar-chart" style={fontAW} to="#" />HISTROY</span>
          <span style={titleAW}><Link className="fa fa-sign-out" style={fontAW} to="#" onClick={onClick} />LOGOUT</span>
        </div>
        <nav className="navbar navbar-light bg-white">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-text" style={{ fontSize: 16, color: 'black' }}>
            CASHIERUN V1.4
            </span>
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">SORT</label>
              </div>
              <select className="custom-select mr-1" id="inputGroupSelect01" defaultValue={"DEFAULT"} name="category" onChange={this.sortProduct} as="select">
                <option value="DEFAULT" disabled>Choose..</option>
                <option value="">ALL</option>
                <option value="food">FOOD</option>
                <option value="drink">DRINK</option>
                <option value="cake">CAKE</option>
              </select>
              <input
                className="form-control"
                style={{ border: "none" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.searchProduct}
              />
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

export default connect()(Navbar);
