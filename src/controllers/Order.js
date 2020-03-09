import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { readOrder } from '../redux/actions/order';

import Navbar from "../components/Navbar";

class Order extends Component {
    state = {
        filter: true
    }

    componentDidMount() {
        this.props.dispatch(readOrder())
    }

    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.props.history.push('/login');
    }

    render() {
        const { orders } = this.props;
        return (
            <Fragment>
                <Navbar onClick={this.onLogout.bind(this)} show={this.state.filter} />
                <Container>
                    <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Col sm={10}>
                            <h4>HISTORY</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID: INVOKE</th>
                                    <th>USER</th>
                                    <th>TOTAL</th>
                                    <th>DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) =>
                                    <tr key={index}>
                                        <td>{order.id}</td>
                                        <td>{order.id_user}</td>
                                        <td>{order.total}</td>
                                        <td>{order.date}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders.orders
    }
}

export default withRouter(connect(mapStateToProps)(Order));