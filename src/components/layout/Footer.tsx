import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return <>
        <div className="flex flex-col">
            <div className="grid grid-cols-2 md:flex md:flex-row h-auto md:h-52 bg-gray-100 p-3 md:p-10 gap-3">
                <div className="flex flex-col md:flex-row md:gap-3 w-full md:w-2/5 md:justify-between md:pr-10 md:border-r md:border-r-gray-300 text-center md:text-left">
                    <div className="flex flex-col md:flex-row">
                        <p className="text-emerald-400 text-lg md:text-2xl font-bold mb-1 md:mb-4">
                            Rudensia Park
                        </p>
                        <p className="text-gray-500 mb-0 md:text-base text-xs">
                            PT. Rudensia Jaya Raya
                        </p>
                        <p className="text-gray-400 text-xs mb-2 hidden md:flex">
                            Developer Terpercaya Untuk Anda
                        </p>
                    </div>
                    <div className="flex flex-col md:pt-2">
                        <p className="text-gray-500 text-xs md:text-sm">
                            Semua bisa punya rumah
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">
                            hanya di <span className="text-emerald-500">Rudensia Park</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-1/5 md:ml-5 text-center">
                    <p className="text-emerald-500 font-semibold mb-3 text-sm md:text-base text-center">
                        Kantor Pemasaran
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">
                        Jl. Kompol R Soekanto No.999
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm hidden md:flex">
                        Kel. Mangunharjo, Kec. Tembalang
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm hidden md:flex">
                        Kota Semarang, Provinsi Jawa Tengah 50272
                    </p>
                </div>

                <div className="flex flex-col w-full md:w-1/2 items-center">
                    <p className="text-emerald-500 font-semibold text-sm md:text-base mb-1 md:mb-3">
                        Halaman
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm mb-2">
                        Beranda
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm mb-2">
                        Tentang Kami
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm mb-2">
                        Produk Rumah
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">
                        Simulasi KPR
                    </p>
                </div>

                <div className="flex flex-col w-full md:w-1/2 items-center">
                    <p className="text-emerald-500 font-semibold text-sm md:text-base mb-1 md:mb-3">
                        Media Sosial
                    </p>
                    <p className="text-gray-500 mb-2">
                        <FontAwesomeIcon icon={faInstagram} />
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row bg-emerald-400 p-2 text-center md:justify-between">
                <p className='text-white text_copyright'>
                    All Right Reserved 2023 PT. Rudensia Jaya Raya
                </p>
                <p className='text-white text_copyright'>
                    Made With <FontAwesomeIcon icon={faHeart} className="text-red-500" /> By Trijuna Pratama Digital Solution
                </p>
            </div>
        </div>
    </>
}