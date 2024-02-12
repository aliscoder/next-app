import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";

export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const isValidBody = true; // check if the body is valid

  if (isValidBody) {
    try {
      
      const user = await prisma.user.create({
        data: body,
      });
      return NextResponse.json(user, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 400 });
    }
  } else {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
};
