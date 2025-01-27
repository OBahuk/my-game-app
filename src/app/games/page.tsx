import Layout from '../../components/Layout';
import GameGrid from '../../components/GameGrid';

const GamesPage: React.FC = () => {
    return (
        <Layout title="Games | Game App">
            <h1 className="text-3xl font-bold mb-6 text-center">Popular Games</h1>
            <GameGrid />
        </Layout>
    );
};

export default GamesPage;
