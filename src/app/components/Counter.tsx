"use client";

import { useAppContext } from "../context/AppContext";

export const Counter = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">카운터</h2>
        <p className="text-5xl font-bold text-blue-600 my-4">{state.count}</p>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          감소
        </button>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          증가
        </button>
      </div>
    </div>
  );
};
