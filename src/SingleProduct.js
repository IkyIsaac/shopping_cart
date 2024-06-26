import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleProduct = ({ prod, cart, setCart }) => {
  return (
    <div className="col-md-3  col-sm-4 mb-4">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>USD {prod.price}</Card.Text>
          {cart.includes(prod) ? (
            <Button
              className="mx-2 my-1"
              variant="secondary"
              onClick={() => {
                setCart(cart.filter((c) => c.id !== prod.id));
              }}
              style={{ width: "100%" }}
            >
              Rem from Cart
            </Button>
          ) : (
            <Button
              variant="secondary"
              style={{ width: "100%" }}
              onClick={() => {
                setCart([...cart, prod]);
              }}
            >
              Add to Cart
            </Button>
          )}

          <br />
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
