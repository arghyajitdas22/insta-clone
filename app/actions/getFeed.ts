import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getFeed() {
  try {
    const currentUser = await getCurrentUser();

    const posts = await prisma.post.findMany({});

    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
}
