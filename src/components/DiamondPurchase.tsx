"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const DiamondPurchase: React.FC = () => {
    const { data: session } = useSession();
    const [diamonds, setDiamonds] = useState(0);
    const itemName = `diamonds_${session?.user?.email}`

    useEffect(() => {
        if (session) {
            const storedDiamonds = localStorage.getItem(itemName);
            if (storedDiamonds) {
                setDiamonds(parseInt(storedDiamonds, 10));
            }
        }
    }, [session, itemName]);

    useEffect(() => {
       if (session) {
            localStorage.setItem(itemName, diamonds.toString());
       }
    }, [diamonds, session, itemName]);

    const handlePurchase = (amount: number) => {
        setDiamonds(prevDiamonds => prevDiamonds + amount);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Diamond Shop</h2>
            <p className="text-xl text-center mb-6">Your Balance: {diamonds} 💎</p>
            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={() => handlePurchase(100)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Buy 100 💎
                </button>
                <button
                    onClick={() => handlePurchase(500)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                    Buy 500 💎
                </button>
                <button
                    onClick={() => handlePurchase(1000)}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                >
                    Buy 1000 💎
                </button>
                <button
                    onClick={() => handlePurchase(5000)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                >
                    Buy 5000 💎
                </button>
            </div>
        </div>
    );
};

export default DiamondPurchase;
