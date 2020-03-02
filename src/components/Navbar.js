import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Navbar = (props) => {
  const { onClick, onChange } = props
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
    marginLeft: "25px",
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
        <span style={titleAW}><Link className="fa fa-sign-out" style={fontAW} to="/login" onClick={onClick} />LOGOUT</span>
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
          <input
            className="form-control"
            style={{ border: "none" }}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onChange}
          />
        </form>
      </nav>
    </div>
  );
}

export default connect()(Navbar);
