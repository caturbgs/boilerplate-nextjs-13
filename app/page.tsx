import HomePage from "./HomePage";
import { Entries } from "./IEntries";

async function getData(): Promise<Entries> {
    const res = await fetch(`https://api.publicapis.org/entries`, {cache: 'no-store'});
    const data = await res.json();

    return data as Entries;
}

export default async function Page() {
    const data = await getData();

    return <HomePage data={data}/>;
};