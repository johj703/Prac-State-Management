"use client";

import { Counter } from "./components/Counter";
import { useAppContext } from "./context/AppContext";

export default function Home() {
  const { state, dispatch } = useAppContext();

  return (
    <main>
      <div>
        <h1>메인 페이지</h1>
        <Counter />
        <div>
          <input
            type="text"
            placeholder="사용자 이름"
            onChange={(e) =>
              dispatch({ type: "SET_USER", payload: e.target.value })
            }
          />
          <p>현재 사용자: {state.user || "없음"}</p>
        </div>
      </div>
    </main>
  );
}
