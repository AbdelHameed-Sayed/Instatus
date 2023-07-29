import React, { memo } from 'react';
import HeaderTitles, {
  HeaderTitlesProps,
} from '../../molecules/headerTitles/headerTitles';
import { dateFormatHandler } from '../../../helper/helper';

export interface Data {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action: {
    id: string;
    object: string;
    name: string;
  };
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string;
  metadata: {
    redirect: string;
    description: string;
    x_request_id: string;
  };
}

interface Iprops extends HeaderTitlesProps {
  title4: string;
  title5: string;
  detsilsContainerClassName?: string;
  data: Data;
}

const Detsils: React.FC<Iprops> = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  titlesContainerClassName,
  detsilsContainerClassName,
  data,
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-mediumGray2 w-[103.322%] max-w-[100vw] pl-[3.23%] pr-[3.45%] pb-[30px] -ml-[1.661%] h-full mb-[13px] ${detsilsContainerClassName}`}
    >
      <HeaderTitles
        title1={title1}
        title2={title2}
        title3={title3}
        titlesContainerClassName={titlesContainerClassName}
      />

      <div
        className={`grid grid-flow-col grid-cols-3 mt-[16px] ml-[7px] text-darkGray1 text-sm leading-[17px] font-semibold ${titlesContainerClassName}`}
      >
        <div
          className={`flex gap-x-[38px] ${
            !data.actor_name &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.actor_name && (
            <>
              <p>Name</p>
              <p className="!text-black !font-normal">{data.actor_name}</p>
            </>
          )}
        </div>
        <div
          className={`flex gap-x-[38px] ${
            !data.action.name &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.action.name && (
            <>
              <p>Name</p>
              <p className="!text-black !font-normal">{data.action.name}</p>
            </>
          )}
        </div>
        <div
          className={`flex gap-x-[29px] ${
            !data.occurred_at &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.occurred_at && (
            <>
              <p>Readable</p>
              <p className="!text-black !font-normal">
                {dateFormatHandler(data.occurred_at)}
              </p>
            </>
          )}
        </div>
      </div>

      <div
        className={`grid grid-flow-col grid-cols-3 mt-[12px] ml-[7px] text-darkGray1 text-sm leading-[17px] font-semibold ${titlesContainerClassName}`}
      >
        <div
          className={`flex gap-x-[41px] ${
            !data.target_name &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.target_name && (
            <>
              <p>Email</p>
              <p className="!text-black !font-normal">{data.target_name}</p>
            </>
          )}
        </div>
        <div
          className={`flex gap-x-[33px] ${
            !data.action.object &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.action.object && (
            <>
              <p>Object</p>
              <p className="!text-black !font-normal">{data.action.object}</p>
            </>
          )}
        </div>
      </div>

      <div
        className={`grid grid-flow-col grid-cols-3 mt-[12px] ml-[7px] text-darkGray1 text-sm leading-[17px] font-semibold ${titlesContainerClassName}`}
      >
        <div
          className={`flex gap-x-[64px] ${
            !data.actor_id &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.action.id && (
            <>
              <p>ID</p>
              <p className="!text-black !font-normal">{data.action.id}</p>
            </>
          )}
        </div>
        <div
          className={`flex gap-x-[64px] ${
            !data.target_name &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.action.id && (
            <>
              <p>ID</p>
              <p className="!text-black !font-normal">{data.action.id}</p>
            </>
          )}
        </div>
      </div>

      <HeaderTitles
        title1={title4}
        title2={title5}
        titlesContainerClassName={`${titlesContainerClassName} mt-[36px] !text-[#787878]`}
      />
      <div
        className={`grid grid-flow-col grid-cols-3 mt-[12px] ml-[7px] text-darkGray1 text-sm leading-[17px] font-semibold ${titlesContainerClassName}`}
      >
        <div
          className={`flex gap-x-[64px] ${
            !data.metadata.x_request_id &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.metadata.x_request_id && (
            <>
              <p>ID</p>
              <p className="!text-black !font-normal">
                {data.metadata.x_request_id}
              </p>
            </>
          )}
        </div>
        <div
          className={`flex gap-x-[64px]  ${
            !data.target_id &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.target_id && (
            <>
              <p>ID</p>
              <p className="!text-black !font-normal">{data.target_id}</p>
            </>
          )}
        </div>
      </div>

      <div
        className={`grid grid-flow-col grid-cols-3 mt-[12px] ml-[7px] text-darkGray1 text-sm leading-[17px] font-semibold ${titlesContainerClassName}`}
      >
        <div
          className={`flex gap-x-[26px] ${
            !data.metadata.redirect &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.metadata.redirect && (
            <>
              <p>redirect</p>
              <p className="!text-black !font-normal">
                {data.metadata.redirect}
              </p>
            </>
          )}
        </div>
        <div
          className={`flex gap-x-[39px] ${
            !data.target_name &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.target_name && (
            <>
              <p>Name</p>
              <p className="!text-black !font-normal">{data.target_name}</p>
            </>
          )}
        </div>
      </div>

      <div
        className={`grid grid-flow-col grid-cols-3 mt-[12px] ml-[7px] text-darkGray1 text-sm leading-[17px] font-semibold ${titlesContainerClassName}`}
      >
        <div
          className={`flex gap-x-[3px] ${
            !data.metadata.description &&
            'h-[14px] w-full max-w-[138px] bg-lightGray animate-pulse'
          }`}
        >
          {data.metadata.description && (
            <>
              <p>description</p>
              <p className="!text-black !font-normal">
                {data.metadata.description}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Detsils);
