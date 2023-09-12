import React from "react";
import CartContext from "./Context";


class Provider extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            idOfProduct: ''
        }


    }
    data =(e) => {
        console.log(e);
        this.setState({
            idOfProduct:e
        })

    }
    render() {
        const {data}=this;
        const {idOfProduct} =this.state;
        return(
            <CartContext.Provider value={{data ,idOfProduct}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default Provider