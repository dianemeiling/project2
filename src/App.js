import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar/Navbar';
import Pens from './components/Pens/Pens';
import Pencils from './components/Pencils/Pencils';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/Cart'; 
import Context from './store/Context';
import Product from './components/Product'
import GlobalState from './store/GlobalState';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Checkout/Confirmation';
import Checkout2 from './components/Checkout/Checkout2'
import About from './components/About/About';
import Confirmationmessage from './components/ContactUs/Confirmationmessage';

import  BerryImage from "./images/Mug_Mr_And_Mrs_Koi.jpg";

import React, {useState, useContext, useEffect} from "react";
import { ProductList } from './components/AppStyles';

function App() {
  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);

  useEffect(() =>{
    console.log(context);
  }, [context]);

  return (
    <div className="App">
       <Router>
        
        <div className="header" >
          <img src={BerryImage} style={{height:50, width:150, marginLeft:10}}/>
          <Navbar />
          <Cart isToggle = {isToggle} setToggle={setToggle} carts={context.carts} removeProductFromCart={context.removeProductFromCart} clearCart={context.clearCart} addProductToCart={context.addProductToCart}/>
        </div>
        <Routes >
          { <Route exact path='/' element={<Home />} /> }
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/pens' element={<Pens />} />
          <Route exact path='/pencils' element={<Pencils />} />
         <Route exact path='/contactus' element={<ContactUs />} />
         <Route exact path='/checkout' element={<Checkout />} />
         <Route exact path='/confirmation' element={<Confirmation />} />
         <Route exact path='/checkout2' element={<Checkout2 />} />
         <Route exact path='/about' element={<About />} />
         <Route exact path='/confirmationmessage' element={<Confirmationmessage />} />

        </Routes>
      </Router>
     
      <div>
       <ProductList>
         {context.products.map((p) => (
           <Product 
           key={p.id}
            id={p.id}
            imageURL={p.imageURL}
            price = {p.price}
            title={p.title}
            addProductToCart={context.addProductToCart}
           />
         ))}
       </ProductList>
     </div>

    </div>
    
  );
}

export default App;


//<button onClick={() => setCount(Count +1)}> Submit </ button>