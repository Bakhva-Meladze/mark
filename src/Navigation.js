import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/product">Products</Link>
                        </li>
                        <li>{/* Add more navigation items here */}</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;