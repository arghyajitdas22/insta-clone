import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getIfLiked(postId: string) {
  const user = await getCurrentUser();

  const like = await prisma.like.findUnique({
    where: {
      postId: postId,
    },
  });

  if (like) {
    return true;
  }

  return false;
}
