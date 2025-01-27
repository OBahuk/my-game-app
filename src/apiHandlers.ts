const apiKey = process.env.RAWG_API_KEY

export async function getRawgData<T>(path: string, pageSize?:number): Promise<T> {
    const url = `https://api.rawg.io/api${path}?key=${apiKey}${pageSize? "&page_size=" + pageSize : ""}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch data`);
    }
    const data = await res.json();
    return data.results;
}