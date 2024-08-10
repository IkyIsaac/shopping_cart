import SingleProduct from "./SingleProduct"

const Cart = ({cart=[],setCart}) => {

    return (
    <>
    {cart.map((c)=>{<SingleProduct product={c} cart={cart} setCart={setCart}/>})}
    {/* <SingleProduct product={cart} setCart={setCart}/> */}
    </>
  )
}

export default Cart
