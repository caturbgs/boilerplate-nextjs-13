import { Prisma, PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// create route handler for PUT /api/posts/:id using prisma
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const res: Prisma.postUpdateInput = await req.json();
  const id = params.id;

  try {
    await prisma.post.update({
      where: { id },
      data: { title: res.title, body: res.body },
    });

    return NextResponse.json({ message: 'Success update post!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong!' });
  }
}
