import { useEffect, useState } from "react";
import "./App.css";
import { Dog } from "./types";
import { getAllDogs } from "./Requests";

function App() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    getAllDogs().then(setDogs);
  }, []);

  return (
    <>
      <div className="app-container">
        {dogs.map((dog) => (
          <h3 key={dog.id}>{dog.name}</h3>
        ))}
      </div>
    </>
  );
}

export default App;
