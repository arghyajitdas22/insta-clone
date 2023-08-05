import * as React from "react";

interface INavBtnProps {
  children: React.ReactNode;
  tag: string;
  onPage: boolean;
}

const NavBtn: React.FunctionComponent<INavBtnProps> = ({
  children,
  tag,
  onPage,
}) => {
  return (
    <button className="p-3 mt-1 flex items-center gap-x-4">
      {children}
      <span
        className={`leading-[20px] text-[16px] text-[#000] ${
          onPage ? "font-bold" : "font-normal"
        }`}
      >
        {tag}
      </span>
    </button>
  );
};

export default NavBtn;
