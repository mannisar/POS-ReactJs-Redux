import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { updateCategory } from '../../../redux/actions/category'

class Edit extends Component {
    state = {
        name_category: ""
    }

    componentWillReceiveProps({ category }) {
        this.onSetValue(category);
    }

    onSetValue = (category) => {
        this.setState({
            name_category: category.name_category
        })
    }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateCategory = async (event) => {
        event.preventDefault()
        const categoryId = this.props.category.id
        await this.props.dispatch(updateCategory(categoryId, this.state))
        await this.props.onHide()
    }

    render() {
        const { show, onHide } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>EDIT CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.updateCategory}>
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name_category" onChange={this.onChangeValue} value={this.state.name_category} />
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



export default connect()(Edit);