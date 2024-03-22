"use client";

const FORM_STRUCUTRE = [
  {
    id: 1,
    question: "How do you drink your coffee?",
    options: [
      {
        id: 1,
        option: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: 2,
        option: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: 3,
        option: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: 2,
    question: "What type of coffee?",
    options: [
      {
        id: 1,
        option: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: 2,
        option: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: 3,
        option: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 3,
    question: "How much would you like?",
    options: [
      {
        id: 1,
        option: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: 2,
        option: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: 3,
        option: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: 4,
    question: "Want us to grind them?",
    options: [
      {
        id: 1,
        option: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: 2,
        option: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress.",
      },
      {
        id: 3,
        option: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee.",
      },
    ],
  },
  {
    id: 5,
    question: "How often should we deliver?",
    options: [
      {
        id: 1,
        option: "Every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        id: 2,
        option: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        id: 3,
        option: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];

export default function SubscribeForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <form onSubmit={handleSubmit}></form>
    </section>
  );
}
