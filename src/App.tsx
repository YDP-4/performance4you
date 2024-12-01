import React from "react";
import useCounterStore from "./store/counterStore";

const App: React.FC = () => {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Zustand Counter</h1>
      <div className="text-2xl font-mono mb-4">Count: {count}</div>
      <div className="space-x-2">
        <button
          onClick={increase}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
