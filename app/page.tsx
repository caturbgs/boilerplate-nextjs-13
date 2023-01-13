import { PrismaClient } from '@prisma/client';
import { Post } from '@types';
import HomePage from './HomePage';

const prisma = new PrismaClient();

export const revalidate = 90; // revalidate every two minutes

async function getData(): Promise<Post[]> {
  // Example after moved on utils as helper functions.
  const data = await prisma.post.findMany();
  return data;
}

export default async function RootPage() {
  // we can use with declare local functions first
  const data = await getData();

  // or we can directly call the utils helper for fecthing data
  // const data = await getPosts();

  return <HomePage data={data} />;
}
