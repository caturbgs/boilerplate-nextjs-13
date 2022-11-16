'use client';

import { Post } from '@types';
import { useRouter } from 'next/navigation';
// import { useCallback, useEffect, useState } from 'react';

export default function HomePage({ data }: { data: Post[] }) {
  const router = useRouter();
  // const [filteredData, setFilteredData] = useState<Post[]>([]);

  // const filterData = useCallback(() => {
  //   if (data) {
  //     setFilteredData(data.slice(0, 10));
  //   }
  // }, [data]);

  // useEffect(() => {
  //   filterData();
  // }, [filterData]);

  const filteredData = (data || []).slice(0, 10);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1>Isi Data dari API</h1>
        <button
          className="bg-emerald-300 hover:bg-white text-white hover:text-emerald-300 border-2 border-emerald-300 rounded-lg py-2 px-4"
          onClick={() => router.refresh()}>
          Revalidate Data
        </button>
      </div>
      <ul>
        {/* {filteredData.map((d) => ( */}
        {filteredData.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </div>
  );
}
