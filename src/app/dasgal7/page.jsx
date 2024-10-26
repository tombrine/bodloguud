"use client";

import { Result } from "postcss";

const Page = () => {
  // 2. neg turluus 2 oos ih shirheg bga baraanudig songoj niit uniig butsaa

  const cart = [
    { name: "Apple", quantity: 5, price: 2 },
    { name: "Banana", quantity: 1, price: 1 },
    { name: "Orange", quantity: 3, price: 3 },
    { name: "Grapes", quantity: 1, price: 4 },
  ];

  const filterdCart = cart.filter((quantities) => {
      return quantities.quantity > 2;
  });
    
    let sum = 0;

    filterdCart.map((carts) => (sum = sum + carts.price))

  return <div>{sum}</div>;
};
  
export default Page;
