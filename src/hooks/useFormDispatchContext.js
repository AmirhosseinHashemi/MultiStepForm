import { useContext } from "react";
import { FormDispatchContext } from "../context/FormContext";

function useFormDispatchContext() {
  const dispatch = useContext(FormDispatchContext);
  return dispatch;
}

export default useFormDispatchContext;
