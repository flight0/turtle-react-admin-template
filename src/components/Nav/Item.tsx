import React, { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import ItemChild from "./ItemChild";

interface NavItem {
  name: string;
  icon: JSX.Element;
  path?: string;
  child?: NavItemChild[];
}

interface NavItemChild {
  name: string;
  path: string;
}

const Item = ({
  navItem,
}: {
  navItem: NavItem;
}) => {
  const childrenWrapperRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLUListElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);

  const toggleNavItem = (e: React.MouseEvent<HTMLElement>) => {
    const childrenRefHeight = childrenRef.current?.clientHeight;
    const wrapperHeight = childrenWrapperRef.current?.style.height;

    if (wrapperHeight === "0px") {
      (
        childrenWrapperRef.current as HTMLDivElement
      ).style.height = `${childrenRefHeight}px`;
    } else {
      (childrenWrapperRef.current as HTMLDivElement).style.height = `0px`;
    }

    if (chevronRef.current?.classList.contains("rotate-0")) {
      chevronRef.current?.classList.replace("rotate-0", "rotate-90");
    } else {
      chevronRef.current?.classList.replace("rotate-90", "rotate-0");
    }
  };
  const [match, setMatch] = useState<Boolean>(false);
  const [wHeight, setWHeight] = useState(0);
  useEffect(() => {
    setWHeight(childrenRef.current?.clientHeight as number);
  }, []);

  if (navItem.child) {
    return (
      <li key={navItem.name}>
        <div
          className="px-4 flex items-center justify-between py-3 cursor-pointer hover:bg-indigo-700"
          onClick={toggleNavItem}
        >
          <div className="flex items-center">
            {navItem.icon}
            <span className="ml-2 text-sm text-white">{navItem.name}</span>
          </div>
          <ChevronRightIcon
            className={`h-4 w-4 stroke-white ${
              match ? "rotate-90" : "rotate-0"
            } transition-transform duration-500`}
            ref={chevronRef}
          />
        </div>
        <div
          className={`overflow-hidden transition-all duration-500`}
          ref={childrenWrapperRef}
          style={{ height: `${(match) ? wHeight : 0}px` }}
        >
          <ul className="text-sm" ref={childrenRef}>
            {navItem.child.map((i) => (
              <ItemChild itemChild={i} key={i.name} setMatch={setMatch} />
            ))}
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li key={navItem.name}>
        <NavLink
          to={navItem.path as string}
          className={({ isActive }) => {
            const activeClass = isActive ? "bg-indigo-700" : "";
            return `px-4 flex items-center justify-between py-3 ${activeClass} hover:bg-indigo-700`;
          }}
        >
          <div className="flex items-center">
            {navItem.icon}
            <span className="ml-2 text-sm text-white">{navItem.name}</span>
          </div>
        </NavLink>
      </li>
    );
  }
};

export default Item;
