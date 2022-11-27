import { Post } from '@types';
import { getPosts } from '@utils/fetch/posts';
import HomePage from './HomePage';

async function getData(): Promise<Post[]> {
  // Example after moved on utils as helper functions.
  const data = await getPosts();
  return data;
}

export default async function RootPage() {
  // we can use with declare local functions first
  const data = await getData();

  // or we can directly call the utils helper for fecthing data
  // const data = await getPosts();

  return <HomePage data={data} />;
}
