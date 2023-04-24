import { useCallback, useMemo, useState } from "react";
import { findPrime } from "../utils/helpers";

function Demo() {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  // heavy operation
  const prime = useMemo(() => {
    // console.log("Calculating the nth prime...," + text);
    return findPrime(text);
  },[text]);

  

  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${
        isDarkTheme && "bg-gray-900 text-white"
      }`}>
      <div>
        <button
          className="m-10 p-2 bg-red-500"
          onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 text-green-500"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className="font-bold text-2xl">nth prime: {prime}</p>
      </div>
    </div>
  );
}

export default Demo;
