"use client";
const Page = () => {
  // 1. suragchdin dundaj nasiig butsaa
  const students = [
    { name: "Sarah", age: 18 },
    { name: "Mike", age: 21 },
    { name: "Jake", age: 20 },
    { name: "Emma", age: 19 },
  ];
  let sumOfAge = 0;
  const avaregeAgeOfStudents = students.map((student) => {
    return (sumOfAge = sumOfAge + student.age / students.length);
  });
  console.log(sumOfAge);

  return <div>{sumOfAge}</div>;
};

export default Page;
  