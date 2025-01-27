import GameCard from './GameCard';
import { Game } from '../types';
import { getRawgData } from '../apiHandlers';
import { GAMES } from '../routes';

export default async function GameGrid() {
    let games: Game[] = [];

    try {
        games = await getRawgData<Game[]>(GAMES, 12);
    } catch (error) {
        return (
            <div>
                <h2 className="text-2xl font-bold">Error loading games:</h2>
                <div className="text-red-500">{error.message}</div>
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
