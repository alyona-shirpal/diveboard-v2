import React, { FC, useRef, useState } from "react";
import styles from "./style.module.scss";
import { DropdownItem } from "./DropdownItem";
import { Icon } from "../Icons/Icon";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type Props = {
  title: string;
  imgName: string;
  items: {
    id: number | string;
    svgItem: JSX.Element;
    title: string;
    link: string;
  }[];
};

export const Dropdown: FC<Props> = ({ title, imgName, items }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const outsideClickHandler = (ev: Event): void => {
    if (ev.target !== dropdownRef.current) {
      setOpen(false);
    }
  };

  useOutsideClick(outsideClickHandler, dropdownRef);

  const dropdownElements = items.map((item) => (
    <DropdownItem key={item.id} title={item.title} link={item.link}>
      {item.svgItem}
    </DropdownItem>
  ));
  return (
    <div
      ref={dropdownRef}
      onClick={() => {
        setOpen(!open);
      }}
      className={styles.dropdown}
    >
      <div className={styles.dropdownButton}>
        <Icon iconName={imgName} />
        <span className={styles.title}>{title}</span>
        <Icon iconName="dropdown" size={10} />
      </div>

      {open && <div className={styles.itemsWrapper}>{dropdownElements}</div>}
    </div>
  );
};
