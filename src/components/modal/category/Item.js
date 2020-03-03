import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap'

const Item = ({ category, onSelectCategoryEdit, onSelectCategoryDelete }) => {

    const onClickEdit = (event) => {
        event.preventDefault();
        onSelectCategoryEdit(category);
    }

    const onClickDelete = (event) => {
        event.preventDefault();
        onSelectCategoryDelete(category);
    }

    return (
        <Fragment>
            <tr>
                <td>{category.id}</td>
                <td>{category.name_category}</td>
                <td><Button variant="warning" size="sm" onClick={onClickEdit}>Edit</Button> - <Button variant="danger" size="sm" onClick={onClickDelete}>Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default Item;