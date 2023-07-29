import React, { memo } from 'react';

export interface HeaderTitlesProps {
  title1: string;
  title2: string;
  title3?: string;
  titlesContainerClassName?: string;
}

const HeaderTitles: React.FC<HeaderTitlesProps> = ({
  title1,
  title2,
  title3,
  titlesContainerClassName,
}) => {
  return (
    <div
      className={`grid grid-flow-col grid-cols-3 mt-[15px] ml-[7px] text-darkGray1 text-sm leading-[17px] font-semibold ${titlesContainerClassName}`}
    >
      <p>{title1}</p>
      <p>{title2}</p>
      <p>{title3}</p>
    </div>
  );
};

export default memo(HeaderTitles);
