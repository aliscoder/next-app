import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
interface Props {
  params: { id: string };
}
export const GET = async (request: NextRequest, { params: { id } }: Props) => {
  try {
    const user = await prisma.user.findFirst({ where: { id } });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
};

export const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const body = await request.json();
  const isValidBody = true; // check if the body is valid

  try {
    if (isValidBody) {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: body,
      });
      return NextResponse.json(updatedUser, { status: 201 });
    } else {
      return NextResponse.json({ error: "bad request" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
};

export const DELETE = async (request: NextRequest, { params: { id } }: Props) => {
  try {
    const user = await prisma.user.delete({ where: { id } });
    return NextResponse.json('user deleted', { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
};
