"use client";
const Page = () => {
  // 2. Electronics gesen category toi productuudin uniig arrayt butsaa

  const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Book", category: "Stationery", price: 15 },
    { name: "Phone", category: "Electronics", price: 800 },
    { name: "Pen", category: "Stationery", price: 5 },
  ];

  const filterdProducts = products.filter((categories) => {
    return categories.category === "Electronics";
  });

  console.log(filterdProducts);

  return (
    <div>
      {filterdProducts.map((prices) => (
        <div>{prices.price}</div>
      ))}
    </div>
  );
};
  
export default Page;
