import '@/styles/globals.css'
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const inter = Poppins({ weight: '400', subsets: ['latin'], style: 'normal' });

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <style jsx global>{`
                html {
                font-family: ${inter.style.fontFamily} !important;
                overflow-x: hidden!important;
                }
            `}</style>

            <ConfigProvider theme={{
                token: {
                    fontFamily: `${inter.style.fontFamily} !important`
                }
            }}>
                <Head>
                    <title>Rudensia Park</title>
                </Head>
                <Component {...pageProps} />
            </ConfigProvider>
        </>
    )
}
