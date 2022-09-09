import React, { } from "react";
import Item from "./Item";

interface Nav {
  title: string;
  items: NavItem[];
}

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

interface Props {
  nav: Nav;
}

const List = (props: Props) => {
  const {nav}= props;
  return (
    <li>
      <div className={`text-sm text-gray-400 my-2 ml-2`}>{nav.title}</div>
      <ul>
        {nav.items.map(n =>
          <Item navItem={n} key={n.name} />
        )}
      </ul>
    </li>
  );
};

export default List;
