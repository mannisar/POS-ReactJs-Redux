import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { readProduct, searchProduct } from '../redux/actions/product';

import Add from '../components/modal/product/Add';
import Item from '../components/modal/product/Item'
import Edit from '../components/modal/product/Edit';
import Delete from '../components/modal/product/Delete'

class Product extends Component {
  state = {
    showAdd: false,
    showEdit: false,
    showDelete: false,
    selectProductEdit: null,
    selectProductDelete: null
  }

  componentDidMount() {
    this.readProduct();
  }

  readProduct() {
    this.props.dispatch(readProduct());
  }

  searchProduct = event => {
    this.props.dispatch(searchProduct(event.target.value));
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

  render() {
    const { products } = this.props;
    const listproducts = products.map((product, index) => <Item key={index} product={product} onSelectProductEdit={this.onSelectProductEdit} onSelectProductDelete={this.onSelectProductDelete} />);
    return (
      <Fragment>
        <Container>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col sm={10}>
              <h4>PRODUCT</h4>
            </Col>
            <Col sm={2}>
              <Button variant="primary" size="sm" onClick={this.onShowAdd}>ADD PRODUCT</Button>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col sm={12}>
              <Form>
                <Form.Group>
                  <Form.Control type="search" placeholder="Name.." onChange={this.searchProduct} />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID: UNIQ</th>
                  <th>NAME</th>
                  <th>DESCRIPTION</th>
                  <th>IMAGE: URL</th>
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
          <Add show={this.state.showAdd} onHide={this.onCloseAdd} />
          <Edit show={this.state.showEdit} onHide={this.onCloseEdit} product={this.state.selectProductEdit} />
          <Delete show={this.state.showDelete} onHide={this.onCloseDelete} product={this.state.selectProductDelete} />
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

export default withRouter(connect(mapStateToProps)(Product));