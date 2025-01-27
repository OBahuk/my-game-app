export interface Game {
    id: number;
    name: string;
    background_image: string;
    released: string;
}

export interface Creator {
    id: number;
    name: string;
    image: string;
    games_count: number;
    positions: { name: string }[];
}