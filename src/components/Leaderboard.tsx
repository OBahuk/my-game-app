import React from "react";
import Image from 'next/image';

import { CREATORS } from '../routes';
import { getRawgData } from '../apiHandlers';
import { Creator, CreatorResponseData } from "../types";

const Leaderboard: React.FC = async () => {
    let creators: Creator[] = [];
    try {
        creators = (await getRawgData<CreatorResponseData>(CREATORS, 12)).results;
    } catch (error: unknown) {
        return (
            <div>
                <h2 className="text-2xl font-bold">Error loading creators:</h2>
                <div className="text-red-500">{error instanceof Error ? error.message : JSON.stringify(error)}</div>
                <p>Try to reload page</p>
            </div>
        );
    }


    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 p-4 bg-gray-100">Top 10 Creators</h2>
            <ul className="divide-y divide-gray-200">
                {creators.map((creator, index) => (
                    <li key={creator.id} className="flex items-center p-4 hover:bg-gray-50">
                        <span className="font-bold mr-4 text-lg">{index + 1}</span>
                        <Image
                            src={creator.image}
                            alt={creator.name}
                            width={50}
                            height={50}
                            className="rounded-full mr-4"
                        />
                        <div className="flex-grow">
                            <h3 className="font-semibold">{creator.name}</h3>
                            <p className="text-sm text-gray-500">
                                Games: {creator.games_count} |
                                Position: {creator.positions.map(p => p.name).join(', ')}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
