function AddOnsItem({ option }) {
  // price will handle later...
  // inputs are not in control yet
  const { name, id, description } = option;
  return (
    <div
      key={id}
      className="mb-3 grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-neutral-gray-2 p-4"
    >
      <input
        className="h-5 w-5 appearance-none rounded border border-neutral-gray-2 bg-transparent bg-[url('/images/icon-checkmark.svg')] checked:border-none checked:bg-primary-blue-2 checked:bg-center checked:bg-no-repeat"
        type="checkbox"
      />
      <div>
        <h3 className="text-sm font-bold -tracking-wide text-primary-blue-1">
          {name}
        </h3>
        <p className="text-xs font-normal text-neutral-gray-1">{description}</p>
      </div>
      <p className="text-xs font-medium text-primary-blue-2">+$1/mon</p>
    </div>
  );
}

export default AddOnsItem;
