import React, { Component, Fragment } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux"

import Card from "../components/Card";
import Pagination from "../components/Pagination"
import Navbar from "../components/Navbar";
import Cart from "./Cart";

import { readProduct } from '../redux/actions/product'
import querystring from 'query-string'

class Home extends Component {
    state = {
        category: "",
        product: "",
        by: "",
        paginateId: "",
    }

    componentDidMount() {
        var id = querystring.parse(this.props.location.search);
        var value = querystring.parse(this.props.location.search);
        if (id.paginateId !== undefined) {
            let paginateId = id.paginateId
            this.props.dispatch(readProduct(paginateId))
        } else if (value.category !== undefined) {
            let category = value.category
            let product = this.state.product
            let by = this.state.by
            this.props.dispatch(readProduct(category, product, by))
        } else if (value.product !== undefined) {
            let category = this.state.category
            let product = value.product
            let by = this.state.by
            this.props.dispatch(readProduct(category, product, by))
        } else if (value.by !== undefined) {
            let category = this.state.category
            let product = this.state.product
            let by = value.by
            this.props.dispatch(readProduct(category, product, by))
        }
    }

    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.props.history.push('/login');
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-9" id="col_posts">
                        <Navbar onClick={this.onLogout.bind(this)} />
                        <Card />
                        <Pagination />
                    </div>
                    <div className="col-md-3" id="col_carts">
                        <Cart />
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categorys: state.categorys.categorys
    }
}

export default withRouter(connect(mapStateToProps)(Home));