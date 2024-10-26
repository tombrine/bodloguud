"use client";
const Page = () => {
  // 18 aas deesh nastai humuuusin neriig upper case boloog arrayt butsaa

  const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 16 },
  ];

  const checkedAge = people.filter((ages) => {
    return ages.age >= 18;
  });

  return (
    <h1>
      {checkedAge.map((names) => (
        <div>{names.name}</div>
      ))}
    </h1>
  );
};
  
export default Page;
