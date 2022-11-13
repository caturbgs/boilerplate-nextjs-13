'use client';

import { useRouter } from 'next/navigation';
// import { useCallback, useEffect, useState } from 'react';
import { Post } from '../utils/Post';

export default function HomePage({ data }: { data: Post[] }) {
  const router = useRouter()
  // const [filteredData, setFilteredData] = useState<Post[]>([]);

  // const filterData = useCallback(() => {
  //   if (data) {
  //     setFilteredData(data.slice(0, 10));
  //   }
  // }, [data]);

  // useEffect(() => {
  //   filterData();
  // }, [filterData]);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1>Isi Data dari API</h1>
        <button className='bg-emerald-300 hover:bg-white text-white hover:text-emerald-300 border-2 border-emerald-300 rounded-lg py-2 px-4' onClick={() => router.refresh()}>Revalidate Data</button>
      </div>
      <ul>
        {/* {filteredData.map((d) => ( */}
        {data.slice(0, 20).map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </div>
  );
}
