import React, { FC, createContext, useReducer, useRef } from "react";
import { BasicLayout as BasicLayoutType } from "typings";
import { basicLayoutReducers as reducers } from "@/reducers";

const initialState: BasicLayoutType.State = {
  collapsed: false,
  settings: {
    colorWeak: false,
    contentWidth: "Fluid",
    fixSiderbar: false,
    fixedHeader: false,
    layout: "sidemenu",
    menu: { locale: true },
    navTheme: "dark",
    title: "React TypeScript"
  }
};

export const Context = createContext<BasicLayoutType.Interface>({
  state: initialState,
  dispatch: () => {}
});

export const ContextProvider: FC = props => {
  const globalRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <Context.Provider value={{ state, dispatch, globalRef }}>
      {props.children}
    </Context.Provider>
  );
};
