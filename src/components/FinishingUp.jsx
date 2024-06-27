import useFormContext from "../hooks/useFormContext";
import useFormDispatchContext from "../hooks/useFormDispatchContext";
import { ADD_ONS, PLANS } from "../utils/config";
import Button from "./Button";

function FinishingUp() {
  const { paymentMethod, selectedPlan, addOns } = useFormContext();
  const dispatch = useFormDispatchContext();

  const paymentMethodAbb = paymentMethod === "yearly" ? "yr" : "mo";

  const selectedPlanPrice = PLANS.find((plan) => plan.name === selectedPlan)
    .price[paymentMethod];

  const addOnsData =
    addOns.length !== 0 &&
    addOns.map((item) => ADD_ONS.find((ons) => ons.name === item[0]));

  const addOnsPrice =
    addOnsData &&
    addOnsData.reduce((acc, curr) => curr.price[paymentMethod] + acc, 0);

  const totalPrice = selectedPlanPrice + addOnsPrice;

  return (
    <section className="mt-[-72px] rounded-lg bg-neutral-white px-6 py-8 shadow-xl">
      <h2 className="text-2xl font-bold text-primary-blue-1">Finishing up</h2>
      <p className="mb-6 mt-2 text-[16px] font-normal text-neutral-gray-1">
        Duble-check everything looks OK before confirming.
      </p>

      <div className="rounded-md bg-neutral-Magnolia p-4 text-sm font-normal">
        <div className="relative flex items-center justify-between after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-[1px] after:bg-neutral-gray-2">
          <div>
            <h3 className="font-bold -tracking-wide text-primary-blue-1 first-letter:uppercase">
              {selectedPlan}
              <span className="ml-1">({paymentMethod})</span>
            </h3>
            <a
              className="cursor-pointer text-neutral-gray-1 underline"
              onClick={() => dispatch({ type: "step/set", payload: 2 })}
            >
              Change
            </a>
          </div>
          <p className="font-bold text-primary-blue-1">
            ${selectedPlanPrice}/{paymentMethodAbb}
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-2">
          {addOnsData &&
            addOnsData.map((item) => (
              <p
                key={item.name}
                className="flex justify-between text-neutral-gray-1"
              >
                {item.name}
                <span className="font-medium text-primary-blue-1">
                  +${item.price[paymentMethod]}/{paymentMethodAbb}
                </span>
              </p>
            ))}
        </div>
      </div>

      <p className="mt-6 flex items-center justify-between px-4 text-sm text-neutral-gray-1">
        Total (per {paymentMethod === "yearly" ? "year" : "month"})
        <span className="text-base font-bold text-primary-blue-2">
          +${totalPrice}/{paymentMethod}
        </span>
      </p>

      <Button model="confirm">Confirm</Button>
    </section>
  );
}

export default FinishingUp;
