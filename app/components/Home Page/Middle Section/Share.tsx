import * as React from "react";

interface IShareProps {}

const Share: React.FunctionComponent<IShareProps> = (props) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Share Post"
      className="x1lliihq x1n2onr6"
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Share Post</title>
      <line
        fill="none"
        stroke="#000000"
        stroke-linejoin="round"
        stroke-width="2px"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke="#000000"
        stroke-linejoin="round"
        stroke-width="2px"
      ></polygon>
    </svg>
  );
};

export default Share;
