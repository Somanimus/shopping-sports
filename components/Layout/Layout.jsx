import React from 'react';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title} | Shopping.kg</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <meta name="yandex-verification" content="fe62b413368bcce2" />
            </Head>
            <Navbar />
            <div>{children}</div>
            <Navbar />
            <div style={{'height' :'2em'}}></div>
            <Footer />
        </>
    );
};

export default Layout;
