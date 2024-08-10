import React from 'react'
import SingleProduct from './SingleProduct';

const Products = ({productsArray,cart,setCart}) => {
  // console.log(productsArray.name)
  cart.forEach(product => console.log(product.id));

  return (
    <>
    <div className="container">
      <div className="row">
        {productsArray.map((product,index)=>(
          <SingleProduct key={index} product={product} cart={cart} setCart={setCart}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Products
