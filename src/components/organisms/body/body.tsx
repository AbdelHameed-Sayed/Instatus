import React, { memo, useState } from 'react';
import { RightArrow } from '../../../assets/svgs';
import DynamicCharacterSVG from '../../atoms/dynamicCharacterSVG/dynamicCharacterSVG';
import Detsils, { Data } from '../details/detsils';
import { dateFormatHandler } from '../../../helper/helper';

interface Iprops {
  className?: string;
  data: Data[];
  loading: boolean;
}

const Body: React.FC<Iprops> = ({ data, className, loading }) => {
  const [clickedItemID, setClickedItemID] = useState('');
  return (
    <div className={`pt-[10px] pb-[12px]  border-l border-r ${className}`}>
      {data?.map((object, idx) => {
        const firstCharacter = object.target_name
          ?.trim()
          .charAt(0)
          .toUpperCase();

        return (
          <div
            key={object.id}
            onClick={() => {
              setClickedItemID(object.id);
            }}
          >
            {clickedItemID !== object.id ? (
              <div className="grid grid-flow-col grid-cols-3 text-sm leading-[17px] font-normal hover:bg-lightGray1 pt-[14px] pb-[15px] pl-[22px] pr-[25px] items-center hover:cursor-pointer text-black1">
                <div className="flex gap-x-[11px] items-center">
                  <DynamicCharacterSVG character={firstCharacter} />
                  <p>{object.target_name}</p>
                </div>
                <p className="ml-2">{object.action.name}</p>
                <p className="ml-2">{dateFormatHandler(object.occurred_at)}</p>
                <RightArrow />
              </div>
            ) : (
              <Detsils
                title1="Actor"
                title2="ACTION"
                title3="Date"
                title4="METADATA"
                title5="TARGET"
                titlesContainerClassName="!font-medium !text-darkGray4 mt-[30px]"
                detsilsContainerClassName={`${idx === 0 && 'mt-3'}`}
                data={object}
              />
            )}
          </div>
        );
      })}

      {loading && (
        <div className="grid grid-flow-col grid-cols-3 pt-[14px] pb-[15px] pl-[22px] pr-[25px] items-center animate-pulse">
          <div className="flex gap-x-[11px] items-center">
            <div className="w-[25px] h-[25px] rounded-full bg-lightGray" />
            <div className="w-full max-w-[132px] h-[14px]  bg-lightGray" />
          </div>
          <div className="h-[14px] w-full max-w-[188px] bg-lightGray" />
          <div className="h-[14px] w-full max-w-[100px] bg-lightGray" />
          <RightArrow />
        </div>
      )}
    </div>
  );
};

export default memo(Body);
