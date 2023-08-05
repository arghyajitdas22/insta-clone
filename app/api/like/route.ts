import getCurrentUser from "@/app/actions/getCurrentUser";
import getIfLiked from "@/app/actions/getIfLiked";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { postId, userId } = body;

  const isLiked = await getIfLiked(postId);
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  if (isLiked) {
    const like = await prisma.like.delete({
      where: {
        postId: postId,
      },
    });

    return NextResponse.json(like);
  } else {
    const like = await prisma.like.create({
      data: {
        postId: postId,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(like);
  }
}
