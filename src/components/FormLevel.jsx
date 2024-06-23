import useFormContext from "../hooks/useFormContext";

function FormLevel() {
  const { level } = useFormContext();

  return (
    <aside className="flex h-[172px] justify-center bg-[url('/images/bg-sidebar-mobile.svg')] bg-top bg-no-repeat">
      <ul className="mt-8 flex gap-4">
        <li>
          <button
            className={`h-8 w-8 rounded-full border border-primary-blue-4 text-sm font-bold text-neutral-white ${level === 1 && "bg-primary-blue-4 text-primary-blue-1"}`}
          >
            1
          </button>
        </li>
        <li>
          <button
            className={`h-8 w-8 rounded-full border border-primary-blue-4 text-sm font-bold text-neutral-white ${level === 2 && "bg-primary-blue-4 text-primary-blue-1"}`}
          >
            2
          </button>
        </li>
        <li>
          <button
            className={`h-8 w-8 rounded-full border border-primary-blue-4 text-sm font-bold text-neutral-white ${level === 3 && "bg-primary-blue-4 text-primary-blue-1"}`}
          >
            3
          </button>
        </li>
        <li>
          <button
            className={`h-8 w-8 rounded-full border border-primary-blue-4 text-sm font-bold text-neutral-white ${level === 4 && "bg-primary-blue-4 text-primary-blue-1"}`}
          >
            4
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default FormLevel;
