import React, { useState } from "react";
// noter: ? pour déclarer une propriété facultative
interface IProps {
  data: string[];
  onClick?: (index: number) => {} | void;
  selected?: number;
}
function Menu(props: IProps) {
  const [curIndex, setCurIndex] = useState(props.selected);
  const handelToogle = (index: number) => {
    setCurIndex(index);
  };
  const liElm = props.data.map((label, index) => (
    <li
      className={curIndex === index ? "activated" : undefined}
      onClick={() => {
        handelToogle(index);
        if (props.onClick) props.onClick(index);
      }}
    >
      {label}
    </li>
  ));
  return <ul>{liElm}</ul>;
}

export default Menu;
