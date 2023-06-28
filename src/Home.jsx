import axios from "axios";
import { useState, useEffect } from "react";
import { Submit } from "./Submit";

export function Home() {
  // const drawings = [
  //   {
  //     id: 1,
  //     name: "First",
  //     description: "Description",
  //     url: "https://www.gardnermuseum.org/sites/default/files/styles/portrait_large/public/images/slides/1708/Organization_Rentals_Cloisters_04.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Second",
  //     description: "Description",
  //     url: "https://www.chemicals.co.uk/wp-content/uploads/2021/09/close-up-of-sea-water.jpeg",
  //   },
  // ];
  const [drawings, setDrawings] = useState([]);

  const handleIndexDrawings = () => {
    console.log("handleIndexDrawings");
    axios.get("http://localhost:3000/drawings.json").then((response) => {
      console.log(response.data);
      setDrawings(response.data);
    });
  };

  useEffect(handleIndexDrawings, []);

  return (
    <div>
      <h1 className="heading">Drawings</h1>
      <Submit drawings={drawings} />
    </div>
  );
}
