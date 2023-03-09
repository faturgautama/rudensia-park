import '@/styles/globals.css'
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app'
import { Inter, Poppins } from 'next/font/google';

const inter = Poppins({ weight: '400', subsets: ['latin'], style: 'normal' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                font-family: ${inter.style.fontFamily} !important;
                }
            `}</style>

            <ConfigProvider theme={{
                token: {
                    fontFamily: `${inter.style.fontFamily} !important`
                }
            }}>
                <Component {...pageProps} />
            </ConfigProvider>
        </>
    )
}
