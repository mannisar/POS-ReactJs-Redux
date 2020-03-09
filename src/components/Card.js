import React, { Component, Fragment } from "react";

import { connect } from 'react-redux'
import { readProduct } from "../redux/actions/product"
import { addToCart } from "../redux/actions/cart"

class Card extends Component {
  state = {
    category: "",
    product: "",
    by: ""
  }

  addToCart = (data) => {
    this.props.dispatch(addToCart(data))
  }

  componentDidMount() {
    this.props.dispatch(readProduct(this.state.category, this.state.product, this.state.by))
  }

  render() {
    const { products } = this.props
    return (
      <div className="row scroll" id="row_posts">
        {products.map((product, index) => (
          <Fragment key={index}>
            <div className="col-sm-2" id="col_posts">
              <div className="card" id="card_posts" onClick={() => this.addToCart(product)}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.image}
                  title={product.description}
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
                    Qty: {product.stock}
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(Card);