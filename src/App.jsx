import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import ProductItem from "./components/ProductItem";
import SideBar from "./components/SideBar";
import Login from "./components/Login"
import Cart from "./components/Cart"
import dataProduct from "./product.json"


function App() {
  return (
    <Layout>
      <Content> 
        {dataProduct.data.map(e=>
            <ProductItem {...e} imageURL={e.image}/>)}
        {/* {products.map(e=>
            <ProductItem
            imageURL={e.imageURL}
            type={e.type}
            name={e.name}
            price={e.price}
            discountPrice={e.discountPrice}
            />
            )} */}
      </Content>
      
      <SideBar />
      <Login/>
    </Layout>
  );
}

export default App;