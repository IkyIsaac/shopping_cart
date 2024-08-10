import Header from "./Components/Header";
import Cart from "./Components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Components/Products";
import './index.css';
import { faker } from '@faker-js/faker';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  const productsArray=[...Array(20)].map(()=>{
    const id=faker.string.uuid()
    const image=faker.image.url()
    const productName=faker.commerce.product()
    const productDescription=faker.commerce.productDescription()
    const price=faker.commerce.price() 

    return {
      id:id,
      image:image,
      name:productName,
      description:productDescription,
      price:price
    }
})
  const[cart,setCart]=useState([])
  // const[product,setProduct]=useState("")
  return (
    <>
    <h1 className="text-center">Shopping Cart</h1>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Products productsArray={productsArray} cart={cart} setCart={setCart} />}/>
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  </> 
   );
}

export default App;

// import React from 'react';
// import Header from "./Components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import SingleProduct from "./Components/SingleProduct";
// import './index.css';
// import { faker } from '@faker-js/faker';

// function App() {
//   const productsArray = [...Array(20)].map(() => {
//     const image = faker.image.url();
//     const productName = faker.commerce.product();
//     const productDescription = faker.commerce.productDescription();
//     const price = faker.commerce.price();

//     return {
//       image: image,
//       name: productName,
//       description: productDescription,
//       price: price
//     }
//   });

//   return (
//     <>
//       <Header />
//       <div className="container-fluid">
//         <h1 className="text-center">Shopping Cart</h1>
//         <SingleProduct products={productsArray} />
//       </div>
//     </>
//   );
// }

// export default App;
