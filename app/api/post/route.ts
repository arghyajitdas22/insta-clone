import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { image, caption } = body;

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const post = await prisma.post.create({
    data: {
      caption,
      image,
      userId: currentUser.id,
    },
  });

  if (post) {
    return NextResponse.json(post);
  }

  return NextResponse.error();
}
