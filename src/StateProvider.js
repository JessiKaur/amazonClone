import React, { createContext, useContext, useReducer } from "react";

//Prepares data layer
export const StateContext = createContext();

//Wrap our app and Provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull Information from the Data layer
export const useStateValue = () => useContext(StateContext);
