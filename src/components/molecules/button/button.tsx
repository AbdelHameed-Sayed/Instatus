import React, { memo } from 'react';

interface Iprops
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<Iprops> = ({
  children,
  onClick,
  loading = false,
  disabled = false,
  className,
  ...restProps
}) => {
  return (
    <button
      className={`inline-flex justify-center items-center bg-mediumGray1 w-full h-[52px] rounded-b-[13px] active:bg-mediumGray3 disabled:bg-mediumGray3 disabled:cursor-not-allowed text-darkGray1 leading-[17px] font-semibold text-sm border border-t-0 transition ease-in-out duration-150 ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-darkGray1 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default memo(Button);
