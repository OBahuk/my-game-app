"use client"
import React, { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Game App' }) => {
    const session = useSession();

    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{title}</title>
            </Head>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/*session.data ? children : <p className="text-center">Please sign in to view this page.</p>*/}
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    © {new Date().getFullYear()} Game App. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
