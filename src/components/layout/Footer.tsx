export default function Footer() {
    return <>
        <div className="flex h-52 bg-gray-100 p-10 gap-3">
            <div className="flex flex-row gap-3 w-2/5 justify-between pr-10 border-r border-r-gray-300">
                <div className="flex flex-col">
                    <p className="text-emerald-400 text-2xl font-bold mb-4">
                        Rudensia Park
                    </p>
                    <p className="text-gray-400 mb-0">
                        PT. Rudensia Jaya Raya
                    </p>
                    <p className="text-gray-400 text-xs mb-2">
                        Developer Terpercaya Untuk Anda
                    </p>
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-gray-500 text-sm">
                        Semua bisa punya rumah
                    </p>
                    <p className="text-gray-500 text-sm">
                        hanya di <span className="text-emerald-500">Rudensia Park</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-1/5 ml-5">
                <p className="text-emerald-500 font-semibold mb-3 text-center">
                    Kantor Pemasaran
                </p>
                <p className="text-gray-500 text-sm">
                    Jalan Kompol R Soekanto No.999,
                </p>
                <p className="text-gray-500 text-sm">
                    Kel. Mangunharjo, Kec. Tembalang
                </p>
                <p className="text-gray-500 text-sm">
                    Kota Semarang, Provinsi Jawa Tengah 50272
                </p>
            </div>

            <div className="flex flex-col w-1/5 items-center">
                <p className="text-emerald-500 font-semibold mb-3">
                    Halaman
                </p>
                <p className="text-gray-500 text-sm mb-2">
                    Beranda
                </p>
                <p className="text-gray-500 text-sm mb-2">
                    Tentang Kami
                </p>
                <p className="text-gray-500 text-sm mb-2">
                    Produk Rumah
                </p>
                <p className="text-gray-500 text-sm">
                    Simulasi KPR
                </p>
            </div>

            <div className="flex flex-col w-1/5 items-center">
                <p className="text-emerald-500 font-semibold mb-3">
                    Media Sosial
                </p>
                <p className="text-gray-500 text-sm mb-2">
                    Beranda
                </p>
            </div>
        </div>
    </>
}