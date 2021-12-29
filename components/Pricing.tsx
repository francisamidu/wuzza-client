import React, { useState } from "react";
import { generateId } from "../helpers";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [prices, setPrices] = useState([
    {
      id: generateId(),
      plan: "Starter",
      cost: 9,
      features: [
        "Limited projects and schedules(250 per month)",
        "Limited collaborations (5 people)",
        "Limited tasks (25 per week)",
        "20 Shares per day",
        "Custom Fonts",
        "Email and Slack",
        "Analytics and Reporting",
      ],
    },
    {
      id: generateId(),
      plan: "Unlimited",
      cost: 59,
      features: [
        "Dark Mode",
        "Custom Notificatins",
        "Whatsapp Integration",
        "Unlimited Projects",
        "Unlimited Shares",
        "Email and Slack",
        "Push Notifications",
        "Unlimited Customization",
      ],
    },
  ]);
  return (
    <section className="grid grid-cols-1 bg-gray-200 items-center">
      <h1 className="col-start-1 col-end-2 text-3xl font-bold text-center max-w-md mx-auto my-4 py-4">
        The easiest and fastest way to get work done
      </h1>
      <div className="col-start-1 col-end-2 flex md:flex-row flex-col justify-center m-auto p-6 md:w-3/5 w-full">
        {prices.map((price) => (
          <PricingCard priceItem={price} key={price.id} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
