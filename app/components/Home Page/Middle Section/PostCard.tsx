import Image from "next/image";
import * as React from "react";
import Avatar from "./Avatar";
import MoreOptions from "./MoreOptions";
import Comment from "./Comment";
import Share from "./Share";
import Save from "./Save";
import getIfLiked from "@/app/actions/getIfLiked";
import LikeBtn from "./LikeBtn";
import Commentsec from "./CommentSec";
import getComment from "@/app/actions/getComment";

interface IPostCardProps {
  profileImage?: string | null;
  username?: string | null;
  createdAt: string;
  image: string;
  caption: string | null;
  userId?: string;
  postId: string;
}

const PostCard: React.FunctionComponent<IPostCardProps> = async ({
  profileImage,
  username,
  createdAt,
  image,
  caption,
  userId,
  postId,
}) => {
  const hasLiked = await getIfLiked(postId);
  const comments = await getComment(postId);

  return (
    <div className="w-full max-w-[500px] border-b border-[#dadada] mb-3">
      <header className="flex items-center justify-between w-full px-1">
        <div className="flex gap-x-[6px] items-center">
          {profileImage ? (
            <Image
              alt="profile-image"
              src={profileImage}
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <Avatar />
          )}
          <span className="text-[14px] text-[#262626] font-semibold leading-[18px] whitespace-nowrap">
            {username}
          </span>
        </div>
        <div>
          <MoreOptions />
        </div>
      </header>

      <Image
        alt="post-img"
        src={image}
        width={500}
        height={500}
        className="rounded-[8px] my-2"
      />

      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-x-3">
          <LikeBtn hasLiked={hasLiked} postId={postId} userId={userId} />
          <Comment />
          <Share />
        </div>

        <div>
          <Save />
        </div>
      </div>

      {caption && (
        <div className="flex items-center gap-x-1 mb-2">
          <span className="text-[14px] text-[#000] font-semibold">
            {username}
          </span>
          <p className="text-[14px] text-[#000] font-normal max-w-[300px] truncate">
            {caption}
          </p>
        </div>
      )}

      {comments.map((comment) => (
        <div className="flex gap-1 items-center" key={comment.id}>
          <span className="text-[#000] text-[12px] font-semibold">
            {username}
          </span>
          <p className="text-[#000] text-[12px] font-normal max-w-[150px] truncate">
            {comment.body}
          </p>
        </div>
      ))}

      <Commentsec postId={postId} userId={userId} />
    </div>
  );
};

export default PostCard;
