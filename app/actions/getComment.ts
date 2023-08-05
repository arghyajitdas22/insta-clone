import prisma from "@/app/libs/prismadb";

export default async function getComment(postId: string) {
  try {
    const comments = prisma.comment.findMany({
      where: {
        postId: postId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return comments;
  } catch (error: any) {
    throw new Error(error);
  }
}
