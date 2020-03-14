import React, { Component } from 'react';

import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom";

import { readProduct } from '../redux/actions/product'
import querystring from 'query-string'

class Pagination extends Component {
    state = {
        paginateId: ""
    }

    onPaginate = (event) => {
        this.props.history.push(`/?paginateId=${event.target.id}`)
        this.props.dispatch(readProduct(event.target.id))
    }

    componentDidMount() {
        var id = querystring.parse(this.props.location.search);
        if (id.paginateId !== undefined) {
            const result = id.paginateId
            this.setState({
                paginateId: result
            })
        }
    }

    render() {
        const { paginates } = this.props
        return (
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination" style={{ marginLeft: "355px", marginTop: "10px", backgroundColor: "rgb(205, 111, 130)" }}>
                        <li className="page-item"><Link style={{ color: "white" }} className="page-link" to="#">Previous</Link></li>
                        {paginates.map((pagination) => (
                            <li className="page-item" key={pagination}>
                                <span className="page-link" style={{ cursor: "grab", color: "white" }} onClick={this.onPaginate} id={pagination}>{pagination}</span>
                            </li>
                        ))}
                        <li className="page-item"><Link style={{ color: "white" }} className="page-link" to="#">Next</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // products: state.products.products,
        paginates: state.products.paginates
    }
}

export default withRouter(connect(mapStateToProps)(Pagination))