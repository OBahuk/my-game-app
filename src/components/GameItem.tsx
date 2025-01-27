import React from "react";
import Image from 'next/image';
import { Game } from "../types";
import { getRawgData } from "../apiHandlers";
import { GAMES } from "../routes";

interface GameItemProps {
    id: string
}

export default async function GameItem({ id }: GameItemProps) {
    let game: Game | null = null;
    try {
        game = await getRawgData<Game>(`${GAMES}/${id}`, 12);
    } catch (error: unknown) {
        return (
            <div>
                <h2 className="text-2xl font-bold">Error loading data:</h2>
                <div className="text-red-500">
                    {error instanceof Error ? error.message : JSON.stringify(error)}
                </div>
                <p>Try to reload page</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-96">
                    <Image
                        src={game.background_image}
                        alt={game.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                    />
                </div>
                <div>
                    <p className="text-lg mb-4">{game.description_raw}</p>
                    <p className="mb-2"><strong>Released:</strong> {new Date(game.released).toLocaleDateString()}</p>
                    <p className="mb-2"><strong>Rating:</strong> {game.rating}/5</p>
                    <p className="mb-2"><strong>Platforms:</strong> {game.platforms.map(p => p.platform.name).join(', ')}</p>
                    <p className="mb-2"><strong>Genres:</strong> {game.genres.map(g => g.name).join(', ')}</p>
                </div>
            </div>
        </div>
    );
}
