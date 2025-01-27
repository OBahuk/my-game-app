export interface Game {
    id: number;
    name: string;
    background_image: string;
    released: string;
    description_raw: string;
    platforms: { platform: { name: string } }[];
    genres: { name: string }[];
    rating: number;
}

export interface Creator {
    id: number;
    name: string;
    image: string;
    games_count: number;
    positions: { name: string }[];
}

export interface CreatorResponseData {
    results: Creator[];
}

export interface GamesResponseData {
    results: Game[];
}