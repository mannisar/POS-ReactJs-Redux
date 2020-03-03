import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';

import { connect } from 'react-redux'
// import ItemCart from './CartItem';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carts: [],
            total: null,
            show: false
        };
    }

    componentWillReceiveProps({ carts }) {

        const total = this.state.total + carts.price;
        carts.qty = 1;
        this.state.carts.push(carts);

        this.setState({
            carts: this.state.carts,
            total: total
        })

        console.log('will receive props')
    }

    onAddQty = (carts) => {
        carts.qty = carts.qty + 1;
        const total = this.state.total + carts.price

        this.setState(nextState => ({
            carts: nextState.carts,
            total: total
        }))
    }

    onReduceQty = (carts) => {
        if (carts.qty > 1) {
            carts.qty = carts.qty - 1;
            const total = this.state.total - carts.price;

            this.setState(nextState => ({
                carts: nextState.carts,
                total: total
            }))
        }
    }

    onDeleteItem = (carts) => {
        const filterCartArray = this.state.carts.filter(item => item !== carts);
        const totalItem = carts.price * carts.qty;
        const total = this.state.total - totalItem;

        this.setState({
            carts: filterCartArray,
            total: total
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }


    render() {
        const { carts } = this.props;
        console.log('render');
        // console.log(carts);
        // const itemCart = items.map((items, index) => {
        //     return (
        //         <ItemCart cart={items} key={index} addQty={this.onAddQty} reduceQty={this.onReduceQty} deleteItem={this.onDeleteItem} />
        //     )
        // });
        // const itemCheckout = items.map((cart, index) => {
        //     return (
        //         <Row key={index}>
        //             <Col>{cart.name_product} {cart.stock} x</Col>
        //             <Col>Rp. {cart.stock * cart.price}</Col>
        //         </Row>
        //     );
        // })

        return (
            <Fragment>
                <nav
                    className="navbar navbar-light bg-white"
                    style={{ paddingLeft: "9rem" }}
                >
                    <span className="navbar-text">
                        Cart:
                    {/* <span className={this.getBadgeClasses()}>{this.formatCart()}</span> */}
                    </span>
                </nav>
                <div>
                    {carts.length ?
                        <div>
                            {/* <div style={{ width: '100%', height: "620px" }}> */}

                            <div className="row">
                                {carts.map((cart, index) => (
                                    <Fragment>
                                        <div className="col-md-4" id="col_posts" key={index}>
                                            <img src={cart.image} style={{ width: 80, height: 80 }} />
                                        </div>
                                        <div className="col-md-4" id="col_posts">
                                            <p>{cart.name_product}</p>
                                            <div className="col-sm-4" id="col_posts">
                                                <button className="btn btn-primary" onClick={this.onReduceQty}>-</button>
                                            </div>
                                            <div className="col-sm-2" id="col_posts" style={{ margin: 6 }}>{cart.qty}</div>
                                            <div className="col-sm-4" id="col_posts">
                                                <button className="btn btn-primary" onClick={this.onAddQty}>+</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4" id="col_posts">
                                            <p> Rp. {cart.price}</p>
                                            <button className="btn btn-primary" style={{ marginTop: 30 }} onClick={this.onDeleteItem}>Remove</button>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                            <Row style={{ fontWeight: "bold" }}>
                                <Col sm={6} style={{ fontSize: "25px" }}>Total: </Col>
                                <Col sm={6} style={{ fontSize: "25px" }}>Rp. {this.state.total}</Col>
                            </Row>
                            <p style={{ marginTop: "10px", marginBottom: "10px" }}>* Belum Termasuk ppn</p>
                            <Row className="justify-content-md-center" style={{ marginBottom: "10px" }}>
                                <Col sm={12}>
                                    <Button size="sm" variant="info" style={{ width: "100%" }} onClick={this.handleShow} >Checkout</Button>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col sm={12}>
                                    <Button size="sm" variant="info" style={{ width: "100%" }} >Cancel</Button>
                                </Col>
                            </Row>

                            <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                                <Modal.Body>
                                    <Row>
                                        <Col style={{ fontSize: "17px" }}>Checkout</Col>
                                        <Col style={{ fontSize: "17px" }}>Receipt no: #0102314321213</Col>
                                    </Row>
                                    <p style={{ marginBottom: "30px" }}>Cashier: Pevita Pearce</p>
                                    {/* {itemCheckout} */}
                                    <p>Total: Rp. {this.state.total}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                                    <Button variant="primary" onClick={this.handleClose}>Save Changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        : null}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        carts: state.carts.carts
        //cart: state.items
    }
}

export default connect(mapStateToProps)(Cart);