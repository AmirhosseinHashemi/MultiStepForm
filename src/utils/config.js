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

export const ADD_ONS = [
  {
    id: 0,
    name: "Online service",
    description: "Access to multiplayer games",
    price: {
      yearly: 10,
      monthly: 1,
    },
  },

  {
    id: 1,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      yearly: 20,
      monthly: 2,
    },
  },

  {
    id: 2,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      yearly: 20,
      monthly: 2,
    },
  },
];
