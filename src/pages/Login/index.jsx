import React from 'react'
import Layout from '../../components/Layout'
import { useState } from 'react'


function Login() {
const [login,setLogin]=useState({
    Username :"",
    Password:""
})
const inputUserName = event => {
        setLogin({
            ...login,
            Username: event.target.value})
        // console.log(event.target.value)
}
const inputPassword = event => {
         setLogin({
            ...login,
            Password: event.target.value})
}
const submit = e =>{
  e.preventDefault();
  console.log(login)
}
  return (
    <Layout productsInCart={[]}>
      <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Login</h1>
                  <ul className="breadcrumb-menu">
                    <li><a href="index.html">home</a></li>
                    <li><span>Login</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Login From Here</h3>
                  <form onSubmit={submit}>
                    <label htmlFor="name">Email Address <span>**</span></label>
                    <input id="name" type="text" placeholder="Enter Username or Email address..." onChange={inputUserName}/>
                    <label htmlFor="pass">Password <span>**</span></label>
                    <input id="pass" type="password" placeholder="Enter password..." onChange={inputPassword} />
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                      </span>
                      <span className="forgot-login f-right">
                        <a href="#">Lost your password?</a>
                      </span>
                    </div>
                    <button className="btn theme-btn-2 w-100">Login Now</button>
                    <div className="or-divide"><span>or</span></div>
                    <button className="btn theme-btn w-100">Register Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </Layout>
  )
}

export default Login