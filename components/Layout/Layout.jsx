import React from 'react';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title} | Courpus.kg</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <Navbar />
            <hr />
            <div>{children}</div>
            <Navbar />
            <hr />
            <Footer />
        </>
    );
};

export default Layout;
