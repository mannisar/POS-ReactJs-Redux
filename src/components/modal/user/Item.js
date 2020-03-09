import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap'

const Item = ({ user, onSelectUserEdit, onSelectUserDelete }) => {

    const onClickEdit = (event) => {
        event.preventDefault();
        onSelectUserEdit(user);
    }

    const onClickDelete = (event) => {
        event.preventDefault();
        onSelectUserDelete(user);
    }

    return (
        <Fragment>
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><Button variant="warning" size="sm" onClick={onClickEdit}>Edit</Button> - <Button variant="danger" size="sm" onClick={onClickDelete}>Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default Item;