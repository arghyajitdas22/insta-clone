import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { image, caption } = body;

  const user = await getCurrentUser();

  const post = await prisma.post.create({
    data: {
      caption,
      image,
      userId: user?.id,
    },
  });

  if (post) {
    return NextResponse.json(post);
  }

  return NextResponse.error();
}
