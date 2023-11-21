import { createContext } from "react";
import { IGobalContext } from "./types";

export const GlobalContext = createContext({} as IGobalContext);

export const globalContext = () => {
  return <div>globalContext</div>;
};
