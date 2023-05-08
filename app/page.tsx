import { Post } from '@types';
import HomePage from './HomePage';

export const revalidate = 90; // revalidate every one and half minute

async function getData(): Promise<Post[]> {
  // Example after moved on utils as helper functions.
  const data: Post[] = [];
  return data;
}

export const metadata = {
  title: 'Home',
};

export default async function RootPage() {
  // we can use with declare local functions first
  const data = await getData();

  // or we can directly call the utils helper for fecthing data
  // const data = await getPosts();

  return <HomePage data={data} />;
}
