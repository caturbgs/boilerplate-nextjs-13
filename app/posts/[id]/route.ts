import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// create route handler for PUT /api/posts/:id using prisma
export default async function PUT(req: NextRequest) {
  const { body } = req;
  const id = req.nextUrl.searchParams.get('id');

  try {
    await prisma.post.update({
      where: { id: Number(id) },
      data: body as any,
    });

    return NextResponse.json({ message: "Success update post!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong!' });
  }
}
