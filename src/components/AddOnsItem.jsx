import { useState } from "react";
import useFormContext from "../hooks/useFormContext";

function AddOnsItem({ option, register }) {
  const { paymentMethod } = useFormContext();
  const [isActive, setIsActive] = useState(true);
  const { name, id, description, price } = option;

  const paymentMethodAbb = paymentMethod === "yearly" ? "yr" : "mo";

  return (
    <div
      key={id}
      className={`mb-3 grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-neutral-gray-2 p-4 ${isActive ? "border-primary-blue-2 bg-neutral-Magnolia" : "border-neutral-gray-2"}`}
    >
      <label htmlFor={name} className="h-5 w-5">
        <input
          className="size-full appearance-none rounded border border-neutral-gray-2 bg-transparent bg-[url('/images/icon-checkmark.svg')] checked:border-none checked:bg-primary-blue-2 checked:bg-center checked:bg-no-repeat"
          type="checkbox"
          name={name}
          id={name}
          {...register(name)}
          checked={isActive}
          value={isActive}
          onChange={() => setIsActive((curState) => !curState)}
        />
      </label>
      <div>
        <h3 className="text-sm font-bold -tracking-wide text-primary-blue-1">
          {name}
        </h3>
        <p className="text-xs font-normal text-neutral-gray-1">{description}</p>
      </div>
      <p className="text-xs font-medium text-primary-blue-2">
        +${price[paymentMethod]}/{paymentMethodAbb}
      </p>
    </div>
  );
}

export default AddOnsItem;
