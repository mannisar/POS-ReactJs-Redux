import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const itemCart = ({ cart, addQty, reduceQty, deleteItem }) => {
    const onAddQty = (e) => {
        e.preventDefault();
        addQty(cart);
    }

    const onReduceQty = (e) => {
        e.preventDefault();
        reduceQty(cart);
    }

    const onDelete = (e) => {
        e.preventDefault();
        deleteItem(cart);
    }
    return (
        <div className="row">
            <div className="col-md-4" id="col_posts">
                <img src={cart.image} style={{ width: 80, height: 80 }} />
            </div>
            <div className="col-md-4" id="col_posts">
                <p>{cart.name_product}</p>
                <div className="col-sm-4" id="col_posts">
                    <button className="btn btn-primary" onClick={onReduceQty}>-</button>
                </div>
                <div className="col-sm-2" id="col_posts" style={{ margin: 6 }}>{cart.qty}</div>
                <div className="col-sm-4" id="col_posts">
                    <button className="btn btn-primary" onClick={onAddQty}>+</button>
                </div>
            </div>
            <div className="col-md-4" id="col_posts">
                <p> Rp. {cart.price}</p>
                <button className="btn btn-primary" style={{ marginTop: 30 }} onClick={onDelete}>Remove</button>
            </div>
        </div>
    )
}

export default itemCart;