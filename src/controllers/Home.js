import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Cart from "./Cart";

import { connect } from "react-redux"
import { readProduct, searchProduct } from "../redux/actions/product"

class Home extends Component {
    componentDidMount() {
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        } else {
            this.readProduct()
        }
    }

    readProduct() {
        this.props.dispatch(readProduct())
    }

    searchProduct = (event) => {
        this.props.dispatch(searchProduct(event.target.value))
    }

    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/login');
    }

    render() {
        const { products } = this.props;
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-9" id="col_posts">
                        <Navbar onChange={this.searchProduct.bind(this)} onClick={this.onLogout.bind(this)} />
                        <Card products={products} />
                    </div>
                    <div className="col-md-3" id="col_posts">
                        <Cart />
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default withRouter(connect(mapStateToProps)(Home));