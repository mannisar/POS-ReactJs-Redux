import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { updateUser } from '../../../redux/actions/user'

class Edit extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        role: ""
    }

    componentWillReceiveProps({ user }) {
        this.onSetValue(user);
    }

    onSetValue = (user) => {
        this.setState({
            name: user.name,
            email: user.email,
            //password: user.password,
            role: user.role
        })
    }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateUser = async (event) => {
        event.preventDefault()
        const userId = this.props.user.id
        await this.props.dispatch(updateUser(userId, this.state))
        await this.props.onHide()
    }

    render() {
        const { show, onHide } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>EDIT USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.updateUser}>
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.onChangeValue} value={this.state.name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" name="email" onChange={this.onChangeValue} value={this.state.email} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ROLE</Form.Label>
                            <Form.Control type="text" name="role" onChange={this.onChangeValue} defaultValue={this.state.role} as="select">
                                <option value="DEFAULT" disabled>Choose..</option>
                                <option value="admin">Admin</option>
                                <option value="cashier">Cashier</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name="password" onChange={this.onChangeValue} value={this.state.password} />
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