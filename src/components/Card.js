import React from "react";

import { connect } from 'react-redux'

const Card = ({ products }) => {
  return (
    <div className="row scroll" id="row_posts">
      {products.map((product, index) => (
        <div className="col-sm-2" id="col_posts" key={index}>
          <div className="card" id="card_posts">
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

export default connect()(Card);