"use client";
const Page = () => {
  // 11. Hicheeluud deerh dundaj dung olood objected butsaaconst
  const students = [
    { name: "John", subject: "Math", grade: 85 },
    { name: "Jane", subject: "Math", grade: 92 },
    { name: "Peter", subject: "English", grade: 78 },
    { name: "Lucy", subject: "English", grade: 88 },
    { name: "Mike", subject: "Math", grade: 75 },
    { name: "Sophia", subject: "History", grade: 89 },
    { name: "Tom", subject: "History", grade: 82 },
  ];
  // output: { 'Math': 84, 'English': 83, 'History': 85.5 }

  let mathSum = 0;
  let englishSum = 0;
  let historySum = 0;

  

  const mathAverege = students.filter((student) => {
    return student.subject == "Math";
  });
  mathAverege.map((student) => (mathSum = mathSum + student.grade));

  const englishAverege = students.filter((student) => {
    return student.subject == "English";
  });
  englishAverege.map((student) => (englishSum = englishSum + student.grade));

  const historyAverege = students.filter((student) => {
    return student.subject == "History";
  });
  historyAverege.map((student) => (historySum = historySum + student.grade));

  return (
    <div>
      {mathSum / mathAverege.length} {englishSum / englishAverege.length}{" "}
      {historySum / historyAverege.length}
    </div>
  );
};

export default Page;
