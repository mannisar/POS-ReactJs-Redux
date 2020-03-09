// import React, { Component } from 'react';
// import { connect } from "react-redux"
// import { paginateProduct } from '../redux/actions/product'

// class Pagination extends Component {

// paginateProduct = (event) => {
// console.log(event.target.id)
//     this.props.dispatch(paginateProduct(event.target.id))
// }

//     componentDidMount() {
//         this.props.dispatch(readProduct())
//     }

//     render() {
//         const { paginates } = this.props
//         return (
{/* <div className="row">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {paginates.map((pagination) => (
                    <li className="page-item" key={pagination}><a className="page-link" onClick={this.paginateProduct} id={pagination}>{pagination}</a></li>
                ))}
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            </div> */}
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
    // paginates: state.products.paginates
//     }
// }

// export default connect(mapStateToProps)(Pagination);