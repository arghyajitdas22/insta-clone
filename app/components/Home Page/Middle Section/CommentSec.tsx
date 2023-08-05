"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

interface ICommentsecProps {
  postId: string;
  userId?: string;
}

const Commentsec: React.FunctionComponent<ICommentsecProps> = ({
  postId,
  userId,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [val, setVal] = React.useState<string>();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleCommentPost = () => {
    const data = {
      body: val,
      userId: userId,
      postId: postId,
    };

    setIsLoading(true);

    axios
      .post("/api/comment", data)
      .then(() => {
        setVal("");
        router.refresh();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-between gap-1">
      <input
        value={val}
        onChange={handleInputChange}
        placeholder="Add a comment"
        disabled={isLoading}
        className="h-10 pl-5 flex items-center border-none placeholder:text-gray-400 text-black text-[12px] focus:border-none focus:outline-none w-full"
      />
      <button
        onClick={handleCommentPost}
        disabled={isLoading}
        className=" text-gray-400 text-[12px] text-center h-10 pr-1"
      >
        Post
      </button>
    </div>
  );
};

export default Commentsec;
