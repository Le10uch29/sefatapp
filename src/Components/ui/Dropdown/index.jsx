"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./_dropDown.module.scss";

const Dropdown = ({
  items,
  ButtonComponent,
  placeholder = "Choose",
  Callback = () => "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    Callback();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      {ButtonComponent ? (
        <ButtonComponent
          onClick={toggleDropdown}
          text={selectedItem ? selectedItem.label : placeholder}
        />
      ) : (
        <button onClick={toggleDropdown} className={styles["dropdown-button"]}>
          {selectedItem ? selectedItem.label : "Seçiniz"}
        </button>
      )}

      {isOpen && (
        <ul className={styles["dropdown-menu"]}>
          {items.map((item) => (
            <li
              key={item.value}
              onClick={() => selectItem(item)}
              className={styles["dropdown-item"]}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
