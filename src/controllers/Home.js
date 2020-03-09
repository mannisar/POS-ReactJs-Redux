import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Card from "../components/Card";
//import Pagination from "../components/Pagination"
import Navbar from "../components/Navbar";
import Cart from "./Cart";

import { connect } from "react-redux"

class Home extends Component {

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
                        {/* <Pagination /> */}
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