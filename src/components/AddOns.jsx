import { ADD_ONS } from "../utils/config";
import AddOnsItem from "./AddOnsItem";

function AddOns() {
  return (
    <section className="mt-[-72px] rounded-lg bg-neutral-white px-6 py-8 shadow-xl">
      <h2 className="text-2xl font-bold text-primary-blue-1">Pick add-ons</h2>
      <p className="mb-6 mt-2 text-[16px] font-normal text-neutral-gray-1">
        Add-ons help enhance your gaming experience.
      </p>

      {ADD_ONS.map((option) => (
        <AddOnsItem key={option.id} option={option} />
      ))}
    </section>
  );
}

export default AddOns;
