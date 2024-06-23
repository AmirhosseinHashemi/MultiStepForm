import useFormDispatchContext from "../hooks/useFormDispatchContext";

function Button({ children, type }) {
  const dispatch = useFormDispatchContext();

  const btnType = {
    next: "bg-primary-blue-1 text-neutral-white",
    back: "bg-transparent text-primary-blue-4",
    confirm: "bg-primary-blue-2 text-neutral-white",
  };

  if (type === "back")
    return (
      <button
        onClick={() => dispatch({ type: "step/prev" })}
        className={`rounded px-4 py-2 text-sm font-medium capitalize tracking-wide ${btnType[type]}`}
      >
        {children}
      </button>
    );

  if (type === "next")
    return (
      <button
        onClick={() => dispatch({ type: "step/next" })}
        className={`rounded px-4 py-2 text-sm font-medium capitalize tracking-wide ${btnType[type]}`}
      >
        {children}
      </button>
    );

  if (type === "confirm")
    return (
      <button
        className={`rounded px-4 py-2 text-sm font-medium capitalize tracking-wide ${btnType[type]}`}
      >
        {children}
      </button>
    );
}

export default Button;
