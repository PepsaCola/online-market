import React, { useState, useEffect, useRef } from 'react';
import { FilterBox, CustomSelectTrigger, ArrowIcon, DropdownList, DropdownItem } from './styled';

export const CustomDropdown = ({ options, selectedValue, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  // Find the label of the currently selected option to display it
  const selectedLabel =
    options.find((option) => option.value === selectedValue)?.label || placeholder;

  return (
    <FilterBox ref={dropdownRef}>
      <CustomSelectTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {selectedLabel}
        <ArrowIcon isOpen={isOpen} />
      </CustomSelectTrigger>

      {isOpen && (
        <DropdownList>
          {/* We add the placeholder as a selectable option to reset the filter */}
          <DropdownItem onClick={() => handleSelect(options[0].value)}>
            {options[0].label}
          </DropdownItem>
          {/* Render the rest of the options */}
          {options.slice(1).map((option) => (
            <DropdownItem key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </FilterBox>
  );
};
