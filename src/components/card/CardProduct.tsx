import { ICardProduct } from '@/models/CardProduct';
import { EnvironmentOutlined, ExpandAltOutlined, ExpandOutlined } from '@ant-design/icons';
import Image from 'next/image'

export default function CardProduct(props: ICardProduct) {
    return <>
        <div className="flex flex-col rounded-xl bg-white drop-shadow-md">
            <div className="flex px-2 pt-2 pb-1 mb-2 justify-center">
                <Image src={props.image} alt="rumah" className='rounded-xl shadow-sm' style={{ height: '100%', width: '100%' }}></Image>
            </div>

            <div className="flex px-4 mb-1">
                <p className='text-gray-600 text-sm font-semibold'>
                    {props.title}
                </p>
            </div>

            <div className="flex flex-row px-4 mb-2">
                <p className='text-gray-500 text-sm'>
                    <EnvironmentOutlined className='text-xs' /> {props.location}
                </p>
            </div>

            <div className="flex flex-row px-4 mb-2 justify-between items-center">
                <p className='text-gray-500 text-sm'>
                    <ExpandOutlined className='text-xs' /> {props.luas_bangunan} <span className='text-xs'>m/2</span>
                </p>
                <p className='text-gray-500 text-sm'>
                    <ExpandAltOutlined className='text-xs' /> {props.luas_tanah} <span className='text-xs'>m/2</span>
                </p>
            </div>

            <div className="flex flex-row px-4 mb-3 justify-between items-center">
                <p className='text-emerald-500 text-sm font-semibold'>
                    <span className='font-normal text-gray-400'>Mulai</span> {props.price}
                </p>
                <button className='bg-emerald-400 p-2 rounded-lg text-white text-xs'>
                    Book Now
                </button>
            </div>
        </div>
    </>
}