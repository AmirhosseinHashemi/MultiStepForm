import useFormDispatchContext from "../hooks/useFormDispatchContext";

function Button({ children, model }) {
  const dispatch = useFormDispatchContext();

  const btnModel = {
    next: "bg-primary-blue-1 text-neutral-white",
    back: "bg-transparent text-primary-blue-4",
    confirm: "bg-primary-blue-2 text-neutral-white",
  };

  if (model === "back")
    return (
      <button
        onClick={() => dispatch({ type: "step/prev" })}
        className={`rounded px-4 py-2 text-sm font-medium capitalize tracking-wide ${btnModel[model]}`}
      >
        {children}
      </button>
    );

  if (model === "next")
    return (
      <button
        onClick={() => dispatch({ type: "step/next" })}
        className={`rounded px-4 py-2 text-sm font-medium capitalize tracking-wide ${btnModel[model]}`}
      >
        {children}
      </button>
    );

  if (model === "confirm")
    return (
      <button
        className={`rounded px-4 py-2 text-sm font-medium capitalize tracking-wide ${btnModel[model]}`}
      >
        {children}
      </button>
    );
}

export default Button;
