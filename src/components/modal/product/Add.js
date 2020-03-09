import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createProduct } from '../../../redux/actions/product'

class Add extends Component {
    state = {
        name_product: "",
        description: "",
        image: "",
        price: "",
        stock: "",
        categoryId: "" || "DEFAULT"
    }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeImage = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    }

    createProduct = async (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("name_product", this.state.name_product);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        data.append("price", this.state.price);
        data.append("stock", this.state.stock);
        data.append("id_category", this.state.categoryId);


        await this.props.dispatch(createProduct(data));
        await this.props.onHide();
        //this.props.history.push('/product')
    }

    render() {
        const { show, onHide, categorys } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD PRODUCT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.createProduct} encType="multipart/form-data">
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name_product" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>DESCRIPTION</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" name="description" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>PRICE</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" name="price" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>STOCK</Form.Label>
                            <Form.Control type="text" placeholder="Enter Stock" name="stock" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>CATEGORY</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category" defaultValue={"DEFAULT"} name="categoryId" onChange={this.onChangeValue} as="select">
                                <option value="DEFAULT" disabled>Choose..</option>
                                {categorys.map((category) =>
                                    <option key={category.id} value={category.id}>
                                        {category.name_category}
                                    </option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>IMAGE</Form.Label>
                            <Form.Control type="file" name="image" onChange={this.onChangeImage} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SUBMIT
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default connect()(Add);