import { useState } from "react";
import { handleClickWhatsapp } from '../../providers/Utility.provider';

export default function Navbar() {
    const [menu, setMenu] = useState([
        {
            key: 'beranda',
            label: (
                // <Link href='/'>
                //     Beranda
                // </Link>
                'Beranda'
            ),
            title: 'Beranda',
        },
        {
            key: 'tentang_kami',
            label: (
                // <Link href='/tentang-kami'>
                //     Tentang Kami
                // </Link>
                'Tentang Kami'
            ),
            title: 'Tentang Kami',
        },
        {
            key: 'portofolio_kami',
            label: (
                // <Link href='/tentang-kami'>
                //     Tentang Kami
                // </Link>
                'Portofolio Kami'
            ),
            title: 'Portofolio Kami',
        },
        {
            key: 'produk_rumah',
            label: (
                // <Link href='/produk'>
                //     Produk Rumah
                // </Link>
                'Produk Rumah'
            ),
            title: 'Produk Rumah',
        },
        {
            key: 'virtual_tour',
            label: (
                // <Link href='/produk'>
                //     Produk Rumah
                // </Link>
                'Virtual Tour'
            ),
            title: 'Virtual Tour',
        },
        {
            key: 'simulasi_kpr',
            label: (
                // <Link href='/simulasi-kpr'>
                //     Simulasi KPR
                // </Link>
                'Simulasi KPR'
            ),
            title: 'Simulasi KPR',
        },
    ]);

    const [current, setCurrent] = useState('home');

    const [toggleNavbar, setToggleNavbar] = useState(true);

    const handleSetToggleNavbar = () => {
        setToggleNavbar(!toggleNavbar)
    };

    const handleClickMenu = (item: any) => {
        setCurrent(item.key);

        const el = document.getElementById(item.key) as HTMLElement;
        const offset = item.key === 'virtual_tour' ? 50 : 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const handleClickHubungi = () => {
        handleClickWhatsapp('normal');
    };

    return (
        <>
            <nav className="lg:py-2 lg:px-2 py-3 px-2 fixed w-screen bg-white z-10 drop-shadow-sm">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <p className="text-emerald-400 mb-0 font-bold text-xl">
                        Rudensia Park
                    </p>
                    <div className="flex md:order-2">
                        <button className="bg-emerald-400 text-white px-3 py-2 rounded-md text-sm hover:bg-emerald-500 transition ease-in-out duration-300" onClick={handleClickHubungi}>
                            Hubungi Kami
                        </button>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleSetToggleNavbar}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={toggleNavbar ? 'flex items-center mx-auto w-full md:flex md:w-auto' : "hidden"} id="navbar-default">
                        <ul className="flex flex-col w-full p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                menu.map((item) => (
                                    <li key={item.key}>
                                        <a className={
                                            current === item.key
                                                ? 'cursor-pointer block py-2 pl-3 pr-4 text-white bg-emerald-400 rounded md:bg-transparent md:text-emerald-400 md:p-0 transition ease-in-out duration-300'
                                                : 'cursor-pointer block py-2 pl-3 pr-4 text-gray-400 rounded md:bg-transparent md:text-gray-400 md:p-0 transition ease-in-out duration-300'
                                        } aria-current="page" onClick={() => handleClickMenu(item)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}