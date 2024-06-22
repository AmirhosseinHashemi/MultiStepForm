export const PLANS = [
  {
    id: 0,
    name: "Arcade",
    icon: "/images/icon-arcade.svg",
    price: {
      yearly: 90,
      monthly: 9,
    },
  },

  {
    id: 1,
    name: "Advanced",
    icon: "/images/icon-advanced.svg",
    price: {
      yearly: 120,
      monthly: 12,
    },
  },

  {
    id: 2,
    name: "pro",
    icon: "/images/icon-pro.svg",
    price: {
      yearly: 150,
      monthly: 15,
    },
  },
];

export const DEFAULT_SELECTED_PLAN = PLANS[0].name;

export const DEFAULT_PAYMENT_METHOD = "monthly";
