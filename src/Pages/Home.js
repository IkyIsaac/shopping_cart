import { faker } from "@faker-js/faker";
import SingleProduct from "../SingleProduct";
import { useState } from "react";

faker.seed(20);

export const Home = ({ cart, setCart }) => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productArray);
  console.log(cart);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((prod) => (
          <SingleProduct
            key={prod.id}
            prod={prod}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};
