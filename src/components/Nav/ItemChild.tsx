import React, { useEffect } from "react";
import { NavLink, useMatch } from "react-router-dom";

interface NavItemChild {
  name: string;
  path: string;
}

const ItemChild = ({
  itemChild,
  setMatch,
}: {
  itemChild: NavItemChild;
  setMatch: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const match = useMatch(itemChild.path);
  useEffect(() => {
    if (match) {
      setMatch(true);
    }
  });
  return (
    <li>
      <NavLink
        to={itemChild.path}
        className={({ isActive }) => {
          const activeClass = isActive ? "bg-indigo-700" : "";
          return `pl-11 flex items-center py-3 ${activeClass} hover:bg-indigo-700`;
        }}
      >
        <span>{itemChild.name}</span>
      </NavLink>
    </li>
  );
};

export default ItemChild;
