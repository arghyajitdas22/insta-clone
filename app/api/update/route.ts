import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { name, username, bio } = body;

  const user = prisma.user.findUnique({
    where: {
      email: currentUser.email,
    },
  });

  if (!user) {
    return NextResponse.error();
  }

  const updatedUser = await prisma.user.update({
    where: {
      email: currentUser.email,
    },
    data: {
      name: name,
      username: username,
      bio: bio,
    },
  });

  return NextResponse.json(updatedUser);
}
