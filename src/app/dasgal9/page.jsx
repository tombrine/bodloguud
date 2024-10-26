"use client";
const Page = () => {
  // 5. 30,000 aas deesh unetei mashinuudig olj tedgeerin brand bolon model iig arrayd object baidlar butsaa

  const cars = [
    { brand: "Toyota", model: "Corolla", price: 20000 },
    { brand: "Tesla", model: "Model S", price: 80000 },
    { brand: "Honda", model: "Civic", price: 25000 },
    { brand: "BMW", model: "X5", price: 60000 },
  ];

  const filterdCars = cars.filter((car) => {
    return car.price > 30000;
  });
  return (
    <div>
      {filterdCars.map((result) => (
        <div>
          {result.brand}: {result.model}
        </div>
      ))}
    </div>
  );
};
  
export default Page;
