import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { readProduct } from '../redux/actions/product';
import { readCategory } from '../redux/actions/category'

import Item from '../components/modal/product/Item';
import Add from '../components/modal/product/Add';
import Edit from '../components/modal/product/Edit';
import Delete from '../components/modal/product/Delete';
import Navbar from "../components/Navbar";

class Product extends Component {
  state = {
    category: "",
    product: "",
    by: "",
    hidden: true,
    showAdd: false,
    showEdit: false,
    showDelete: false,
    selectProductEdit: [],
    selectProductDelete: []
  }

  componentDidMount() {
    this.props.dispatch(readProduct(this.state.category, this.state.product, this.state.by))
    this.props.dispatch(readCategory())
  }

  onShowAdd = (event) => {
    this.setState({
      showAdd: true
    })
  }

  onCloseAdd = () => {
    this.setState({
      showAdd: false
    })
  }

  onShowEdit = (event) => {
    this.setState({
      showEdit: true
    })
  }

  onCloseEdit = () => {
    this.setState({
      showEdit: false
    })
  }

  onSelectProductEdit = (product) => {
    this.setState({
      selectProductEdit: product,
      showEdit: true
    })
  }

  onShowDelete = event => {
    this.setState({
      showDelete: true
    })
  }

  onCloseDelete = () => {
    this.setState({
      showDelete: false
    })
  }

  onSelectProductDelete = (product) => {
    this.setState({
      selectProductDelete: product,
      showDelete: true
    })
  }

  onLogout() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.props.history.push('/login');
  }

  render() {
    const { products, categorys } = this.props;
    const listproducts = products.map((product, index) => <Item key={index} product={product} onSelectProductEdit={this.onSelectProductEdit} onSelectProductDelete={this.onSelectProductDelete} />);
    return (
      <Fragment>
        <Navbar onClick={this.onLogout.bind(this)} hidden={this.state.hidden} />
        <Container>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col sm={10}>
              <h4>PRODUCT</h4>
            </Col>
            <Col sm={2}>
              <Button variant="primary" size="sm" onClick={this.onShowAdd}>ADD PRODUCT</Button>
            </Col>
          </Row>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>DESCRIPTION</th>
                  <th>IMAGE</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>CATEGORY</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {listproducts}
              </tbody>
            </Table>
          </Row>
          <Add show={this.state.showAdd} onHide={this.onCloseAdd} categorys={categorys} />
          <Edit show={this.state.showEdit} onHide={this.onCloseEdit} product={this.state.selectProductEdit} categorys={categorys} />
          <Delete show={this.state.showDelete} onHide={this.onCloseDelete} product={this.state.selectProductDelete} />
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    products: state.products.products,
    categorys: state.categorys.categorys
  }
}

export default withRouter(connect(mapStateToProps)(Product));