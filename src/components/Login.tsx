import React from "react";
import {signIn} from "next-auth/react";

export const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">To see this content you should be logged in</h1>
                <button
                    onClick={() => signIn('google')}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}

export default Login;