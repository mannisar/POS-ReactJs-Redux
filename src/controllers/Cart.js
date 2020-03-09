import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

import { connect } from 'react-redux'
import { addQty, reduceQty, deleteCart, cancleCart } from '../redux/actions/cart'
import { orderCheckout } from '../redux/actions/order'

import Item from '../components/modal/cart/Item'
import uuid from 'uniqid'

class Cart extends Component {
    state = {
        show: false,
        count: 0,
        id: parseInt(localStorage.getItem('user-id')),
        name: localStorage.getItem('name'),
        id_order: `${uuid()}`
    };

    onAddQty = (id) => {
        this.props.dispatch(addQty(id))
    }

    onReduceQty = (id) => {
        this.props.dispatch(reduceQty(id))
    }

    onDeleteCart = (id) => {
        this.props.dispatch(deleteCart(id))
    }

    onCancleCart = (data) => {
        this.props.dispatch(cancleCart(data))
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = (event) => {
        this.setState({
            show: false
        })
    }

    pushClose = (event) => {
        event.preventDefault()
        this.props.history.push('/history')
    }

    orderCheckout = (event) => {
        event.preventDefault()
        this.setState({
            show: true
        })
        const data = {
            id_user: this.state.id,
            total: this.props.total,
            id_order: this.state.id_order,
            product: this.props.carts
        }
        this.props.dispatch(orderCheckout(data))
    }

    render() {
        const { carts, total } = this.props;
        const listCart = carts.map((product, index) => {
            return (
                <Item key={index} product={product} AddQty={this.onAddQty} ReduceQty={this.onReduceQty} DeleteCart={this.onDeleteCart} />
            )
        })
        const itemCheckout = carts.map((product, index) => {
            return (
                <Row style={{ marginBottom: "15px", borderLeft: "dashed" }} key={index}>
                    <Col>{product.name_product} {product.qty}x <span style={{ fontWeight: "bolder" }}>{product.price}</span></Col>
                </Row>
            );
        })
        const CartMenu = () => {
            if (carts.length <= 0) {
                return (
                    <Fragment>
                        <img src="/Cart.png" alt="" style={{ width: "100%", maxHeight: "100%" }} />
                    </Fragment>
                )
            } else {
                return (
                    <Fragment>
                        <div className="rowCart scrollCart">
                            <div className="col-3 mr-auto" style={{ margin: 0, padding: 0, flex: "none", maxWidth: "none" }}>
                                {listCart}
                            </div>
                            <div className="col-9" style={{ margin: 0, padding: 0, flex: "none", maxWidth: "none" }}>
                                <Form onSubmit={this.orderCheckout}>
                                    <Row style={{ fontWeight: "bold", marginTop: "10px" }}>
                                        <Col sm={6} style={{ fontSize: 20 }}>Total: </Col>
                                        <Col sm={6} style={{ fontSize: 20 }}>Rp. {total}</Col>
                                    </Row>
                                    <p style={{ marginTop: "10px", marginBottom: "10px" }}>* Belum Termasuk ppn</p>
                                    <Row className="justify-content-md-center">
                                        <Col sm={12}>
                                            <button className="btn btn" style={{ width: "100%" }} type="submit">Checkout</button>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col sm={12}>
                                            <button className="btn btn" style={{ width: "100%" }} onClick={() => (this.onCancleCart(carts))} type="button">Cancel</button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                                <Modal.Body>
                                    <Row>
                                        <Col style={{ fontSize: "17px", marginBottom: "15px" }}>Checkout</Col>
                                        <Col style={{ fontSize: "17px" }}>Receipt no: {this.state.id_order}</Col>
                                    </Row>
                                    {itemCheckout}
                                    <Row>
                                        <p>
                                            <span style={{ fontSize: "17px", marginRight: "100px" }}>Cashier: {this.state.name}</span>
                                            Total: Rp.
                                            <span style={{ fontWeight: "bolder" }}>{total}</span>
                                        </p>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer style={{ display: "block" }}>
                                    <Button variant="primary" onClick={this.handleClose}>Close</Button>
                                    <Button style={{ float: "right" }} variant="primary" type="submit" onClick={this.pushClose}>History</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Fragment >
                )
            }
        }
        return (
            <Fragment>
                <nav className="navbar navbar-light bg-white" style={{ paddingLeft: "9rem" }}>
                    <span className="navbar-text">
                        Cart: <span className={this.getBadgeClasses()}>{carts.length}</span>
                    </span>
                </nav>
                <CartMenu />
            </Fragment >
        )
    }
    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.state.count === this.props.carts.length ? "danger" : "info";
        return classes;
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts.carts,
        orders: state.carts.orders,
        total: state.carts.total
    }
}

export default withRouter(connect(mapStateToProps)(Cart));