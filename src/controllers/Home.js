import React, { Component, Fragment } from 'react';
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Cart from "./Cart";

class Home extends Component {
    componentDidMount() {
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        }
    }

    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/login');
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-9" id="col_posts">
                        <Navbar />
                        <Card />
                    </div>
                    <div className="col-md-3" id="col_posts">
                        <Cart />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;