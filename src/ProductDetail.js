import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartContext from "./Context";
// eslint-disable-next-line react-hooks/rules-of-hooks
class ProductDetail extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
      }
  }
    render() {
        return(
            <CartContext.Consumer>
                {({data,idOfProduct}) => (
                    <div>
                        <p>{idOfProduct}</p>
                        <p><Link to="..">Back</Link></p>

                    </div>
                )}
            </CartContext.Consumer>


        )
    }
}
export default ProductDetail;