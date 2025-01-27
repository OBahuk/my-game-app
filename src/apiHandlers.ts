import { RAWG_BASE_URL } from "./routes";

const apiKey = process.env.RAWG_API_KEY

export async function getRawgData<T>(path: string, pageSize?:number): Promise<T> {
    const url = `${RAWG_BASE_URL}${path}?key=${apiKey}${pageSize? "&page_size=" + pageSize : ""}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch data`);
    }
    return await res.json();
}