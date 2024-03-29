import * as React from "react";

interface IExploreProps {}

const Explore: React.FunctionComponent<IExploreProps> = (props) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Explore"
      className="_ab6-"
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <polygon
        fill="none"
        points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2px"
      ></polygon>
      <polygon
        fill-rule="evenodd"
        points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
      ></polygon>
      <circle
        cx="12.001"
        cy="12.005"
        fill="none"
        r="10.5"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2px"
      ></circle>
    </svg>
  );
};

export default Explore;
