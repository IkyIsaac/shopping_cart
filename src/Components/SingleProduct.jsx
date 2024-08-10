// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// const SingleProduct = ({product,cart,setCart}) => {
//   const handleChange=()=>{
//     setCart(cart.filter((c)=> c.id.toString()!==product.id.toString())
//   )
//   }
  
//   return (
//     <>
//         <Card style={{ width: '18rem' }} className="col-3 g-4 mx-3 p-0">
//           <Card.Img variant="top" src={product.image} style={{ width:"100%"}}/>
//           <Card.Body>
//             <Card.Title>{product.name}</Card.Title>
//             <Card.Text>
//               {product.description}
//             </Card.Text>
//             <Button variant="secondary" className="px-20px" onClick={()=>{
//               setCart([...cart,product])
//             }} >Add to Cart</Button>
//             <Button variant="secondary" className="px-20px" onClick={handleChange} >Remove from Cart</Button>
//           </Card.Body>
//         </Card>
//     </>
//   )
// }

// export default SingleProduct
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleProduct = ({ product, cart, setCart }) => {

  // console.log(product.id)

  const handleAddToCart = (event) => {
    event.preventDefault()
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = () => {
    setCart(cart.filter(c => c.id !== product.id));
  };

  return (
    <Card style={{ width: '18rem' }} className="col-3 g-4 mx-3 p-0">
      <Card.Img variant="top" src={product.image} style={{ width: "100%" }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        {cart.includes(product)? <Button variant="secondary" className="px-3" onClick={handleRemoveFromCart}>
          Remove from Cart
        </Button> : <Button variant="secondary" className="px-3" onClick={handleAddToCart}>
          Add to Cart
        </Button>
         }
        
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
