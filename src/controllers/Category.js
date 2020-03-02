import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { readCategory } from '../redux/actions/category';

import Item from '../components/modal/category/Item';
import Add from '../components/modal/category/Add';

class Category extends Component {
    state = {
        showAdd: false,
        showEdit: false,
        showDelete: false,
        selectCategoryEdit: null,
        selectCategoryDelete: null
    }

    componentDidMount() {
        this.readCategory()
    }

    readCategory() {
        this.props.dispatch(readCategory())
    }

    onShowAdd = event => {
        this.setState({
            showAdd: true
        })
    }

    onCloseAdd = () => {
        this.setState({
            showAdd: false
        })
    }

    render() {
        const { categorys } = this.props;
        const listcategorys = categorys.map((category, index) => <Item key={index} category={category} />)
        return (
            <Fragment>
                <Container>
                    <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Col sm={10}>
                            <h4>CATEGORY</h4>
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" size="sm" onClick={this.onShowAdd}>ADD CATEGORY</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listcategorys}
                            </tbody>
                        </Table>
                    </Row>
                    <Add show={this.state.showAdd} onHide={this.onCloseAdd} />
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categorys: state.categorys.categorys
    }
}

export default withRouter(connect(mapStateToProps)(Category));