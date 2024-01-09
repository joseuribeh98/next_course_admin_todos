import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Gema del alma", complete: true },
      { description: "Gema del tiempo" },
      { description: "Gema del espacio" },
      { description: "Gema del poder" },
      { description: "Gema de la mente" },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
