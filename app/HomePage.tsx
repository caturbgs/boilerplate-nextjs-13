'use client';

import { Post } from '@types';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { useRouter } from 'next/navigation';

export default function HomePage({ data }: { data: Post[] }) {
  const router = useRouter();

  const handleCreate = async () => {
    const lastId = data[data.length - 1].id + 1;
    const res = await fetch(`/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: `New Title ${lastId}`,
        body: `New Body ${lastId}`,
        comments: {
          // create: []
          create: [
            {
              body: 'tes comment 1',
            },
          ],
        },
      }),
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed to fetch data "handleCreate"');

    router.refresh();
  };
``
  const handleUpdate = async (id: string) => {
    const res = await fetch(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: `Update Title ${id}`,
        body: `Update Body ${id}`,
      }),
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed to fetch data "handleUpdate"');

    router.refresh();
  };

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <h1>Isi Data dari API</h1>
        <div>
          <button
            className="mx-1 rounded-lg border-2 border-emerald-300 bg-emerald-300 py-2 px-4 text-white hover:bg-white hover:text-emerald-300"
            onClick={() => router.refresh()}>
            Revalidate Data
          </button>
          <button
            className="mx-1 rounded-lg border-2 border-emerald-300 bg-emerald-300 py-2 px-4 text-white hover:bg-white hover:text-emerald-300"
            onClick={() => handleCreate()}>
            Create Data
          </button>
        </div>
      </div>
      <div className="grid">
        {data.map((d) => (
          <div key={d.id} className="mb-1 flex items-center justify-between px-2">
            <div className="flex">
              <p className="mr-2 rounded-md bg-orange-200 px-2 text-xl font-semibold">{d.title}</p>
              <p className="text-md mr-2 rounded-md bg-orange-300 px-2">{d.body}</p>
              <p className="text-md mr-2 rounded-md bg-orange-300 px-2">
                {format(new Date(d.createdAt), 'dd MMMM yyyy', { locale: id })}
              </p>
              <p className="text-md mr-2 rounded-md bg-orange-300 px-2">
                {format(new Date(d.updatedAt), 'dd MMMM yyyy', { locale: id })}
              </p>
            </div>
            <button onClick={() => handleUpdate(d.id)} className="rounded-md bg-indigo-600 px-2 py-1 text-white">
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
