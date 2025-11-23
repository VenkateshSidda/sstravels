import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const packages = await prisma.package.findMany();
    return NextResponse.json(packages);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const newPackage = await prisma.package.create({
      data: body,
    });
    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create package" }, { status: 500 });
  }
}
