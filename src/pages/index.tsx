import LandingPage from '@/components/layout/LandingPage'
import bg from '../../public/john-fornander-Id7u0EkTjBE-unsplash.jpg';
import faqImage from '../../public/jason-briscoe-UV81E0oXXWQ-unsplash.jpg';
import Image from 'next/image'
import BNI from '../../public/bank/bni.svg';
import Mandiri from '../../public/bank/mandiri.svg';
import BTN from '../../public/bank/btn.svg';
import BRI from '../../public/bank/bri.svg';
import Badge from '@/components/typograph/Badge';
import { ICardService } from '@/models/CardService';
import CardService from '@/components/card/CardService';
import { LeftOutlined, RightOutlined, SafetyCertificateOutlined, SmileOutlined, TrophyOutlined, WechatOutlined } from '@ant-design/icons';
import { ICardProduct } from '@/models/CardProduct';
import rumahImage from '../../public/rumah.png';
import CardProduct from '@/components/card/CardProduct';
import { Col, Collapse, InputNumber, Row, Select } from 'antd';
import { ICardPortofolio } from '@/models/CardPortofolio';
import CardPortofolio from '@/components/card/CardPortofolio';
import gallery1 from '../../public/gallery1.jpg';
import gallery2 from '../../public/gallery2.jpg';
import gallery3 from '../../public/gallery3.jpg';
import gallery4 from '../../public/gallery4.jpg';
import gallery5 from '../../public/gallery5.jpg';
import gallery6 from '../../public/gallery6.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef, useState } from 'react';
import bgDots from '../../public/bg/dots.png';
import bgCirlce from '../../public/bg/setengahLingkaran.png';
import bgKotak from '../../public/bg/kotak.png';
import { handleClickWhatsapp } from '../providers/Utility.provider';
import { Form } from 'antd';

