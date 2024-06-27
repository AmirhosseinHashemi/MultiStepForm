import { useForm } from "react-hook-form";
import useFormDispatchContext from "../hooks/useFormDispatchContext";
import Button from "./Button";

function PersonalInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useFormDispatchContext();

  function submit(data) {
    dispatch({ type: "add_to_personal_info", payload: data });
    dispatch({ type: "step/next" });
  }

  return (
    <section className="mt-[-72px] rounded-lg bg-neutral-white px-6 py-8 shadow-xl">
      <h2 className="text-2xl font-bold text-primary-blue-1">Personal info</h2>
      <p className="mt-2 text-[16px] font-normal text-neutral-gray-1">
        Please provide your name, email, address, and phone number.
      </p>
      <form
        action=""
        className="mt-3 flex flex-col gap-4"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium capitalize text-primary-blue-1"
          >
            Name
          </label>
          <input
            className="rounded border border-neutral-gray-2 px-4 py-2 text-sm font-medium text-primary-blue-1 outline-none placeholder:font-medium focus:border-primary-blue-1"
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            {...register("name", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*$/,
                message: "You should fill input like example",
              },
            })}
          />
          {errors.name && (
            <p className="mt-1 text-xs font-bold text-primary-red">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium capitalize text-primary-blue-1"
          >
            Email address
          </label>
          <input
            className="rounded border border-neutral-gray-2 px-4 py-2 text-sm font-medium text-primary-blue-1 outline-none placeholder:font-medium focus:border-primary-blue-1"
            type="text"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]{6,30}@gmail\.com$/,
                message: "You should fill input like example",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-bold text-primary-red">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm font-medium capitalize text-primary-blue-1"
          >
            Phone Number
          </label>
          <input
            className="rounded border border-neutral-gray-2 px-4 py-2 text-sm font-medium text-primary-blue-1 outline-none placeholder:font-medium focus:border-primary-blue-1"
            type="text"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
                message: "Your phone number format is invalid",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs font-bold text-primary-red">
              {errors.phone.message}
            </p>
          )}
        </div>

        <Button type="submit" model="next">
          Next Step
        </Button>
      </form>
    </section>
  );
}

export default PersonalInfoForm;
