import { notFound } from 'next/navigation';
import Image from 'next/image';

async function getGameDetails(id: string) {
    const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`);
    if (!res.ok) {
        notFound();
    }
    return res.json();
}

export default async function GamePage({ params }: { params: { id: string } }) {
    const game = await getGameDetails(params.id);
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
