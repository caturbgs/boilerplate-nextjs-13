"use client";

import {useEffect, useState} from "react";
import {Entries, EntriesList} from "./IEntries";

export default function HomePage({data} : {data: Entries | null}) {
    const [filteredData, setFilteredData] = useState<EntriesList[]>([]);

    const filterData = () => {
        if (data) {
            setFilteredData(data.entries.slice(0, 10));
        }
    }

    useEffect(() => {
        filterData();
    }, [data]);

    return (
            <div>
                <h1>Isi Data dari API</h1>
                <ul>
                    {filteredData.map(data => (
                            <li>{data.API}</li>
                    ))}
                </ul>
            </div>
    );
};