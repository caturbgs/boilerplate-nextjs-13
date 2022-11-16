import { Post } from '@types';
import 'server-only';

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'force-cache' });

  if (!res.ok) throw new Error('Failed to fetch data "getPosts"');

  return res.json();
};

const updatePosts = async (body?: any): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { method: 'POST', body });

  if (!res.ok) throw new Error('Failed to fetch data "updatePosts"');

  return res.json();
};

export { getPosts, updatePosts };
