import { createContext, useReducer } from "react";
import { DEFAULT_PAYMENT_METHOD, DEFAULT_SELECTED_PLAN } from "../utils/config";

export const FormContext = createContext();
export const FormDispatchContext = createContext();

const initialState = {
  level: 1,
  personalInfo: {},
  selectedPlan: DEFAULT_SELECTED_PLAN,
  paymentMethod: DEFAULT_PAYMENT_METHOD,
  addOns: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add_to_personal_info":
      return { ...state, personalInfo: action.payload };

    case "select_plan":
      return { ...state, selectedPlan: action.payload };

    case "set_payment_method":
      return { ...state, paymentMethod: action.payload };

    case "add_ons":
      return { ...state, addOns: action.payload };

    case "step/next":
      return { ...state, level: state.level + 1 };

    case "step/prev":
      return { ...state, level: state.level - 1 };

    case "step/set":
      return { ...state, level: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

export default function FormProvider({ children }) {
  const [
    { personalInfo, level, selectedPlan, paymentMethod, addOns },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider
      value={{ personalInfo, level, selectedPlan, paymentMethod, addOns }}
    >
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}
