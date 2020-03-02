import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap'

const Item = ({ category }) => {
    return (
        <Fragment>
            <tr>
                <td>{category.id}</td>
                <td>{category.name_category}</td>
                <td><Button variant="warning" size="sm">Edit</Button> - <Button variant="danger" size="sm">Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default Item;