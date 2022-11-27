'use client';

import { Post } from '@types';
import { useRouter } from 'next/navigation';

export default function HomePage({ data }: { data: Post[] }) {
  const router = useRouter();

  const handleCreate = async () => {
    const lastId = data[ data.length - 1 ].id + 1;
    await fetch(`http://localhost:8000/posts/`, {
      method: 'POST',
      body: JSON.stringify({
        id: lastId,
        title: `New Title ${lastId}`,
        body: `New Body ${lastId}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    router.refresh();
  };

  const handleUpdate = async (id: number) => {
    await fetch(`http://localhost:8000/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title: `Update Title ${id}`,
        body: `Update Body ${id}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    router.refresh();
  };

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1>Isi Data dari API</h1>
        <div>
          <button
            className="bg-emerald-300 hover:bg-white text-white hover:text-emerald-300 border-2 border-emerald-300 rounded-lg py-2 px-4 mx-1"
            onClick={() => router.refresh()}>
            Revalidate Data
          </button>
          <button
            className="bg-emerald-300 hover:bg-white text-white hover:text-emerald-300 border-2 border-emerald-300 rounded-lg py-2 px-4 mx-1"
            onClick={() => handleCreate()}>
            Create Data
          </button>
        </div>
      </div>
      <div className="grid">
        {data.map((d) => (
          <div key={d.id} className="flex justify-between items-center mb-1 px-2">
            <div className='flex'>
              <p className="bg-orange-200 text-xl px-2 font-semibold rounded-md mr-2">{d.title}</p>
              <p className="bg-orange-300 text-md px-2 rounded-md">{d.body}</p>
            </div>
            <button onClick={() => handleUpdate(d.id)} className="bg-indigo-600 text-white rounded-md px-2 py-1">
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
