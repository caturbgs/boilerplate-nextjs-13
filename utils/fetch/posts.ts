import { appConfig } from '@config/app';
import { Post } from '@types';
import 'server-only';

const getPosts = async (): Promise<Post[]> => {
  //* Static Site Generation (SSG)
  // This request should be cached until manually invalidated.
  // const res = await fetch(`http://localhost:8000/posts`, { cache: 'force-cache' });

  //* Incremental Static Regeneration (ISR)
  // This request should be cached with a lifetime of 10 seconds.
  const res = await fetch(`http://localhost:8000/posts`, { next: { revalidate: appConfig.revalidateTime } });

  //* Server-side Rendering (SSR)
  // This request should be refetched on every request.
  // const res = await fetch(`http://localhost:8000/posts`, { cache: 'no-store' });
  // const res = await fetch(`http://localhost:8000/posts`, { cache: 'force-cache' });

  if (!res.ok) throw new Error('Failed to fetch data "getPosts"');

  return res.json();
};

const createPosts = async (body: any): Promise<Post> => {
  const res = await fetch(`http://localhost:8000/posts/${body.id}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!res.ok) throw new Error('Failed to fetch data "updatePosts"');

  return res.json();
};

const updatePosts = async (body: any): Promise<Post> => {
  const res = await fetch(`http://localhost:8000/posts/${body.id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!res.ok) throw new Error('Failed to fetch data "updatePosts"');

  return res.json();
};

export { getPosts, updatePosts, createPosts };
