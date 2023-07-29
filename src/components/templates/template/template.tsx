import React, { memo, useState } from 'react';
import Header from '../../organisms/header/header';
import Button from '../../molecules/button/button';
import Body from '../../organisms/body/body';

import dummyData from '../../../helper/dummyData/dummyData.json';

import { Export, Filter } from '../../../assets/svgs';

function Template() {
  const [isLoading, setIsLoading] = useState(false);
  const [element, setElement] = useState('');

  const data = dummyData;
  return (
    <div className="w-full h-full py-[74px] pl-[67px] pr-[68px] bg-white">
      <Header
        searchBarProps={{
          placeholder: 'Search name, email or action...',
          onChange: () => {},
        }}
        HeaderProps={{ title1: 'Actor', title2: 'ACTION', title3: 'Date' }}
        dropDownProps={{
          svg: <Filter />,
          title: 'Filter',
          dropDownData: ['Actor', 'Action', 'Date'],
          element,
          setElement,
        }}
        exportProps={{
          svg: <Export />,
          title: 'Export',
          onClick: () => {},
        }}
        liveProps={{
          title: 'Live',
          onClick: () => {},
        }}
      />
      <Body data={data} loading={isLoading} />
      <Button
        disabled={isLoading}
        loading={isLoading}
        onClick={() => {
          setIsLoading(true);
        }}
      >
        Load more
      </Button>
    </div>
  );
}

export default memo(Template);
