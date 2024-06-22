import { useState } from "react";

function Plan() {
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [paidOption, setPaidOption] = useState("monthly");

  function handleSwitch() {
    if (paidOption === "monthly") setPaidOption("yearly");
    if (paidOption === "yearly") setPaidOption("monthly");
  }

  function handlePlan(planName) {
    setSelectedPlan(planName);
  }

  return (
    <section className="mt-[-72px] rounded-lg bg-neutral-white px-6 py-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-primary-blue-1">
        Select your plan
      </h2>
      <p className="mb-6 mt-2 text-[16px] font-normal text-neutral-gray-1">
        You have the option of monthly or yearly billing.
      </p>

      <div
        onClick={() => handlePlan("arcade")}
        className={`mt-3 flex cursor-pointer gap-2 rounded-md border p-3 align-top ${selectedPlan === "arcade" ? "border-primary-blue-2 bg-neutral-Magnolia" : "border-neutral-gray-2"}`}
      >
        <img className="h-10 w-10" src="images/icon-arcade.svg" alt="" />
        <div>
          <h3 className="text-sm font-medium text-primary-blue-1">Arcade</h3>
          <p className="text-sm font-normal text-neutral-gray-1">$9/mo</p>
          {paidOption === "yearly" && (
            <p className="text-sm font-normal text-primary-blue-1">
              2 months free
            </p>
          )}
        </div>
      </div>

      <div
        onClick={() => handlePlan("advanced")}
        className={`mt-3 flex cursor-pointer gap-2 rounded-md border p-3 align-top ${selectedPlan === "advanced" ? "border-primary-blue-2 bg-neutral-Magnolia" : "border-neutral-gray-2"}`}
      >
        <img className="h-10 w-10" src="images/icon-advanced.svg" alt="" />
        <div>
          <h3 className="text-sm font-medium text-primary-blue-1">Advanced</h3>
          <p className="text-sm font-normal text-neutral-gray-1">$12/mo</p>
          {paidOption === "yearly" && (
            <p className="text-sm font-normal text-primary-blue-1">
              2 months free
            </p>
          )}
        </div>
      </div>

      <div
        onClick={() => handlePlan("pro")}
        className={`mt-3 flex cursor-pointer gap-2 rounded-md border p-3 align-top ${selectedPlan === "pro" ? "border-primary-blue-2 bg-neutral-Magnolia" : "border-neutral-gray-2"}`}
      >
        <img className="h-10 w-10" src="images/icon-pro.svg" alt="" />
        <div>
          <h3 className="text-sm font-medium text-primary-blue-1">Pro</h3>
          <p className="text-sm font-normal text-neutral-gray-1">$15/mo</p>
          {paidOption === "yearly" && (
            <p className="text-sm font-normal text-primary-blue-1">
              2 months free
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-5 rounded-md bg-neutral-Alabaster py-3">
        <p
          className={`text-sm font-bold ${paidOption === "monthly" ? "text-primary-blue-1" : "text-primary-blue-3"}`}
        >
          Monthly
        </p>
        <button
          onClick={handleSwitch}
          className={`relative h-5 w-10 rounded-3xl bg-primary-blue-1 after:absolute after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:bg-neutral-Alabaster after:transition-all ${paidOption === "monthly" ? "after:left-1" : "after:left-6"}`}
        ></button>
        <p
          className={`text-sm font-bold ${paidOption === "yearly" ? "text-primary-blue-1" : "text-primary-blue-3"}`}
        >
          Yearly
        </p>
      </div>
    </section>
  );
}

export default Plan;
