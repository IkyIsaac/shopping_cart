import SingleProduct from "../SingleProduct";

export const Cart = ({ cart, setCart }) => {
  return (
    <>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: USD: 1320.00</span>
      <div>
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
};
