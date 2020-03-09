import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
// import queryString from 'query-string'

import { connect } from "react-redux";
import { readProduct } from '../redux/actions/product'
import { readCategory } from '../redux/actions/category'

class Navbar extends Component {
  state = {
    category: "",
    product: "",
    by: ""
  }

  onCategory = event => {
    this.setState({
      category: event.target.value
    })
    this.props.history.push(`/?category=${event.target.value}&product=${this.state.product}&by=${this.state.by}`)
    this.props.dispatch(readProduct(event.target.value, this.state.product, this.state.by))
  }

  onProduct = event => {
    this.setState({
      product: event.target.value
    })
    this.props.history.push(`/?category=${this.state.category}&product=${event.target.value}&by=${this.state.by}`)
    this.props.dispatch(readProduct(this.state.category, event.target.value, this.state.by))
  }

  onBy = event => {
    this.setState({
      by: event.target.value
    })
    this.props.history.push(`/?category=${this.state.category}&product=${this.state.product}&by=${event.target.value}`)
    this.props.dispatch(readProduct(this.state.category, this.state.product, event.target.value))
  }

  componentDidMount() {
    this.props.dispatch(readCategory())
  }

  render() {
    const { show, onClick, categorys } = this.props;
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
    const MainMenu = () => {
      if (localStorage.getItem('role') == "admin") {
        return (
          <Fragment>
            <span style={titleAW}><Link className="fa fa-cutlery" style={fontAW} to="/product" />PRODUCT</span>
            <span style={titleAW}><Link className="fa fa-tags" style={fontAW} to="/category" />CATEGORY</span>
            <span style={titleAW}><Link className="fa fa-users" style={fontAW} to="/user" />ACCOUNT</span>
          </Fragment>
        )
      } else {
        return (
          <Fragment>
          </Fragment>
        )
      }
    }
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <span style={titleAW}><Link className="fa fa-home" style={fontAW} to="/" />HOME</span>
          <MainMenu />
          <span style={titleAW}><Link className="fa fa-bar-chart" style={fontAW} to="/history" />HISTROY</span>
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
            CASHIERUN V1.5
            </span>
          <fieldset disabled={show}>
            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label disabled="disabled" className="input-group-text" htmlFor="inputGroupSelect01" style={{ backgroundColor: "#cd6f82", color: "white" }}>SORT</label>
                </div>
                <select className="custom-select mr-1" id="inputGroupSelect01" style={{ maxWidth: "18%" }} defaultValue={"DEFAULT"} name="category" onChange={this.onCategory} as="select">
                  <option value="">ALL</option>
                  {categorys.map((category) =>
                    <option key={category.id} value={category.name_category}>
                      {category.name_category}
                    </option>
                  )}
                </select>
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01" style={{ backgroundColor: "#cd6f82", color: "white" }}>BY</label>
                </div>
                <select className="custom-select mr-1" id="inputGroupSelect01" style={{ maxWidth: "18%" }} defaultValue={"DEFAULT"} name="by" onChange={this.onBy} as="select">
                  <option value="">ALL</option>
                  <option value="name_product">Name</option>
                  <option value="price">Price</option>
                </select>
                <input
                  className="form-control"
                  style={{ border: "1px solid #ced4da" }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.onProduct}
                />
              </div>
            </form>
          </fieldset>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.categorys.categorys
  }
}

export default withRouter(connect(mapStateToProps)(Navbar));
