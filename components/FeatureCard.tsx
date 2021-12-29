import React from "react";
import { AiFillSchedule } from "react-icons/ai";
import {
  BiCalendar,
  BiTask,
  BiNote,
  BiLayout,
  BiArchive,
} from "react-icons/bi";
import { Feature } from "../interfaces";
import Icon from "./Icon";

type FeatureCardProps = {
  feature: Feature;
};
const FeatureCard = (props: FeatureCardProps) => {
  const {
    feature: { description, icon, name },
  } = props;

  return (
    <div className="bg-white w-320 rounded-md shadow p-4 feature mr-4 mb-4 flex flex-col items-center">
      <Icon icon={icon} />
      <div className="bg-blue-custom text-white text-sm font-bold px-4 rounded-xl mt-4">
        New
      </div>
      <h1 className="text-2xl color-dark-blue my-4 font-bold capitalize">
        {name}
      </h1>
      <p className="text-gray-900 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
