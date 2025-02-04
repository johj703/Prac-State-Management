import React, { createContext, useContext, useReducer } from "react";

interface State {
  count: number;
  user: string | null;
}

type Action = { type: "INCREMENT" } | { type: "SET_USER"; payload: string };

const initialState: State = {
  count: 0,
  user: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AppContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
