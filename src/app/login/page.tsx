'use client';
import React from "react";
import Layout from "../../components/Layout";
import Login from "../../components/Login";


const LoginPage: React.FC = () => {
    return (
        <Layout title="Login | Game App">
            <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
            <Login />
        </Layout>
    );
};

export default LoginPage;
