import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { deleteUser } from '../../../redux/actions/user';

const Delete = (props) => {
    const { user, show, onHide, dispatch } = props;

    const onCancelHandle = (event) => {
        event.preventDefault();
        onHide();
    }

    const onDeleteHandle = async (event) => {
        event.preventDefault();
        await dispatch(deleteUser(user.id));
        onHide();
    }

    return (

        <Modal show={show} onHide={onHide} variant="lg">
            <Modal.Header>
                <p>Confirm Untuk Menghapus User {user ? user.name : ""} ?</p>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" size="sm" onClick={onCancelHandle} style={{ marginRight: "10px" }}>Cancel</Button>
                <Button variant="danger" size="sm" onClick={onDeleteHandle}>Delete</Button>
            </Modal.Body>
        </Modal>
    )
}

export default connect()(Delete);