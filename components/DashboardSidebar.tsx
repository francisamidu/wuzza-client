import React, { useEffect, useState } from "react";
import Link from "next/link";
import router from "next/router";
import { SidebarLink as ISidebarLink } from "../types";

import {
  IoHomeOutline,
  IoArchiveOutline,
  IoCalendarOutline,
  IoFileTrayOutline,
  IoWalletOutline,
  IoLogOutOutline,
  IoAccessibilityOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { generateId } from "../helpers";
import SidebarLink from "./SidebarLink";
import Button from "./Button";

const DashboardSidebar = () => {
  const [links, setLinks] = useState<ISidebarLink[]>([
    {
      active: true,
      id: generateId(),
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <IoHomeOutline className="text-1xl transition-colors duration-200" />
      ),
    },
    {
      active: false,
      id: generateId(),
      name: "Tasks",
      path: "/tasks",
      icon: (
        <IoArchiveOutline className="text-1xl transition-colors duration-200" />
      ),
    },
    {
      active: false,
      id: generateId(),
      name: "Calendar",
      path: "/calendar",
      icon: (
        <IoCalendarOutline className="text-1xl transition-colors duration-200" />
      ),
    },
    {
      active: false,
      id: generateId(),
      name: "Projects",
      path: "/projects",
      icon: (
        <IoFileTrayOutline className="text-1xl transition-colors duration-200" />
      ),
    },
    {
      active: false,
      id: generateId(),
      name: "Budget",
      path: "/budget",
      icon: (
        <IoWalletOutline className="text-1xl transition-colors duration-200" />
      ),
    },
    {
      active: false,
      id: generateId(),
      name: "Settings",
      path: "/settings",
      icon: (
        <IoSettingsOutline className="text-1xl transition-colors duration-200" />
      ),
    },
  ]);
  const { pathname } = router;
  useEffect(() => {
    setLinks(
      links.map((link) => {
        if (link.path === pathname) {
          link.active = true;
        } else {
          link.active = false;
        }
        if (!pathname) {
          link.active = true;
        }
        return link;
      })
    );
  }, [pathname]);

  return (
    <div className="sidebar col-start-1 col-end-2 sticky  bg-white shadow-md flex flex-col">
      <h1 className="py-2 pt-4 mb-4">
        <Link href="/">
          <a className="font-bold text-center text-2xl uppercase block">
            Wuzza
          </a>
        </Link>
      </h1>
      <div className="flex flex-col items-start py-6 px-4">
        {links?.map((link) => (
          <SidebarLink
            key={link.id}
            link={link}
            links={links}
            setLinks={setLinks}
          />
        ))}
      </div>
      <div className="justify-self-end bg-blue-100 w-11/12 m-auto flex flex-col items-center p-4 text-center rounded-md">
        <IoAccessibilityOutline className="text-3xl color-blue my-2" />
        <h2 className="font-bold capitalize message mb-2">Go Premium Now</h2>
        <p className="text-center text-gray-500 text-sm">
          Lets explore the full potential of your productivity
        </p>
        <Button
          text="Upgrade now"
          icon={null}
          className="btn-blue rounded-xl text-sm"
        />
      </div>
      <Link href="/dashboard">
        <a className="flex w-full flex-row justify-start items-center py-4 px-6">
          <IoLogOutOutline className="text-2xl cursor-pointer" />
          <span className="text-1x capitalize ml-4">Logout</span>
        </a>
      </Link>
    </div>
  );
};

export default DashboardSidebar;
