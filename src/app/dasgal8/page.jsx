"use client";
const Page = () => {
  // 3. email ni @gmail eer tugssun humuusin neriig arrayt butsaa

  const users = [
    { id: 1, username: "john123", email: "john@gmail.com" },
    { id: 2, username: "alex456", email: "alex@yahoo.com" },
    { id: 3, username: "kate789", email: "kate@gmail.com" },
  ];

  const isIncluding = users.filter((gmail) => {
    return gmail.email.includes("@gmail");
  });
  return (
    <div>
      {isIncluding.map((names) => (
        <div>{names.username}</div>
      ))}
    </div>
  );
};
  
export default Page;
