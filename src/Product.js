import React from "react";
import {Link, NavLink} from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { withRouter } from 'react-router-dom';
import UseParams from "./UseParams";
import CartContext from "./Context";


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            products:[
                {id: 'p1', title: 'Product 1'},
                {id: 'p2', title: 'Product 2'},
                {id: 'p3', title: 'Product 3'},
                {id: 'p4', title: 'Product 4'}
            ]
        }
    }

    render() {
        return (
                <CartContext.Consumer>
                    {({data}) => (
                        <div>
                            <h1>Hello from Class Product</h1>
                            {this.state.products.map((prod)=>(
                                <li key ={prod.id}>
{/*
                                    <Link to={prod.id}>{prod.title}</Link>
*/}
                                    <NavLink to={prod.id} onClick={()=>data(prod.id)}>{prod.title}</NavLink>
                                </li>
                                ))}
                        </div>



                    )}
                </CartContext.Consumer>

        );
    }


}

export default Product;