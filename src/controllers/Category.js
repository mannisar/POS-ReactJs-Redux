import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { readCategory } from '../redux/actions/category';

import Navbar from "../components/Navbar";
import Item from '../components/modal/category/Item';
import Add from '../components/modal/category/Add';
import Edit from '../components/modal/category/Edit'
import Delete from '../components/modal/category/Delete'

class Category extends Component {
    state = {
        showAdd: false,
        showEdit: false,
        showDelete: false,
        selectCategoryEdit: null,
        selectCategoryDelete: null
    }

    componentDidMount() {
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        } else {
            this.readCategory()
        }
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

    onShowEdit = event => {
        this.setState({
            showEdit: true
        })
    }

    onCloseEdit = () => {
        this.setState({
            showEdit: false
        })
    }

    onSelectCategoryEdit = category => {
        this.setState({
            selectCategoryEdit: category,
            showEdit: true
        })
    }

    onShowDelete = event => {
        this.setState({
            showDelete: true
        })
    }

    onCloseDelete = () => {
        this.setState({
            showDelete: false
        })
    }

    onSelectCategoryDelete = category => {
        this.setState({
            selectCategoryDelete: category,
            showDelete: true
        })
    }

    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/login');
    }

    render() {
        const { categorys } = this.props;
        const listcategorys = categorys.map((category, index) => <Item key={index} category={category} onSelectCategoryEdit={this.onSelectCategoryEdit} onSelectCategoryDelete={this.onSelectCategoryDelete} />)
        return (
            <Fragment>
                <Navbar onClick={this.onLogout.bind(this)} />
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
                                    <th>ID: UNIQ</th>
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
                    <Edit show={this.state.showEdit} onHide={this.onCloseEdit} category={this.state.selectCategoryEdit} />
                    <Delete show={this.state.showDelete} onHide={this.onCloseDelete} category={this.state.selectCategoryDelete} />
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