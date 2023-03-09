import { StaticImageData } from "next/image";

export interface ICardProduct {
    id: string;
    image: StaticImageData;
    title: string;
    location: string;
    description: string;
    price: string;
    luas_tanah: number;
    luas_bangunan: number;
    jumlah_kamar: number;
    jumlah_kamar_mandi: number;
    book: () => void;
}