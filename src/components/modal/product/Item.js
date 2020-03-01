import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const Item = ({ product, onSelectProductEdit, onSelectProductDelete }) => {

    const onClickEdit = (event) => {
        event.preventDefault();
        onSelectProductEdit(product);
    }

    const onClickDelete = (event) => {
        event.preventDefault();
        onSelectProductDelete(product);
    }

    return (
        <Fragment>
            <tr>
                <td>{product.id}</td>
                <td>{product.name_product}</td>
                <td>{product.description}</td>
                <td>{product.image}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.name_category}</td>
                <td><Button variant="warning" size="sm" onClick={onClickEdit}>Edit</Button> - <Button variant="danger" size="sm" onClick={onClickDelete}>Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default Item;