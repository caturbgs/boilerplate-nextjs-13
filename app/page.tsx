import { Entries } from '../utils/Entries';
import HomePage from './HomePage';

async function getData(): Promise<Entries> {
  //* Static Site Generation (SSG)
  // This request should be cached until manually invalidated.
  // const res = await fetch(`https://api.publicapis.org/entries`, {cache: 'force-cache'});

  //* Incremental Static Regeneration (ISG)
  // This request should be cached with a lifetime of 10 seconds.
  // const res = await fetch(`https://api.publicapis.org/entries`, {next: {revalidate: 10}});

  //* Server-side Rendering (SSR)
  // This request should be refetched on every request.
  const res = await fetch(`https://api.publicapis.org/entries`, { cache: 'no-store' });
  const data = await res.json();

  return data;
}

export default async function Page() {
  const data = await getData();

  return <HomePage data={data} />;
}
