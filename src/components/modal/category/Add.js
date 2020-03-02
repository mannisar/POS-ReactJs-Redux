import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createCategory } from '../../../redux/actions/category'

class Add extends Component {
    state = {
        name_category: "",
    }

    onChangeValue = event => {
        //console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createCategory = async (event) => {
        event.preventDefault()
        await this.props.dispatch(createCategory(this.state))
        await this.props.onHide()
    }

    render() {
        const { show, onHide } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.createCategory}>
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name_category" onChange={this.onChangeValue} />
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