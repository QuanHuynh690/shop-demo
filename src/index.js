import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/Main';
import Register from './pages/Register'
import Login from './pages/Login'
import * as serviceWorker from './serviceWorker';
import ProductDetail from './pages/ProductDetail'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import dataProduct from './product.json';
export const ThemeContext = React.createContext('light');
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeContext.Provider value ='darkgrey'>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>

          <Route exact path='/(login|dang-nhap)'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/productdetail/:id'>
            <ProductDetail />
          </Route>

          {/* <Route 
            exact 
              path='/productdetail/:id' 
              render={(props)=>{
                console.log("props.match",props.match.params.id)
                const product = dataProduct.data.find(elm=> elm.id == props.match.params.id)
                console.log('product',product)
                if (!product){
                  return <h1>404 KO TIM THAY SAN PHAM</h1>
                }
                return <ProductDetail name={product.name} price={product.price} priceMax={product.priceMax}/>}
            } 
          /> */}

          <Route path='*'>
            <div>404</div>
          </Route>
        </Switch>
        
      </ThemeContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();