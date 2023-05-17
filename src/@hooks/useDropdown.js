import { useEffect, useState, useRef } from "react";

const useDropdown = (initialOption) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const ref = useRef(null);

  const toggleDropdownHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOptionHandler = (name, value) => {
    setSelectedOption({
      name,
      value
    });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return {
    ref,
    isOpen,
    selected: selectedOption,
    onToggle: toggleDropdownHandler,
    onSelect: selectOptionHandler
  };
};

export default useDropdown;
