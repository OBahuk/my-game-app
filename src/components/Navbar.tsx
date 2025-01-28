"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { ROUTES } from '../routes'

const Navbar: React.FC = () => {
    const { data: session, status } = useSession();
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const menuClasses = `${isOpen ? 'block fixed bg-gray-800 top-[60] flex-col ml-0 left-0 sm:static' : 'hidden'}`;

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold">
                            Game App
                        </Link>
                        <div className={`ml-10 flex items-baseline space-x-4 sm:block ${menuClasses}`}>
                            {ROUTES.map(({href, name}) => (
                                <Link
                                    key={name}
                                    href={href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${pathName === href ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        {status === 'loading' ? (
                            <p>Loading...</p>
                        ) : session ? (
                            <>
                                <span className="mr-4 hidden sm:block">Hi, {session.user?.name}</span>
                                <button
                                    onClick={() => signOut()}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => signIn("google", { callbackUrl: window.location.href })}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Sign In
                            </button>
                        )}
                    </div>
                    <div className="flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "X" : "III"}</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
