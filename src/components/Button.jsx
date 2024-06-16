function Button({ children, type }) {
  const btnType = {
    next: "bg-primary-blue-1 text-neutral-white",
  };

  return (
    <button
      className={`rounded px-4 py-2 text-sm font-medium capitalize tracking-wide ${btnType[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
