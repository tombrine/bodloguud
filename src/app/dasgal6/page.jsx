"use client";
const Page = () => {
  const names = ["John", "Rebecca", "Sam", "Alexander", "Kate"];
  //   output: ["Rebecca", "Alexander"];
  const filterdNames = names.filter((peopleNames) => {
    return peopleNames.length >= 5;
  });

  return (
    <div>
      {filterdNames.map((filterdPeopleNames, index) => {
        return <div key={index}>{filterdPeopleNames}</div>;
      })}
    </div>
  );
};

export default Page;
  