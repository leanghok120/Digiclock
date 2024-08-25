import { useState } from "react";
import Clock from "./Clock";

function App() {
  // index for background
  const [index, setIndex] = useState("1");

  function handleClick() {
    const newIndex = index == "1" ? "2" : "1";
    setIndex(newIndex);
  }

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen bg-[url('/src/assets/background${index}.jpg')] bg-fixed bg-no-repeat bg-cover bg-center bg-white`}
      onClick={handleClick}
    >
      <Clock />
    </div>
  );
}

export default App;
