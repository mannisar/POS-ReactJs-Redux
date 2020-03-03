import React, { Component } from "react";
import axios from 'axios'

import { connect } from 'react-redux'
// import { readProduct } from "../redux/actions/product"

class Card extends Component {
  onSetCart = (product) => {
    // console.log(product)
    this.props.setProduct(product)
  }

  componentDidMount() {
    if (!localStorage.getItem('isAuth')) {
      this.props.history.push('/login');
    } else {
      this.readProducts()
    }
  }

  readProducts() {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    axios
      .get('http://localhost:3004/api/product', {
        headers: {
          "authorization": authorization,
          "user-id": userId
        }
      })
      .then(response => {
        this.props.getProducts(response)
      })
  }

  render() {
    const { products } = this.props
    return (
      <div className="row scroll" id="row_posts">
        {products.map((product, index) => (
          <div className="col-sm-2" id="col_posts" key={index}>
            <div className="card" id="card_posts" onClick={() => this.onSetCart(product)}>
              <img
                src={product.image}
                className="card-img-top"
                alt="Images.jpg"
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5
                  className="card-title"
                  style={{
                    fontSize: 15,
                    marginBottom: "-0.1rem",
                    marginTop: "0.75rem"
                  }}
                >
                  {product.name_product}
                </h5>
                <p className="card-text" style={{ fontSize: 14 }}>
                  Rp.{product.price}
                </p>
                <p className="card-text" style={{ fontSize: 14, fontWeight: 'bold' }}>
                  Tersisa: {product.stock}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    //cart: state.items
  }
}

const mapDispatchToProps = (dispatch) => ({
  setProduct: payload => dispatch({
    type: "CART_FULFILLED",
    payload
  }),
  getProducts: payload => dispatch({
    type: "READ_PRODUCT_FULFILLED",
    payload
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);