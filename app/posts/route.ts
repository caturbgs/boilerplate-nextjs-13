import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export default async function GET(req: NextRequest) {
  const { body } = req;

  try {
    await prisma.post.create({
      data: body as any,
    });

    return NextResponse.json({ message: "Success create post!" });
    // return new NextResponse(JSON.stringify({ message: "Success create post!" }), {status: 200, });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong!' });
  }
}
