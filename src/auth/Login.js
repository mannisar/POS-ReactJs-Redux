import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.history.push('/');
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:3004/api/user/login", this.state)
            .then(res => {
                localStorage.setItem('token', res.data.result.token);
                localStorage.setItem('user-id', res.data.result.id);
                localStorage.setItem('role', res.data.result.role);
                localStorage.setItem('name', res.data.result.name);
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="container">
                <h4 style={{ marginTop: 50, marginLeft: 520 }}>Login</h4>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter email" name="email" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{
                                backgroundColor: '#f0bbcb!important',
                                color: "white",
                                width: "100%",
                            }}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;