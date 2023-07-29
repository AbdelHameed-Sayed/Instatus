import React, { memo, useEffect, useState } from 'react';

interface Iprops {
  character: string;
  stopColor1?: string;
  stopColor2?: string;
}

const DynamicCharacterSVG: React.FC<Iprops> = ({
  character,
  stopColor1,
  stopColor2,
}) => {
  const [gradientId, setGradientId] = useState('');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const id = `gradient-${Math.random().toString(36).slice(2, 9)}`;
    setGradientId(id);
  }, []);

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="12.5" fill={`url(#${gradientId})`} />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="12"
        fontWeight="700"
        fill="white"
      >
        {character}
      </text>
      <defs>
        <linearGradient
          id={`${gradientId}`}
          x1="4.01786"
          y1="3.125"
          x2="20.5357"
          y2="21.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor={
              stopColor1 ||
              (character === 'A'
                ? '#F3994A'
                : character === 'B'
                ? '#9347DF'
                : character === 'O'
                ? '#8947FE'
                : getRandomColor())
            }
          />
          <stop
            offset="1"
            stopColor={
              stopColor2 ||
              (character === 'A'
                ? '#B325E2'
                : character === 'B'
                ? '#EC1A46'
                : character === 'O'
                ? '#B319FE'
                : getRandomColor())
            }
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(DynamicCharacterSVG);
