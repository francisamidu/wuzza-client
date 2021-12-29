import { Dispatch, SetStateAction } from "react";
import { Tab } from ".";

type TaskTabProps = {
  tab?: Tab;
  tabs: Tab[];
  setTabs: Dispatch<SetStateAction<Tab[]>>;
};

export default TaskTabProps;
