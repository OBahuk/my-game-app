"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface DiamondPackage {
    id: string;
    amount: number;
    price: number;
    discount?: number;
}

const diamondPackages: DiamondPackage[] = [
    { id: 'basic', amount: 100, price: 0.99 },
    { id: 'standard', amount: 500, price: 4.99, discount: 5 },
    { id: 'premium', amount: 1000, price: 9.99, discount: 10 },
    { id: 'ultimate', amount: 5000, price: 49.99, discount: 15 },
];

interface PaymentFormData {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
}

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

    const [selectedPackage, setSelectedPackage] = useState<DiamondPackage | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [paymentFormData, setPaymentFormData] = useState<PaymentFormData>({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
    });

    const handlePackageSelect = (pkg: DiamondPackage) => {
        setSelectedPackage(pkg);
        setQuantity(1);
        setShowPaymentForm(false);
    };

    const calculateTotal = () => {
        if (!selectedPackage) return 0;
        const subtotal = selectedPackage.price * quantity;
        const discount = selectedPackage.discount ? (subtotal * selectedPackage.discount) / 100 : 0;
        return (subtotal - discount).toFixed(2);
    };

    const handlePurchase = async () => {
        setShowPaymentForm(true);
    };

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Processing payment:', paymentFormData);
        console.log(`Purchasing ${quantity} of ${selectedPackage?.id} package(s)`);
        setShowPaymentForm(false);
        setSelectedPackage(null);
        alert('Purchase successful! Thank You');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Diamond Shop</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {diamondPackages.map((pkg) => (
                    <div
                        key={pkg.id}
                        className={`border p-4 rounded-lg cursor-pointer ${
                            selectedPackage?.id === pkg.id ? 'border-blue-500' : ''
                        } hover:bg-blue-600 hover:text-white font-bold py-2 rounded`}
                        onClick={() => handlePackageSelect(pkg)}
                    >
                        <h2 className="text-xl font-semibold mb-2">{pkg.amount} 💎</h2>
                        <p className="text-lg">${pkg.price.toFixed(2)}</p>
                        {pkg.discount && <p className="text-sm text-green-600">{pkg.discount}% off</p>}
                    </div>
                ))}
            </div>
            {selectedPackage && !showPaymentForm && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Selected Package: {selectedPackage.amount} Diamonds</h2>
                    <div className="flex items-center mb-4">
                        <label htmlFor="quantity" className="mr-2">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            max="10"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="border rounded px-2 py-1 w-16"
                        />
                    </div>
                    <p className="text-xl mb-4">Total: ${calculateTotal()}</p>
                    <button
                        onClick={handlePurchase}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Purchase
                    </button>
                </div>
            )}
            {showPaymentForm && (
                <form onSubmit={handlePaymentSubmit} className="max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={paymentFormData.cardNumber}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardHolder" className="block mb-2">Card Holder</label>
                        <input
                            type="text"
                            id="cardHolder"
                            name="cardHolder"
                            value={paymentFormData.cardHolder}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="expiryDate" className="block mb-2">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                value={paymentFormData.expiryDate}
                                onChange={handleInputChange}
                                placeholder="MM/YY"
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="cvv" className="block mb-2">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={paymentFormData.cvv}
                                onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Complete Purchase
                    </button>
                </form>
            )}
        </div>
    );
};

export default DiamondPurchase;

