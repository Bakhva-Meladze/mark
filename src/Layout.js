import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

class Layout extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello from Class Layout</h1>

                <Navigation />

                <main>
                    <Outlet />
                </main>
            </div>
        );
    }


}
export default Layout