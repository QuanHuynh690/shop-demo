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
  const [products, setProducts] = useState(dataProduct.data)
  const [productsInCart, setProductsInCart] = useState([])
  
  const onSelectProduct = (propsOfProductItem) => {
    console.log(propsOfProductItem)
    setProductsInCart([...productsInCart, propsOfProductItem])

    /* 
      productsInCart = []
      productsInCart.push(propsOfProductItem)
    */
  }
  const sortNameAZ =() => {
    console.log("sortAZ")
    const newProductSort = [...products].sort((a,b) => a.name.localeCompare(b.name))
    setProducts(newProductSort)
  }

  const sortNameZA =() => {
    console.log("sortAZ")
    const newProductSort = [...products].sort((a,b) => b.name.localeCompare(a.name))
    setProducts(newProductSort)
  }
  const [sortAZ, setSortAZ] = useState(dataProduct.data)
  const AZ = () => {
  let newProducts=[...sortAZ].sort(function (a, b) {
      return a.name.localeCompare(b.name)
      setSortAZ(newProducts)
    }
    )
  }
  
  return (
    <Layout productsInCart={productsInCart}>
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
               {sortAZ.map(e =>
                <ProductItem {...e} />)}
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