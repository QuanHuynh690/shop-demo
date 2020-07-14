import React, { useState } from "react";
import {Link} from 'react-router-dom'
/*
1. lấy đc sự kiện click của icon add to cart
2. tạo 1 array cho những sự kiện trong cart
3. đưa sp mà các bạn đang click ra ngoài vào productsInCart
4. Bởi vì productsInCart sẽ thay đổi nên mình tạo productsInCart bằng cách sử dụng useState
5. Truyền productsInCart vào Cart để lấy danh sách sản phẩm và hiển thị trong Cart
*/ 
function ProductItem(props) {
  // console.log(props.image)
  
const onAddToCart = () => {
  console.log(props)
  props.clickToAdd(props)
}

  
  
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="#">
            <img src={props.image} alt="" />
          </a>
          <div className="product-action text-center">
            <a title="Shopping Cart" onClick={onAddToCart}>
              <i className="fas fa-shopping-cart" />
            </a>
            <Link to={`/productdetail/${props.id}`} title={props.title}>
              <i className="fas fa-search" />
            </Link>
          </div>
        </div>
        <div className="product-content pr-0  ">
          <div className="pro-cat mb-10">
            <a href="#">{props.type}</a>
          </div>
          <h4>
            <a target="_bank" href={`https://www.google.com/search?sxsrf=ALeKk00gs7jBCjI2HQ48MKqb1J96k19jjA%3A1590331072432&source=hp&ei=wIbKXpCbGI790gTBy7nIDA&q=${props.name}&oq=${props.name}`}>{props.name}</a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>{props.price}</span>
              <span className="old-price">{props.discountPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  }
export default ProductItem;