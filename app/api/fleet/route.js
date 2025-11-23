import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const fleet = await prisma.fleet.findMany();
    return NextResponse.json(fleet);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch fleet" }, { status: 500 });
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const newFleet = await prisma.fleet.create({
      data: body,
    });
    return NextResponse.json(newFleet, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create fleet" }, { status: 500 });
  }
}
