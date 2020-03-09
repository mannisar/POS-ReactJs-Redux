import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createUser } from '../../../redux/actions/user'

class Add extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        role: "",
        // salt: ""
    }

    onChangeValue = event => {
        //console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createUser = async (event) => {
        event.preventDefault()
        await this.props.dispatch(createUser(this.state))
        await this.props.onHide()
    }

    render() {
        const { show, onHide } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.createUser}>
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" name="email" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ROLE</Form.Label>
                            <Form.Control type="text" placeholder="Enter Role" name="role" onChange={this.onChangeValue} as="select">
                                <option value="DEFAULT" disabled>Choose..</option>
                                <option value="admin">Admin</option>
                                <option value="cashier">Cashier</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name="password" onChange={this.onChangeValue} />
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