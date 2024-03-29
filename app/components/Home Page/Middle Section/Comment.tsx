import * as React from "react";

interface ICommentProps {}

const Comment: React.FunctionComponent<ICommentProps> = (props) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Comment"
      className="x1lliihq x1n2onr6"
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Comment</title>
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="#000000"
        stroke-linejoin="round"
        stroke-width="2px"
      ></path>
    </svg>
  );
};

export default Comment;
