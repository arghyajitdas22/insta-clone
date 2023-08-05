import Image from "next/image";
import * as React from "react";

interface IStoryProps {
  userName: string;
  src: string;
}

const Story: React.FunctionComponent<IStoryProps> = ({ userName, src }) => {
  return (
    <div>
      <img
        src={src}
        alt="profile"
        className="h-16 w-16 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer"
      />
      <p className="text-xs w-16 truncate mt-1">{userName}</p>
    </div>
  );
};

export default Story;
