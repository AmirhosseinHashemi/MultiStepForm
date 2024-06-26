import { useForm } from "react-hook-form";

import { ADD_ONS } from "../utils/config";
import useFormDispatchContext from "../hooks/useFormDispatchContext";
import AddOnsItem from "./AddOnsItem";
import Button from "./Button";

function AddOns() {
  const { register, handleSubmit } = useForm();
  const dispatch = useFormDispatchContext();

  function submitForm(data) {
    dispatch({ type: "add_ons", payload: data });
    dispatch({ type: "step/next" });
  }

  return (
    <section className="mt-[-72px] rounded-lg bg-neutral-white px-6 py-8 shadow-xl">
      <h2 className="text-2xl font-bold text-primary-blue-1">Pick add-ons</h2>
      <p className="mb-6 mt-2 text-[16px] font-normal text-neutral-gray-1">
        Add-ons help enhance your gaming experience.
      </p>

      <form action="" onSubmit={handleSubmit(submitForm)}>
        {ADD_ONS.map((option) => (
          <AddOnsItem key={option.id} option={option} register={register} />
        ))}

        <Button type="submit" model="next">
          Next Step
        </Button>
      </form>
    </section>
  );
}

export default AddOns;