export default function Home() {
    const swiperRef = useRef();

    const handleClickSeeProduct = () => {
        const el = document.getElementById('produk_rumah') as HTMLElement;
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const rumah: ICardProduct[] = [
        {
            id: '1',
            title: 'Rudensia Park Type 36',
            description: 'Rudensia Park Type 36',
            image: rumahImage,
            location: 'Rudensia Park',
            price: '350 Juta',
            luas_tanah: 50,
            luas_bangunan: 36,
            jumlah_kamar: 2,
            jumlah_kamar_mandi: 1,
            book: () => { handleClickWhatsapp('park_type_36') }
        },
        {
            id: '2',
            title: 'Rudensia Park Type 65',
            description: 'Rudensia Park Type 65',
            image: rumahImage,
            location: 'Rudensia Park',
            price: '500 Juta',
            luas_tanah: 50,
            luas_bangunan: 65,
            jumlah_kamar: 3,
            jumlah_kamar_mandi: 2,
            book: () => { handleClickWhatsapp('park_type_65') }
        },
        {
            id: '3',
            title: 'Grand Rudensia Type 36',
            description: 'Grand Rudensia Type 36',
            image: rumahImage,
            location: 'Grand Rudensia',
            price: '340 Juta',
            luas_tanah: 60,
            luas_bangunan: 36,
            jumlah_kamar: 2,
            jumlah_kamar_mandi: 1,
            book: () => { handleClickWhatsapp('grand_type_36') }
        },
        {
            id: '4',
            title: 'Grand Rudensia Type 50',
            description: 'Grand Rudensia Type 36',
            image: rumahImage,
            location: 'Grand Rudensia',
            price: '440 Juta',
            luas_tanah: 50,
            luas_bangunan: 36,
            jumlah_kamar: 2,
            jumlah_kamar_mandi: 1,
            book: () => { handleClickWhatsapp('grand_type_50') }
        },
        {
            id: '5',
            title: 'Villa Rudensia',
            description: 'Villa Rudensia',
            image: rumahImage,
            location: 'Villa Rudensia',
            price: '1.5 M',
            luas_tanah: 90,
            luas_bangunan: 90,
            jumlah_kamar: 3,
            jumlah_kamar_mandi: 2,
            book: () => { handleClickWhatsapp('villa') }
        },
    ];

    const services: ICardService[] = [
        {
            id: 'komunikasi',
            title: 'Komunikasi',
            description: 'Komunikasi yang jelas dan terbuka adalah kunci utama dalam pengembangan hunian yang sukses dan berkelanjutan.',
            icon: <WechatOutlined className='text-xl rounded-full border border-emerald-100 bg-gray-100 p-3 text-emerald-500' />,
        },
        {
            id: 'handal',
            title: 'Handal',
            description: 'Kami selalu berkomitmen untuk menghadirkan hunian yang handal dan berkualitas tinggi kepada para pelanggan kami.',
            icon: <TrophyOutlined className='text-xl rounded-full border border-emerald-100 bg-gray-100 p-3 text-emerald-500' />,
        },
        {
            id: 'kualitas',
            title: 'Kualitas',
            description: 'Hasil yang terbaik dengan mengutamakan kualitas dalam setiap tahapannya tetap yang utama.',
            icon: <SafetyCertificateOutlined className='text-xl rounded-full border border-emerald-100 bg-gray-100 p-3 text-emerald-500' />,
        },
        {
            id: 'keluarga',
            title: 'Keluarga',
            description: 'Kami selalu berusaha menghadirkan lingkungan hunian yang aman, nyaman, dan cocok untuk keluarga Anda.',
            icon: <SmileOutlined className='text-xl rounded-full border border-emerald-100 bg-gray-100 p-3 text-emerald-500' />,
        },
    ];

    const portofolio: ICardPortofolio[] = [
        { id: '1', title: 'Villa Rudensia', description: 'Cluster Modern Berkualitas', image: rumahImage, jumlah_unit: 200, jumlah_unit_terjual: 192, sisa_unit: 8 },
        { id: '2', title: 'Grand Rudensia', description: 'Hunian Nyaman Bernuansa Sejuk', image: rumahImage, jumlah_unit: 200, jumlah_unit_terjual: 192, sisa_unit: 8 },
        { id: '3', title: 'Rudensia Park', description: 'Hunian Bernuansa Asri Dan Sejuk', image: rumahImage, jumlah_unit: 200, jumlah_unit_terjual: 192, sisa_unit: 8 }
    ];

    const { Panel } = Collapse;

    const faq = [
        { id: '1', question: 'Apa itu Rudensia Park?', answer: 'Rudensia Park adalah sebuah perumahan dengan hunian yang asri, sejuk dan berkualitas.' },
        { id: '2', question: 'Ada Berapa Type Hunian di Rudensia Park?', answer: 'Rudensia Park memiliki 2 type hunian, yaitu type 50 dan type 36.' },
        { id: '3', question: 'Apakah Ada Promo Menarik di Rudensia Park?', answer: 'Tentu saja ada. Kami menawarkan Free All Biaya.' },
        { id: '4', question: 'Berapa Harga Hunian di Rudensia Park?', answer: 'Hunian di Rudensia Park mulai dari harga 350 Juta.' },
        { id: '5', question: 'Apakah Saya Bisa Konsultasi Via Chat?', answer: 'Tentu saja bisa. Silahkan hubungi kami, atau klik tombol Whatsapp di samping kanan' },
    ];

    const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

    const handleChangeSlideSwiperProduct = (action: 'left' | 'right') => {
        const swiper = swiperRef.current as any;

        if (action == 'left') {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    };

    const [streetViewSrc, setStreetViewSrc] = useState("https://www.google.com/maps/embed?pb=!4v1678419826140!6m8!1m7!1sia_thsYwkqClZl0vqtLPcQ!2m2!1d-7.043793712067737!2d110.4533239122284!3f193.20299609728792!4f-12.635344198176227!5f0.7820865974627469");

    const [streetViewUpdated, setStreetViewUpdated] = useState("Maret 2022");

    const handleChangeStreetView = (args: any) => {
        switch (args) {
            case 'rudensia_park':
                setStreetViewSrc("https://www.google.com/maps/embed?pb=!4v1678421621859!6m8!1m7!1sl5tbDK9QY8IreIxxISV2vQ!2m2!1d-7.044097208334446!2d110.4508670202459!3f135.73817220480095!4f-8.769056372863872!5f0.7820865974627469");
                setStreetViewUpdated("November 2019")
                break;
            case 'grand_rudensia':
                setStreetViewSrc("https://www.google.com/maps/embed?pb=!4v1678419826140!6m8!1m7!1sia_thsYwkqClZl0vqtLPcQ!2m2!1d-7.043793712067737!2d110.4533239122284!3f193.20299609728792!4f-12.635344198176227!5f0.7820865974627469");
                setStreetViewUpdated("Maret 2022")
                break;
            case 'villa_rudensia':
                setStreetViewSrc("https://www.google.com/maps/embed?pb=!4v1678421453992!6m8!1m7!1se2ohPmj1nCz9i8pwztG4aA!2m2!1d-7.042412069023443!2d110.4537702320757!3f149.59006669943813!4f-14.740247235084198!5f0.7820865974627469");
                setStreetViewUpdated("Maret 2022")
                break;
            default:
                break;
        }
    };

    const handleClickLokasiKantor = () => {
        window.open('https://goo.gl/maps/NCL1ytFQN6PHCG7t6');
    };

    const handleClickHubungi = () => {
        handleClickWhatsapp('normal');
    };

    const [angsuran, setAngsuran] = useState('Rp. 0');

    const handleCountKpr = (data: any) => {
        setAngsuran('Rp. 0');

        const harga_pokok = (data.harga_rumah - data.down_payment) / (data.tenor * 12);

        const bunga_fixed = ((data.harga_rumah - data.down_payment) * (data.suku_bunga_per_tahun / 100) * data.tenor) / (data.tenor * 12);

        const result = (harga_pokok + bunga_fixed).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        setAngsuran(`Rp. ${result}`);
    };

    return (
        <>
            <LandingPage>
                {/* Banner */}
                <div id="beranda" className="flex mb-10 pt-24">
                    <div className="flex flex-col mx-8 rounded-xl h-72 shadow-sm pt-8 items-center bg-gray-50 w-full"
                        style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
                        <p className='text-gray-500 text-5xl font-extrabold mb-1' data-aos="fade-up" data-aos-duration="1000">
                            Semua bisa punya rumah
                        </p>
                        <p className='text-gray-500 text-5xl font-extrabold mb-3' data-aos="fade-up" data-aos-duration="1300">
                            hanya di <span className='text-emerald-400'>Rudensia Park</span>
                        </p>
                        <p className='text-gray-500 text-base mb-2' data-aos="fade-up" data-aos-duration="1500">
                            Lagi Cari Rumah Yang Asri dan Sejuk? Kami adalah jawabannya
                        </p>
                        <div className='flex flex-row gap-3' >
                            <button className='bg-gray-400 text-gray-100 p-2 rounded-md text-sm' data-aos="fade-left" data-aos-duration="1700" onClick={handleClickSeeProduct}>
                                Lihat Produk
                            </button>
                            <button className='bg-emerald-400 p-2 rounded-md text-sm text-white' data-aos="fade-right" data-aos-duration="1900" onClick={handleClickHubungi}>
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trusted By */}
                <div className="flex flex-col items-center justify-center mb-10">
                    <p className='text-base text-gray-400' data-aos="fade-up" data-aos-duration="1900">
                        Dipercaya lebih dari 200+ customer &
                    </p>
                    <p className='text-base text-gray-400 mb-10' data-aos="fade-up" data-aos-duration="1900">
                        bekerja sama dengan
                    </p>

                    <div className="flex gap-20">
                        <Image src={Mandiri} alt='Mandiri' width={150} height={150} data-aos="fade-right" data-aos-duration="1910"></Image>
                        <Image src={BNI} alt='BNI' width={150} height={150} data-aos="fade-right" data-aos-duration="1920"></Image>
                        <Image src={BTN} alt='BTN' width={150} height={150} data-aos="fade-right" data-aos-duration="1930"></Image>
                        <Image src={BRI} alt='BRI' width={150} height={150} data-aos="fade-right" data-aos-duration="1940"></Image>
                    </div>
                </div>

                {/* Our Service */}
                <div id="tentang_kami" className="flex flex-col mx-8 p-5 bg-gray-50 rounded-xl mb-0">
                    <Image src={bgDots} alt="dots" style={{
                        position: "absolute",
                        width: "5rem",
                        right: "30rem",
                        transform: "rotateZ(90deg)",
                        top: "38rem",
                    }}></Image>

                    <Image src={bgCirlce} alt="setengahLingkaran" style={{
                        position: "absolute",
                        width: "5rem",
                        top: "43rem",
                        right: "45rem"
                    }}></Image>

                    <Image src={bgKotak} alt="kotak" style={{
                        position: "absolute",
                        width: "1rem",
                        top: "40rem",
                        right: "10rem"
                    }}></Image>

                    <div className="flex flex-col mb-5" data-aos='fade-right' data-aos-duration="1000">
                        <Badge caption='Our Service'></Badge>

                        <p className='text-gray-600 text-xl font-semibold mt-2 mb-1'>
                            Developer Terpercaya
                        </p>

                        <p className='text-gray-500 text-xs '>
                            Layanan terbaik hanya untuk Anda
                        </p>
                    </div>

                    <div className="grid grid-flow-col columns-4 gap-5" data-aos='fade-right' data-aos-duration="1000">
                        {
                            services.map((item, index) => (
                                <div key={item.id} className="w-full">
                                    <CardService id={item.id} description={item.description} title={item.title} icon={item.icon}></CardService>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Our Portofolio */}
                <div id="portofolio_kami" className="flex flex-col mx-8 p-10 mb-0">
                    <Image src={bgDots} alt="dots" style={{
                        position: "absolute",
                        width: "10rem",
                        right: "0",
                        top: "70rem",
                    }}></Image>


                    <div className="flex flex-col mb-5" data-aos='fade-down' data-aos-duration="1000">
                        <Badge caption='Our Portofolio'></Badge>

                        <p className='text-gray-600 text-xl font-semibold mt-2 mb-1'>
                            Portofolio Kami
                        </p>

                        <p className='text-gray-500 text-xs '>
                            Inovasi hunian berkualitas dari kami
                        </p>
                    </div>

                    <div className="flex flex-row justify-center gap-5" data-aos='fade-down' data-aos-duration="1000">
                        {
                            portofolio.map((item) => (
                                <div key={item.id} className="w-1/4">
                                    <CardPortofolio {...item}></CardPortofolio>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Our Product */}
                <div id="produk_rumah" className="flex flex-col mx-8 p-10 bg-gray-50 rounded-xl mb-5">
                    <Image src={bgDots} alt="dots" style={{
                        position: "absolute",
                        width: "6rem",
                        right: "30rem",
                        transform: "rotateZ(90deg)",
                        top: "99rem",
                    }}></Image>

                    <Image src={bgCirlce} alt="setengahLingkaran" style={{
                        position: "absolute",
                        width: "5rem",
                        top: "105rem",
                        right: "45rem"
                    }}></Image>


                    <div className="flex flex-row mb-5 justify-between items-center" >
                        <div className="flex flex-col" data-aos='fade-left' data-aos-duration="1000">
                            <Badge caption='Our Product'></Badge>

                            <p className='text-gray-600 text-xl font-semibold mt-2 mb-1'>
                                Hunian Terpopuler
                            </p>

                            <p className='text-gray-500 text-xs '>
                                Hunian terpopuler hanya untuk Anda
                            </p>
                        </div>

                        <div className="flex mr-10 gap-5">
                            <button className='bg-emerald-100 p-2 rounded-lg text-emerald-400' onClick={() => handleChangeSlideSwiperProduct('left')}>
                                <LeftOutlined />
                            </button>
                            <button className='bg-emerald-100 p-2 rounded-lg text-emerald-400' onClick={() => handleChangeSlideSwiperProduct('right')}>
                                <RightOutlined />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center gap-5" data-aos='fade-left' data-aos-duration="1000">
                        <Swiper spaceBetween={30} slidesPerView={4} onSwiper={(swiper) => { swiperRef.current = swiper as any }}>
                            {
                                rumah.map((item) => (
                                    <SwiperSlide key={item.id} className="bg-transparent mb-2">
                                        <CardProduct
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            description={item.description}
                                            location={item.location}
                                            price={item.price}
                                            luas_tanah={item.luas_tanah}
                                            luas_bangunan={item.luas_bangunan}
                                            jumlah_kamar={item.jumlah_kamar}
                                            jumlah_kamar_mandi={item.jumlah_kamar_mandi}
                                            book={item.book}
                                        ></CardProduct>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>

                {/* Virtual Tour */}
                <div id="virtual_tour" className='flex flex-col mx-8 p-10 rounded-xl'>
                    <Image src={bgDots} alt="dots" style={{
                        position: "absolute",
                        width: "10rem",
                        left: "25rem",
                        top: "160rem",
                    }}></Image>

                    <div className="flex flex-row mb-5 gap-10" >
                        <div className="flex flex-col mb-5 w-1/3" data-aos='fade-left' data-aos-duration="1000">
                            <Badge caption='Virtual Tour'></Badge>

                            <p className='text-gray-600 text-xl font-semibold mt-2 mb-1'>
                                Virtual Tour
                            </p>

                            <p className='text-gray-500 text-xs mb-5'>
                                Virtual tour menuju portofolio kami
                            </p>

                            <Select
                                defaultValue="grand_rudensia"
                                className="w-full mb-5"
                                placement='bottomRight'
                                onChange={handleChangeStreetView}
                                options={[
                                    { value: 'grand_rudensia', label: 'Grand Rudensia', },
                                    { value: 'villa_rudensia', label: 'Villa Rudensia' },
                                    { value: 'rudensia_park', label: 'Rudensia Park' },
                                ]}
                            />

                            <p className='text-gray-700 text-xs'>
                                *) Update terbaru oleh Google pada <span className='text-emerald-500'>{streetViewUpdated}</span>
                            </p>

                            <p className='text-gray-600 text-xs ml-3'>
                                Hubungi kami untuk buat janji survey
                            </p>
                        </div>

                        <div className="flex flex-row justify-center w-2/3" data-aos='fade-left' data-aos-duration="1000">
                            <iframe
                                src={streetViewSrc}
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '10px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="flex flex-col mx-8 p-10 bg-gray-50 rounded-xl">
                    <div className="flex flex-col mb-5" data-aos='fade-up' data-aos-duration="1000">
                        <Badge caption='Our Gallery'></Badge>

                        <p className='text-gray-600 text-xl font-semibold mt-2 mb-1'>
                            Gallery Hunian
                        </p>

                        <p className='text-gray-500 text-xs '>
                            Gallery virtual hunian terpopuler kami
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-5" data-aos='fade-up' data-aos-duration="1000">
                        {
                            gallery.map((item, index) => (
                                <Image key={index} className='rounded-xl w-full' src={item} alt="imgGallery"></Image>
                            ))
                        }
                    </div>
                </div>

                {/* FAQ */}
                <div className="flex mx-8 p-10 justify-center gap-10 mb-10">
                    <Image src={bgDots} alt="dots" style={{
                        position: "absolute",
                        width: "10rem",
                        right: "0",
                        top: "225rem",
                    }}></Image>

                    <Image src={bgKotak} alt="kotak" style={{
                        position: "absolute",
                        width: "1rem",
                        top: "230rem",
                        left: "5rem",
                        transform: "rotate(45deg)"
                    }}></Image>

                    <Image src={bgKotak} alt="kotak" style={{
                        position: "absolute",
                        width: "1rem",
                        top: "231rem",
                        left: "6rem",
                        transform: "rotate(45deg)"
                    }}></Image>

                    <Image src={bgKotak} alt="kotak" style={{
                        position: "absolute",
                        width: "1rem",
                        top: "232rem",
                        left: "5rem",
                        transform: "rotate(45deg)"
                    }}></Image>

                    <div className="grid w-1/4" data-aos='fade-right' data-aos-duration="1000">
                        <Image
                            src={faqImage}
                            alt="image"
                            className='shadow-lg drop-shadow-lg'
                            style={{ borderRadius: '20rem 20rem 3% 3%', height: '500px' }}></Image>
                    </div>
                    <div className="flex flex-col w-2/4" data-aos='fade-right' data-aos-duration="1000">
                        <p className='text-emerald-400 font-semibold text-4xl mb-2'>
                            Frequently Asked Questions
                        </p>
                        <p className='text-gray-700 text-sm mb-5'>
                            Semua yang perlu Anda ketahui tentang hunian kami ada disini.<br></br>
                            Jika Anda memiliki pertanyaan, hubungi kami.
                        </p>

                        <Collapse defaultActiveKey={['1']} accordion ghost>
                            {
                                faq.map((item) => (
                                    <Panel header={item.question} key={item.id} className='text-gray-500'>
                                        <p className='text-gray-500'>{item.answer}</p>
                                    </Panel>
                                ))
                            }

                        </Collapse>
                    </div>
                </div>

                {/* Simulasi KPR */}
                <div id="simulasi_kpr" className="flex flex-col p-10 mb-5 bg-gray-50">
                    <div className="flex flex-col mb-5" data-aos='fade-up' data-aos-duration="1000">
                        <Badge caption='Simulasi KPR'></Badge>

                        <p className='text-gray-600 text-xl font-semibold mt-2 mb-1'>
                            Simulasi KPR
                        </p>

                        <p className='text-gray-500 text-xs '>
                            Hitung angsuran KPR disini
                        </p>
                    </div>

                    {/* Form */}
                    <div className="flex flex-row gap-10">
                        <div className="flex w-full" data-aos='fade-up' data-aos-duration="1000"    >
                            <Form name='simulasi_kpr' className='w-full' labelCol={{ span: 7 }} wrapperCol={{ span: 24 }} onFinish={handleCountKpr}>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Harga Rumah"
                                            name="harga_rumah"
                                            rules={[{ required: true, message: 'Harga Rumah Tidak Boleh Kosong' }]}>
                                            <InputNumber min={1} className="w-full"
                                                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}>
                                            </InputNumber>
                                        </Form.Item>

                                        <Form.Item
                                            label="Jumlah DP"
                                            name="down_payment">
                                            <InputNumber min={0} className="w-full"
                                                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}>
                                            </InputNumber>
                                        </Form.Item>

                                        <Form.Item
                                            label="Tenor (tahun)"
                                            name="tenor"
                                            rules={[{ required: true, message: 'Tenor Tidak Boleh Kosong' }]}>
                                            <InputNumber min={1} className="w-full"></InputNumber>
                                        </Form.Item>

                                        <Form.Item
                                            label="Suku Bunga Per Tahun"
                                            name="suku_bunga_per_tahun"
                                            rules={[{ required: true, message: 'Suku Bunga Per Tahun Tidak Boleh Kosong' }]}>
                                            <InputNumber min={1} max={100} className="w-full"></InputNumber>
                                        </Form.Item>

                                        <Form.Item wrapperCol={{ offset: 17, span: 0 }} className="text-right">
                                            <button className='bg-emerald-500 p-2 rounded-xl text-white text-sm ml-auto' type='submit'>
                                                Hitung Angsuran KPR
                                            </button>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <div className="flex flex-col mb-3">
                                            <p className='text-gray-600 text-center text-lg font-semibold'>
                                                Estimasi Angsuran Per Bulan
                                            </p>
                                        </div>

                                        <div className="flex flex-row justify-between mx-20 bg-gray-200 py-3 px-10 rounded-xl">
                                            <p className='text-emerald-600'>
                                                Angsuran Per Bulan
                                            </p>
                                            <p className='text-emerald-600'>
                                                {angsuran}
                                            </p>
                                        </div>

                                        <div className="flex flex-row justify-center mx-12  py-3 px-10">
                                            <p className='text-gray-600 text-xs'>
                                                Estimasi di atas hanya perhitungan dengan suku bunga tetap (fixed)
                                            </p>
                                        </div>
                                    </Col>
                                </Row>


                            </Form>
                        </div>
                    </div>
                </div>

                {/* Get In Touch */}
                <div className="flex flex-col mx-8 p-14 bg-emerald-400 rounded-xl mb-0" data-aos='fade-down' data-aos-duration="1000">
                    <div className="flex w-full justify-center mb-2">
                        <p className='text-4xl font-bold text-white'>
                            Tetap Terhubung Dengan Kami
                        </p>
                    </div>

                    <div className="flex w-full justify-center mb-5">
                        <p className='font text-gray-100'>
                            Dengan Sepenuh Hati, Kami Akan Membantu Anda Mewujudkan Hunian Impian Anda
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex w-1/2 gap-4 justify-center">
                            <button className='bg-emerald-200 rounded-lg px-2 py-3 text-sm text-gray-600' onClick={handleClickLokasiKantor}>
                                Lokasi Kantor Pemasaran
                            </button>
                            <button className='bg-gray-200 rounded-lg px-2 py-3 text-sm text-emerald-600' onClick={handleClickHubungi}>
                                Hubungi Kami Via Whatsapp
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quotes */}
                <div className="flex flex-col mx-8 p-10 mb-0 items-center">
                    <p className='text-2xl w-1/2 text-center mb-2' data-aos='fade-up' data-aos-duration="1000">
                        <span className='text-5xl font-extrabold text-gray-300 font-sans'>&quot;</span>
                        Rumah bukan hanya tentang di mana Anda berada, tetapi tentang siapa yang Anda temukan di dalamnya.
                    </p>
                    <p className='text-lg text-gray-400' data-aos='fade-left' data-aos-duration="1100">
                        - Anthony Liccione
                    </p>
                </div>
            </LandingPage>
        </>
    )
}
