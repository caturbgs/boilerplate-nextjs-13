import { Prisma, PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const res: Prisma.postCreateInput = await req.json();

  try {
    await prisma.post.create({
      data: {
        title: res.title,
        body: res.body,
        user: {
          create: {
            name: 'John Doe',
            email: 'johndoe@gmail.com',
          },
        }
      },
    });

    return NextResponse.json({ message: 'Success create post!' });
    // return new NextResponse(JSON.stringify({ message: "Success create post!" }), {status: 200, });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong!' }, {status: 500});
  }
}