import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from "./Components/SingleProduct";
import { faker } from '@faker-js/faker';
import { useState } from "react";


function App() {
  const productsArray=[...Array(20)].map(()=>{
    const image=faker.image.url()
    const productName=faker.commerce.product()
    const productDescription=faker.commerce.productDescription()
    const price=faker.commerce.price() 

    return {
      image:image,
      name:productName,
      description:productDescription,
      price:price
    }
})
  console.log(productsArray)
  // const[product,setProduct]=useState("")
  return (
    <>
    <h1 className="text-center">Shopping Cart</h1>
    <Header/>
    <div className="d-flex">
    <SingleProduct products={productsArray}/>
    </div>
  </> 
   );
}

export default App;