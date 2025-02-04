"use client";

import { Counter } from "./components/Counter";
import { useAppContext } from "./context/AppContext";

export default function Home() {
  const { state, dispatch } = useAppContext();

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          메인 페이지
        </h1>
        <Counter />
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="사용자 이름"
            onChange={(e) =>
              dispatch({ type: "SET_USER", payload: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <p className="text-gray-600">
            현재 사용자:{" "}
            <span className="font-semibold">{state.user || "없음"}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
