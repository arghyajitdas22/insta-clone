import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!existingUser) {
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name: "",
        username: "",
        bio: "",
      },
    });

    return NextResponse.json(user);
  }

  return NextResponse.error();
}
