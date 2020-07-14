import React, { useState,useContext } from "react";
import "./Main.css";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import ProductItem from "../../components/ProductItem";
import SideBar from "../../components/SideBar";
import dataProduct from '../../product.json';
import {ThemeContext} from '../..';

function Main() {
  const value = useContext(ThemeContext)
  const [propsOnClick,setPropsOnClick]= useState([])
 const getProductToCart=(elm)=>{
    let newPropsOnClick=[...propsOnClick,elm]
    setPropsOnClick(newPropsOnClick)
    console.log(propsOnClick)
 }
  const sortNameAZ =() => {
    console.log("sortAZ")
    const newProductSort = [...products].sort((a,b) => a.name.localeCompare(b.name))
    setProducts(newProductSort)
  }

  const [products, setProducts] = useState(dataProduct.data)
  const sortNameZA =() => {
    console.log("sortZA")
    const newProductSort = [...products].sort((a,b) => b.name.localeCompare(a.name))
    setProducts(newProductSort)
  }
  
  const AZ = () => {
  let newProducts=[...products].sort(function (a, b) {
      return a.name.localeCompare(b.name)
      setProducts(newProducts)
    }
    )
  }
  
  return (
    <Layout productsInCart={propsOnClick}>
      <main style={{backgroundColor: value}}>/*dấu ngoặc nhọn đầu tiên là của biến trong react, dấu thứ 2 là của object do dùng css inline */
      <section className="shop-area pt-150 pb-100">
          <div className="container">
            <div className="row">
            <Content>
              {/* {
                products.map(elm => {
                  return (
                    <ProductItem 
                    {...elm} imageURL={elm.image} 
                    onSelectProduct={onSelectProduct}
                    />
                  )
                })
              } */}
               {products.map(e =>
                <ProductItem {...e} clickToAdd={getProductToCart}/>)}
            </Content>
            <SideBar onSortAZ={AZ} />
            </div>
          </div>
        </section>
    </main>
      
    </Layout>
  );
}

export default Main;