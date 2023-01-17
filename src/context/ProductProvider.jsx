import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { actionType } from "../state/ProductState/ActionType";
import {
  initialState,
  productReducer,
} from "../state/ProductState/ProductReducer";

// PRODUCT CONTEXT
const RPODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  // Data Fatch API

  // Use Reducer
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionType.FETCHING_START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionType.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => {
        dispatch({ type: actionType.FETCHING_ERROR });
      });
  }, []);

  // State Data Value
  const value = {
    state,
    dispatch,
  };
  return (
    <RPODUCT_CONTEXT.Provider value={value}>
      {children}
    </RPODUCT_CONTEXT.Provider>
  );
};

// Hook - useProducts
export const useProducts = () => {
  const context = useContext(RPODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
