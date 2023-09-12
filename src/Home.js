import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello from Class Home</h1>
                <Link to="/product">Products</Link>

            </div>
        );
    }


}

export default Home;