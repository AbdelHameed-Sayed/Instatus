import React, { memo } from 'react';

export interface SearchBarProps {
  searchBarClassName?: string;
  placeholder: string;
  onChange: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChange,
  searchBarClassName,
}) => {
  return (
    <input
      className={`w-full h-full bg-inherit outline-none px-[13px] py-[14px] placeholder:text-darkGray3 placeholder:text-sm placeholder:font-normal ${searchBarClassName}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default memo(SearchBar);
