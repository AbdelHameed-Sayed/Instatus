import React, { ReactNode, memo, useState } from 'react';
import SearchBar, { SearchBarProps } from '../../atoms/searchBar/searchBar';
import HeaderTitles, {
  HeaderTitlesProps,
} from '../../molecules/headerTitles/headerTitles';
import Button from '../../molecules/button/button';
import DropDownButton, {
  DropDownProps,
} from '../../molecules/dropDownButton/dropDownButton';

interface Iprops {
  className?: string;
  HeaderProps: HeaderTitlesProps;
  dropDownProps: DropDownProps;
  searchBarProps: SearchBarProps;
  exportProps: { title: string; svg: ReactNode; onClick: () => void };
  liveProps: { title: string; onClick: () => void };
}

const Header: React.FC<Iprops> = ({
  className,
  searchBarProps,
  HeaderProps,
  dropDownProps,
  exportProps,
  liveProps,
}) => {
  const [isLive, setIsLive] = useState(false);
  return (
    <div
      className={`bg-mediumGray1 pt-[17px] pb-[14px] pl-4 pr-[18px] rounded-t-[15px] ${className}`}
    >
      <div className="flex w-full h-[45px] rounded-lg border border-mediumGray">
        <SearchBar
          placeholder={searchBarProps.placeholder}
          onChange={searchBarProps.onChange}
          searchBarClassName={searchBarProps.searchBarClassName}
        />

        <DropDownButton
          svg={dropDownProps.svg}
          title={dropDownProps.title}
          dropDownData={dropDownProps.dropDownData}
          element={dropDownProps.element}
          setElement={dropDownProps.setElement}
        />

        <Button
          className="flex items-center  gap-x-[5.34px] border-0 border-r p-[15px] !h-full rounded-b-none !w-fit text-xs font-normal text-darkestGray active:!bg-mediumGray4"
          onClick={exportProps.onClick}
        >
          {exportProps.svg}
          <p>{exportProps.title}</p>
        </Button>

        <Button
          className="flex items-center  gap-x-1 p-[15px] border-0 !h-full !rounded-bl-none rounded-tr-lg rounded-br-lg !w-fit text-xs font-normal text-darkestGray !bg-inherit active:!bg-mediumGray4"
          onClick={() => {
            setIsLive(!isLive);
            liveProps.onClick();
          }}
        >
          <div
            className={`h-3 w-3 bg-brownStone rounded-full ${
              isLive && 'animate-pulse'
            }`}
          />
          <p>{liveProps.title}</p>
        </Button>
      </div>

      <HeaderTitles
        title1={HeaderProps.title1}
        title2={HeaderProps.title2}
        title3={HeaderProps.title3}
        titlesContainerClassName={HeaderProps.titlesContainerClassName}
      />
    </div>
  );
};

export default memo(Header);
