import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
    render() {
        return (
            <div className="custom-pagination align-item-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <Link className="page-link" to="/shop-left" aria-label="Previous"> <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="/shop-left">1</Link>
                        </li>
                        <li className="page-item active"><Link className="page-link" to="/shop-left">2</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="/shop-left">3</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="/shop-left" aria-label="Next"> <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;