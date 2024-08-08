import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SingleProduct = ({products}) => {
  return (
    <>
    {products.map((product)=>{
        
        return (
            <section key={Math.random()}>
        <Card style={{ width: '18rem' }} className="m-10px">
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button variant="secondary" className="px-20px">Add to Cart</Button>
          </Card.Body>
        </Card>
        </section>
        )
    })
}
    </>
  )
}

export default SingleProduct
