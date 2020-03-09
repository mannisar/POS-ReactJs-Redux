import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { updateProduct } from '../../../redux/actions/product'

class Edit extends Component {
    state = {
        productId: "",
        name_product: "",
        description: "",
        image: "", // kosong
        price: "",
        stock: "",
        categoryId: "" || "DEFAULT"
    }

    componentWillReceiveProps = ({ product }) => {
        this.setState({
            productId: product.id,
            name_product: product.name_product,
            description: product.description,
            //image: product.image,
            price: product.price,
            stock: product.stock,
            categoryId: product.id_category
        })
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

    updateProduct = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("name_product", this.state.name_product);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        data.append("price", this.state.price);
        data.append("stock", this.state.stock);
        data.append("id_category", this.state.categoryId);

        if (this.state.image === "") {
            data.delete("image")
            const productId = this.state.productId
            await this.props.dispatch(updateProduct(productId, data))
            await this.props.onHide()
        } else {
            const productId = this.state.productId
            await this.props.dispatch(updateProduct(productId, data))
            await this.props.onHide()
        }
    }

    render() {
        const { show, onHide, categorys } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>EDIT PRODUCT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.updateProduct} encType="multipart/form-data">
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" name="name_product" onChange={this.onChangeValue} value={this.state.name_product} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>DESCRIPTION</Form.Label>
                            <Form.Control type="text" name="description" onChange={this.onChangeValue} value={this.state.description} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>PRICE</Form.Label>
                            <Form.Control type="text" name="price" onChange={this.onChangeValue} value={this.state.price} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>STOCK</Form.Label>
                            <Form.Control type="text" name="stock" onChange={this.onChangeValue} value={this.state.stock} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>CATEGORY</Form.Label>
                            <Form.Control type="text" name="categoryId" onChange={this.onChangeValue} defaultValue={this.state.categoryId} as="select">
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
        )
    }
}

export default connect()(Edit);