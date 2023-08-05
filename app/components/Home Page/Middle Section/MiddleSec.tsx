import * as React from "react";
import Stories from "./Stories/Stories";
import getFeed from "@/app/actions/getFeed";
import PostCard from "./PostCard";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IMiddleSecProps {}

const MiddleSec: React.FunctionComponent<IMiddleSecProps> = async (props) => {
  const posts = await getFeed();
  const currentUser = await getCurrentUser();

  return (
    <div>
      <Stories />
      {posts.length === 0 ? (
        <div className="mt-[40px] ml-[210px]">No Posts</div>
      ) : (
        <div className="mt-[40px] ml-[210px]">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              profileImage={currentUser?.profileImage}
              username={currentUser?.username}
              createdAt={post.createdAt.toISOString()}
              image={post.image}
              caption={post.caption}
              userId={currentUser?.id}
              postId={post.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MiddleSec;
