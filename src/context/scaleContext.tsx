import React, { createContext, useState, useContext, useReducer } from "react";
import { initialScaleValue } from "./initialScaleValue";
import { scaleReducer, State, Action } from "./reducers";

const ScaleStateContext = createContext<State>(initialScaleValue);
const ScaleDispatchContext = createContext<React.Dispatch<Action>>(
  () => undefined
);

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const ScaleContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(scaleReducer, initialScaleValue);

  return (
    <ScaleStateContext.Provider value={state}>
      <ScaleDispatchContext.Provider value={dispatch}>
        {children}
      </ScaleDispatchContext.Provider>
    </ScaleStateContext.Provider>
  );
};

export const useScaleStateContext = () => {
  return useContext(ScaleStateContext);
};

export const useScaleDispatchContext = () => {
  return useContext(ScaleDispatchContext);
};
