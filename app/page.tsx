import { appConfig } from '../config/app';
import { Post } from '../utils/Post';
import HomePage from './HomePage';

async function getData(): Promise<Post[]> {
  //* Static Site Generation (SSG)
  // This request should be cached until manually invalidated.
  // const res = await fetch(`https://api.publicapis.org/entries`, {cache: 'force-cache'});

  //* Incremental Static Regeneration (ISR)
  // This request should be cached with a lifetime of 10 seconds.
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { next: { revalidate: appConfig.revalidateTime } });

  //* Server-side Rendering (SSR)
  // This request should be refetched on every request.
  // const res = await fetch(`https://api.publicapis.org/entries`, { cache: 'no-store' });
  const data = await res.json();

  return data;
}

export default async function RootPage() {
  const data = await getData();

  return <HomePage data={data} />;
}
