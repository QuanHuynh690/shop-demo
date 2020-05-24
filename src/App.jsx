import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import ProductItem from "./components/ProductItem";
import SideBar from "./components/SideBar";
import Login from "./components/Login"

const products = [
  {
    type: "Furniture",
    name: "Iphone 999",
    imageURL:
      "https://media3.scdn.vn/img4/2020/03_16/FBeRVqPng49HKEg1qnqs_simg_b5529c_250x250_maxb.jpg",
    price: "120.000 VND",
    discountPrice: "100.000 VND",
  },
  {
    type: "Tablet",
    name: "Samsung Pro 123456",
    imageURL:
      "https://media3.scdn.vn/img4/2020/03_04/O6MAvAed87qmmdqsFaYw_simg_b5529c_250x250_maxb.jpg",
    price: "720.000 VND",
    discountPrice: "520.000 VND",
  },
  {
    type: "Baby",
    name: "Bobby",
    imageURL:
      "https://media3.scdn.vn/img4/2020/03_18/fx0jRvqJ7wVYmcj9swIb_simg_b5529c_250x250_maxb.jpg",
    price: "110.000 VND",
    discountPrice: "78.000 VND",
  },
];

function App() {
  return (
    <Layout>
      <Content>
      <ProductItem 
        imageURL={products[0].imageURL}
        type={products[0].type}
        name={products[0].name}
        price={products[0].price}
        discountPrice={products[0].discountPrice}
        />
        <ProductItem 
        imageURL={products[1].imageURL}
        type={products[1].type}
        name={products[1].name}
        price={products[1].price}
        discountPrice={products[1].discountPrice}
        />
        <ProductItem 
        imageURL={products[2].imageURL}
        type={products[2].type}
        name={products[2].name}
        price={products[2].price}
        discountPrice={products[2].discountPrice}
        />
            {/* {products.map(e =>(
                <div>
                    imageURL={e.imageURL}
                    type={e.type}
                    name={e.name}
                    price={e.price}
                    discountPrice={e.discountPrice}
                </div>))} */}
        {/* </ProductItem> */}
        {products.map(e=>
            <ProductItem
            imageURL={e.imageURL}
            type={e.type}
            name={e.name}
            price={e.price}
            discountPrice={e.discountPrice}
            />
            )}
      </Content>
      
      <SideBar />
      <Login/>
    </Layout>
  );
}

export default App;