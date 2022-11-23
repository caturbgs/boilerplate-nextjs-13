import { Post } from '@types';
import { getPosts } from '@utils/fetch/posts';
import HomePage from './HomePage';

async function getData(): Promise<Post[]> {
  //* Static Site Generation (SSG)
  // This request should be cached until manually invalidated.
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'force-cache' });

  //* Incremental Static Regeneration (ISR)
  // This request should be cached with a lifetime of 10 seconds.
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { next: { revalidate: appConfig.revalidateTime } });

  //* Server-side Rendering (SSR)
  // This request should be refetched on every request.
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'no-store' });

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
