import React from 'react';
import logo from './logo.svg';


function SaleButton(props){
    return (
        <p type="text"> Sale</p>
    )
}
function Image(props){
    return(
        <img src={props.imageURL}/>
    )
}   
function Price(props){
    return (
        <div>
        <b>130,000 </b>
        <span style={{color:'red'}}></span>
        </div>
    )
}
function App(props){
    return (
        <div className="App" id="12345" backgroundColor="233">
            <header className="App-header"> 
                <SaleButton name="Quan" fName="Huynh"/>
            </header>
            <Image imageURL="https://hirogaru-nihongo.jp/wp/wp-content/themes/hirogaru/common/images/logo.png"/>   
            <br/>
            <Price></Price>
        </div>
    );
}
export default App;