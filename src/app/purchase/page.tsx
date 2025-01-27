import React from "react";
import Layout from '../../components/Layout';
import DiamondPurchase from '../../components/DiamondPurchase';

const DiamondShopPage: React.FC = () => {
    return (
        <Layout title="Purse Diamonds">
            <h1 className="text-3xl font-bold mb-6 text-center">Diamond Shop</h1>
            <DiamondPurchase />
        </Layout>
    );
};

export default DiamondShopPage;
