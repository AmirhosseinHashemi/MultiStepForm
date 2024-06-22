function PlanItem({ planInfo, paymentMethod, isActive, handleSelectedPlan }) {
  const {
    name,
    price: { yearly: yrPrice, monthly: moPrice },
    icon,
  } = planInfo;

  const paymentMethodAbb = paymentMethod === "yearly" ? "yr" : "mo";
  const displayedPrice = paymentMethod === "yearly" ? yrPrice : moPrice;

  return (
    <div
      onClick={() => handleSelectedPlan(name)}
      className={`mt-3 flex cursor-pointer gap-2 rounded-md border p-3 align-top ${isActive ? "border-primary-blue-2 bg-neutral-Magnolia" : "border-neutral-gray-2"}`}
    >
      <img className="h-10 w-10" src={icon} alt="" />
      <div>
        <h3 className="text-sm font-medium text-primary-blue-1">{name}</h3>
        <p className="text-sm font-normal text-neutral-gray-1">
          ${displayedPrice}/{paymentMethodAbb}
        </p>
        {paymentMethod === "yearly" && (
          <p className="text-sm font-normal text-primary-blue-1">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
}

export default PlanItem;
