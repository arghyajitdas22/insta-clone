import * as React from "react";

interface ISaveProps {}

const Save: React.FunctionComponent<ISaveProps> = (props) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Save"
      className="x1lliihq x1n2onr6"
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Save</title>
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2px"
      ></polygon>
    </svg>
  );
};

export default Save;
