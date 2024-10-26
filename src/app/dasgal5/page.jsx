"use client";
const Page = () => {
  // 6. Edgeer kinonuudas 7 goos iluu rating tei kinonuudig olj tedgeerin dundaj rating iig ol

  const movies = [
    { title: "Movie A", rating: 6.8 },
    { title: "Movie B", rating: 7.5 },
    { title: "Movie C", rating: 8.2 },
    { title: "Movie D", rating: 5.5 },
  ];

  let sumOfRatings = 0;

  const filterdMovies = movies.filter((movie) => {
    return movie.rating > 7;
  });
  console.log(filterdMovies);

  filterdMovies.map((movie) => (sumOfRatings = sumOfRatings + movie.rating));

  return <div>{sumOfRatings / filterdMovies.length}</div>;
};
  
export default Page;
