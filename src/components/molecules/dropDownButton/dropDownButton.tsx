import React, { ReactNode, memo, useRef, useState } from 'react';
import Button from '../button/button';
import useOnClickOutside from '../../../helper/customHooks/useOutsideClick';

export interface DropDownProps {
  svg: ReactNode;
  title: string;
  dropDownData: string[];
  element: string;
  setElement: React.Dispatch<React.SetStateAction<string>>;
}

const DropDownButton: React.FC<DropDownProps> = ({
  svg,
  title,
  dropDownData,
  element,
  setElement,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => {
    setShowDropDown(false);
  });

  const checkHandler = (elment: string) => {
    if (element === elment) {
      setElement('');
    } else {
      setElement(elment);
    }
    setShowDropDown(!showDropDown);
  };
  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        className="relative flex items-center gap-x-[4.5px] border-0 border-x p-[15px] !h-full rounded-b-none w-fit text-xs font-normal text-darkestGray active:!bg-mediumGray4"
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
      >
        {svg}
        <p>{title}</p>
      </Button>

      {showDropDown && (
        <div className="absolute right-0 top-10 z-10 mt-2 w-full bg-mediumGray1 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {dropDownData?.map((el, idx) => (
              <button
                key={idx}
                className="w-full px-4 py-2 text-xs font-normal text-darkestGray hover:bg-mediumGray5 active:bg-mediumGray4 cursor-default"
              >
                <div className="flex">
                  <input
                    id={el}
                    type="checkbox"
                    checked={element === el}
                    onChange={() => {
                      checkHandler(el);
                    }}
                    className="hover:cursor-pointer"
                  />

                  <label
                    htmlFor={el}
                    className="ml-2 font-medium outline-none border-none hover:cursor-pointer"
                  >
                    {el}
                  </label>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(DropDownButton);
