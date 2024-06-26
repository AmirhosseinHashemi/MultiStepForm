import { PLANS } from "../utils/config";
import useFormContext from "../hooks/useFormContext";
import useFormDispatchContext from "../hooks/useFormDispatchContext";
import PlanItem from "./PlanItem";
import Button from "./Button";

function Plan() {
  const { paymentMethod, selectedPlan } = useFormContext();
  const dispatch = useFormDispatchContext();

  function handleSwitchBtn() {
    if (paymentMethod === "monthly")
      dispatch({ type: "set_payment_method", payload: "yearly" });
    if (paymentMethod === "yearly")
      dispatch({ type: "set_payment_method", payload: "monthly" });
  }

  function handleSelectedPlan(planName) {
    dispatch({ type: "select_plan", payload: planName });
  }

  return (
    <section className="mt-[-72px] rounded-lg bg-neutral-white px-6 py-8 shadow-xl">
      <h2 className="text-2xl font-bold text-primary-blue-1">
        Select your plan
      </h2>
      <p className="mb-6 mt-2 text-[16px] font-normal text-neutral-gray-1">
        You have the option of monthly or yearly billing.
      </p>

      {PLANS.map((plan) => (
        <PlanItem
          key={plan.id}
          planInfo={plan}
          isActive={selectedPlan === plan.name}
          handleSelectedPlan={handleSelectedPlan}
          paymentMethod={paymentMethod}
        />
      ))}

      <div className="mt-4 flex items-center justify-center gap-5 rounded-md bg-neutral-Alabaster py-3">
        <p
          className={`text-sm font-bold ${paymentMethod === "monthly" ? "text-primary-blue-1" : "text-primary-blue-3"}`}
        >
          Monthly
        </p>
        <button
          onClick={handleSwitchBtn}
          className={`relative h-5 w-10 rounded-3xl bg-primary-blue-1 after:absolute after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:bg-neutral-Alabaster after:transition-all ${paymentMethod === "monthly" ? "after:left-1" : "after:left-6"}`}
        ></button>
        <p
          className={`text-sm font-bold ${paymentMethod === "yearly" ? "text-primary-blue-1" : "text-primary-blue-3"}`}
        >
          Yearly
        </p>
      </div>

      <Button onClick={() => dispatch({ type: "step/next" })} model="next">
        Next Step
      </Button>
    </section>
  );
}

export default Plan;
