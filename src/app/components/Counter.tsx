"use client";

import { useAppContext } from "../context/AppContext";

export const Counter = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div>
      <h2>카운터: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
    </div>
  );
};
