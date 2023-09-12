import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Outlet,
    BrowserRouter,
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';

import Layout from "./Layout";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Provider from "./Provider";




class App extends React.Component {

  render() {
    return (
        <div className="App">
            <Provider>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />}/>
                            <Route path="product" element={<Product />} />
                            <Route path="product/:Id" element={<ProductDetail />} />
                        </Route>
                    </Routes>
            </BrowserRouter>
            </Provider>

        </div>
    );
  }


}

export default App;
