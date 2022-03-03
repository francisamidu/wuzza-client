import React, { useState } from "react";
import HomeLayout from "./HomeLayout";
import { generateId } from "../helpers";
import { Feature } from "../interfaces";
import FeatureCard from "./FeatureCard";
import Button from "./Button";

const Features = () => {
  const [features, setFeatures] = useState<Feature[]>([
    {
      id: generateId(),
      icon: "task",
      name: "Task Manager",
      description:
        "A game changer task manager unlike any other. Combining modern look and feel with simplicity this one will surely end up on your favorite list",
    },
    {
      id: generateId(),
      icon: "note",
      name: "Note Taking",
      description:
        "A game changer note taking app with useful features. Combining modern look and feel with simplicity this one will surely end up on your favorite list",
    },
    {
      id: generateId(),
      icon: "projects",
      name: "Project Manager",
      description:
        "The days of using lame apps for managing your projects are long gone. This beautifully crafted project manager surely works!!",
    },
    {
      id: generateId(),
      icon: "scheduler",
      name: "Task scheduler",
      description:
        "Schedule your appointments like a boss. With realtime notifications you won't ever forget your scheduled tasks",
    },
  ]);
  return (
    <HomeLayout>
      <div className="flex flex-col md:block color-dark-blue md:w-1/2 w-11/12 md:text-left text-center items-center ml-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 leading-11">
          Productivity <span className="color-blue italic">solution</span>{" "}
          designed for realistic <span className="color-blue italic">life</span>{" "}
          use
        </h1>
        <p className="leading-7 mb-8">
          Turn your ideas into reality with{" "}
          <span className="color-blue-custom font-bold uppercase">Wuzza</span>.
          With a multitude of features and perks we guarantee simplicity and
          intuitiveness.
        </p>
        <Button text="Start for free" icon={null} className="btn-blue mr-4" />
      </div>
      <div className="features flex flex-row items-center justify-center flex-wrap md:w-1/2 max-w-md m-auto sm:max-w-full">
        {features?.map((feature: Feature) => (
          <FeatureCard feature={feature} key={feature.id} />
        ))}
      </div>
    </HomeLayout>
  );
};

export default Features;
