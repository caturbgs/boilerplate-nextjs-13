'use client';

import { useCallback, useEffect, useState } from 'react';
import { Entries, EntriesList } from '../utils/Entries';

export default function HomePage({ data }: { data: Entries }) {
  const [filteredData, setFilteredData] = useState<EntriesList[]>([]);

  const filterData = useCallback(() => {
    if (data) {
      setFilteredData(data.entries.slice(0, 10));
    }
  }, [data]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <div>
      <h1>Isi Data dari API</h1>
      <ul>
        {filteredData.map((data) => (
          <li key={data.API}>{data.API}</li>
        ))}
      </ul>
    </div>
  );
}
