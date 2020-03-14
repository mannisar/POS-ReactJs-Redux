import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { readUser } from '../redux/actions/user';

import Navbar from "../components/Navbar";
import Item from '../components/modal/user/Item';
import Add from '../components/modal/user/Add';
import Edit from '../components/modal/user/Edit'
import Delete from '../components/modal/user/Delete'

class User extends Component {
    state = {
        hidden: true,
        showAdd: false,
        showEdit: false,
        showDelete: false,
        selectUserEdit: [],
        selectUserDelete: []
    }

    componentDidMount() {
        this.props.dispatch(readUser())
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

    onSelectUserEdit = user => {
        this.setState({
            selectUserEdit: user,
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

    onSelectUserDelete = user => {
        this.setState({
            selectUserDelete: user,
            showDelete: true
        })
    }

    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.props.history.push('/login');
    }

    render() {
        const { users } = this.props;
        const listusers = users.map((user, index) => <Item key={index} user={user} onSelectUserEdit={this.onSelectUserEdit} onSelectUserDelete={this.onSelectUserDelete} />)
        return (
            <Fragment>
                <Navbar onClick={this.onLogout.bind(this)} hidden={this.state.hidden} />
                <Container>
                    <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Col sm={10}>
                            <h4>USER</h4>
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" size="sm" onClick={this.onShowAdd}>ADD USER</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ROLE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listusers}
                            </tbody>
                        </Table>
                    </Row>
                    <Add show={this.state.showAdd} onHide={this.onCloseAdd} />
                    <Edit show={this.state.showEdit} onHide={this.onCloseEdit} user={this.state.selectUserEdit} />
                    <Delete show={this.state.showDelete} onHide={this.onCloseDelete} user={this.state.selectUserDelete} />
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default withRouter(connect(mapStateToProps)(User));