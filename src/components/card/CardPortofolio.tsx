import { ICardPortofolio } from "@/models/CardPortofolio";
import Image from 'next/image'

export default function CardPortofolio({ id, title, description, image, jumlah_unit, sisa_unit, jumlah_unit_terjual }: ICardPortofolio) {
    return <>
        <div id={id} className="flex flex-col">
            <div className="flex px-2 pt-2 pb-1 mb-2 justify-center">
                <Image src={image} alt="imgPortofolio" className="rounded-2xl drop-shadow-md" style={{ height: '280px', width: '100%' }}></Image>
            </div>

            <div className="flex px-4 justify-center">
                <p className="text-gray-600 text-xl font-semibold">
                    {title}
                </p>
            </div>

            <div className="flex px-4 mb-2 justify-center">
                <p className="text-gray-500 text-sm">
                    {description}
                </p>
            </div>

            <div className="flex px-4 mb-3 justify-center">
                <button className="bg-emerald-400 rounded-xl px-2 py-2 text-sm text-white">
                    Sisa {sisa_unit} Unit | Dari {jumlah_unit} Unit
                </button>
            </div>
        </div>
    </>
}