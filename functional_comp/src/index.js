import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { add , sub , mul , div } from './Calc' ;
const name = 'Rahul Thakur' 
var currentdate = new Date().toDateString();
var time = new Date().toLocaleTimeString();
var img1 = "https://picsum.photos/200/300";
var img2 = "https://picsum.photos/200/300";
var img3 = "https://picsum.photos/200/300";
let time2 = new Date().getHours();
var greeting = '';
const cssStyle = {};
if(time2>=1 && time2<12)
{
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if(time2>=12 && time2<19){
  greeting = 'Good Afternoon';
  cssStyle.color='red';
}
else{
  greeting = 'Good Night';
  cssStyle.color='blue';
}

ReactDOM.render(
  <>
  <h1 className = "heading">My Name is {name}</h1>
  <h2>Hello Sir, <sppan style = {cssStyle}>{greeting}</sppan></h2>
  <p className>Today is = {currentdate} </p>
  <p>Current Time is = {time} </p>
  <div className="img_div">
  <img src={img1} alt="random images"/>
  <img src={img2} alt="random images"/>
  <img src={img3} alt="random images"/>
  </div>
  <ul>
    <li>The Sum is {add(40,4)}</li>
    <li>The Sub is {sub(40,4)}</li>
    <li>The Product is {mul(40,4)}</li>
    <li>The Division is {div(40,4)}</li>
  </ul> 
  </>,
  document.getElementById('root')

);