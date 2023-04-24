import { useEffect, useRef, useState } from "react";

function Demo2() {
  let x = 0;
    const z = useRef(10);
  const [y, setY] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log(`Calling interval ${Math.random()}`);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-500 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-400 p-2 m-4"
          onClick={() => {
            x = x + 1;
          }}>
          Increase x
        </button>
        <span className="font-bold text-xl">Let {x}</span>
      </div>

      <div>
        <button
          className="bg-green-400 p-2 m-4"
          onClick={() => setY((y) => y + 1)}>
          Increase y
        </button>
        <span className="font-bold text-xl">Let {y}</span>
      </div>

      <div>
        <button
          className="bg-green-400 p-2 m-4"
          onClick={() => {
            z.current = z.current + 1;
          }}>
          Increase z
        </button>
        <span className="font-bold text-xl">Let {z.current}</span>
      </div>
      <button
        className="bg-red-900 text-white font-bold p-4 rounded-lg"
        onClick={() => {
          clearInterval(timer.current);
        }}>
        Stop printing
      </button>
    </div>
  );
}

export default Demo2;
