import React from "react";
import Layout from '../../components/Layout';
import Leaderboard from '../../components/Leaderboard';

const LeaderboardPage: React.FC = () => {
    return (
        <Layout title="Leaderboard | Game App">
            <h1 className="text-3xl font-bold mb-6 text-center">Creator Leaderboard</h1>
            <Leaderboard />
        </Layout>
    );
};

export default LeaderboardPage;
