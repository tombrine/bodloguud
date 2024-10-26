"use client";
const Page = () => {
  // 4. array aas tegsh toonuudig olj tedgeerin kvadratuudig butsaa

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   output: [4, 16, 36, 64];

  const filterdNumber = numbers.filter((number) => {
    return number % 2 === 0;
  });

  return (
    <div>
      {filterdNumber.map((evenNumber, index) => {
        return <div key={index}>{evenNumber * evenNumber}</div>;
      })}
    </div>
  );
};

export default Page;
