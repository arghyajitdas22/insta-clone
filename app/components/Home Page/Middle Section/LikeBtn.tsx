"use client";
import * as React from "react";
import Like from "./Like";
import Unlike from "./Unlike";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ILikeBtnProps {
  hasLiked: boolean;
  postId: string;
  userId?: string;
}

const LikeBtn: React.FunctionComponent<ILikeBtnProps> = ({
  hasLiked,
  postId,
  userId,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const toggleLike = () => {
    setIsLoading(true);

    const data = {
      postId,
      userId,
    };

    axios
      .post("/api/like", data)
      .then(() => {
        setIsLoading(false);
        router.refresh();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button onClick={toggleLike} disabled={isLoading}>
      {hasLiked ? <Unlike /> : <Like />}
    </button>
  );
};

export default LikeBtn;
