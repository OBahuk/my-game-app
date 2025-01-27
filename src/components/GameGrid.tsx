import GameCard from './GameCard';
import { Game, GamesResponseData } from '../types';
import { getRawgData } from '../apiHandlers';
import { GAMES } from '../routes';

export default async function GameGrid() {
    let games: Game[] = [];

    try {
        games = (await getRawgData<GamesResponseData>(GAMES, 12)).results;
    } catch (error: unknown) {
        return (
            <div>
                <h2 className="text-2xl font-bold">Error loading games:</h2>
                <div className="text-red-500">
                    {error instanceof Error ? error.message : JSON.stringify(error)}
                </div>
                <p>Try to reload page</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    backgroundImage={game.background_image}
                    released={game.released}
                />
            ))}
        </div>
    );
}
