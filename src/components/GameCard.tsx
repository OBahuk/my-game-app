import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
    id: number;
    name: string;
    backgroundImage: string;
    released: string;
}

const GameCard: React.FC<GameCardProps> = ({ id, name, backgroundImage, released }) => {
    return (
        <Link href={`/games/${id}`} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                    <Image
                        src={backgroundImage}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 truncate">{name}</h3>
                    <p className="text-sm text-gray-600">
                        Released: {new Date(released).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;
