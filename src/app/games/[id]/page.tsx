import React from "react";
import { NextPage } from 'next';
import Layout from '../../../components/Layout';
import GameItem from '../../../components/GameItem';

interface Params {
    id: string
}

interface GamePageProps {
    params: Promise<Params>
}

const GamePage: NextPage<GamePageProps> = async ({ params }: GamePageProps) => {
    const { id } = await params

    return (
        <Layout title="Game | Game App">
            <h1 className="text-3xl font-bold mb-6 text-center">Game</h1>
            <GameItem id={id} />
        </Layout>
    );
};

export default GamePage;
