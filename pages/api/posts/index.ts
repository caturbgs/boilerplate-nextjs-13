import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;

  if (method !== 'POST') {
    res.status(400).json({ message: "Doesn't support this method!" });
  }

  try {
    await prisma.post.create({
      data: body,
    });

    res.status(200).json({ message: "Success create post!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
