import React, { FC, createContext, useReducer } from "react";
import { BasicLayout as BasicLayoutType } from "typings";
import { basicLayoutReducers as reducers } from "@/reducers";

const initialState: BasicLayoutType.State = {
  collapsed: false
};

export const Context = createContext<BasicLayoutType.Interface>({
  state: initialState,
  dispatch: () => {}
});

export const ContextProvider: FC = props => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
