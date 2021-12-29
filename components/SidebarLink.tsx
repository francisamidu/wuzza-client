import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import Link from "next/link";
import router from "next/router";
import type { SidebarLink as ISidebarLink } from "../types";

type SidebarLinkProps = {
  setLinks: Dispatch<SetStateAction<ISidebarLink[]>>;
  links: ISidebarLink[];
  link: ISidebarLink;
};
const SidebarLink = (props: SidebarLinkProps) => {
  const {
    link: { active, icon, id, name, path },
    links,
    setLinks,
  } = props;
  const handleClick = (event: MouseEvent, id: string) => {
    event.preventDefault();
    setLinks(() => {
      return links.map((link: any) => {
        if (link.id === id) {
          link.active = true;
          return link;
        }
        link.active = false;
        return link;
      });
    });
    if (name === "logout") {
    }
    // router.push(path);
  };
  return (
    <Link href={path}>
      <a
        className={
          active
            ? "transition-colors duration-200 bg-blue-100 flex w-full flex-row justify-start items-center py-3 px-6 rounded-xl color-blue"
            : "flex w-full flex-row justify-start items-center py-3 px-6"
        }
        onClick={(event: MouseEvent) => handleClick(event, id)}
      >
        {icon}
        <span
          className={
            active
              ? "transition-colors duration-200 text-1x capitalize ml-4"
              : "text-1x capitalize ml-4"
          }
        >
          {name}
        </span>
      </a>
    </Link>
  );
};

export default SidebarLink;
