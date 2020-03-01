import React, { Component, Fragment } from 'react';

class Cart extends Component {
    state = {
        cart: 0
    };
    render() {
        return (
            <Fragment>
                <nav
                    className="navbar navbar-light bg-white"
                    style={{ paddingLeft: "9rem" }}
                >
                    <span className="navbar-text">
                        Cart:
                <span className={this.getBadgeClasses()}>{this.formatCart()}</span>
                    </span>
                </nav>
                <div className="row" id="row_posts">
                    <div className="col-md-12" id="col_posts">
                        <img src="/Cart.png" className="card-img-top" alt="Images.jpg" />
                    </div>
                </div>
            </Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.state.cart === 0 ? "primary" : "warning";
        return classes;
    }

    formatCart() {
        const { cart } = this.state;
        return cart === 0 ? 0 : cart;
    }
}

export default Cart;