"use client";

import { useAppContext } from "../context/AppContext";

export const Counter = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div>
      <div>
        <h2>카운터</h2>
        <p>{state.count}</p>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      </div>
    </div>
  );
};
