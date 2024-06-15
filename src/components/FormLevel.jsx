function FormLevel() {
  return (
    <aside className="flex h-[172px] justify-center bg-[url('/images/bg-sidebar-mobile.svg')] bg-top bg-no-repeat">
      <ul className="mt-8 flex gap-4">
        <li>
          <button className="h-8 w-8 rounded-full border border-primary-blue-4 text-sm font-medium text-neutral-white">
            1
          </button>
        </li>
        <li>
          <button className="h-8 w-8 rounded-full border border-primary-blue-4 text-sm font-medium text-neutral-white">
            2
          </button>
        </li>
        <li>
          <button className="h-8 w-8 rounded-full border border-primary-blue-4 text-sm font-medium text-neutral-white">
            3
          </button>
        </li>
        <li>
          <button className="h-8 w-8 rounded-full border border-primary-blue-4 text-sm font-medium text-neutral-white">
            4
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default FormLevel;
