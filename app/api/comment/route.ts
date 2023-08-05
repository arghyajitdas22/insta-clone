import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const { body, userId, postId } = data;

  const comment = await prisma.comment.create({
    data: {
      body,
      userId,
      postId,
    },
  });

  if (comment) {
    return NextResponse.json(comment);
  }
  return NextResponse.error();
}
