"use client";

const Page = () => {
  // 50,000 aas deesh tsalintai humuusing neriig butsaa

  const employees = [
    { name: "John", salary: 60000 },
    { name: "Jane", salary: 45000 },
    { name: "Alex", salary: 75000 },
    { name: "Linda", salary: 30000 },
  ];

  const checkedSalary = employees.filter((employee) => {
    return employee.salary > 50000;
  });

  return (
    <div>
      <h1>
        {checkedSalary.map((names) => (
          <div>{names.name}</div>
        ))}
      </h1>
    </div>
  );
};

export default Page;  
