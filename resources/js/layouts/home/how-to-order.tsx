import CardHowToOrder from '@/components/card-how-to-order';

const HowToOrderSection = () => {
    return (
        <div className="mt-20 h-auto w-full rounded-4xl px-4 py-15 font-hanken">
            <header className="text-center">
                <div>
                    <h1 className="text-4xl font-bold text-dark">
                        Perut Mulai Keroncongan?{' '}
                        <span className="text-primary">
                            Begini Cara Pesannya
                        </span>
                    </h1>
                </div>
                <h2 className="mx-auto mt-5 text-secondary md:w-[80%] xl:w-[60%]">
                    Tiga langkah mudah untuk menikmati burger premium favoritmu
                    langsung di rumah.
                </h2>
            </header>

            <div className="relative mt-20 grid h-auto w-full grid-cols-1 gap-15 md:grid-cols-3">
                <div className="absolute top-45 left-1/2 w-full -translate-x-1/2 rotate-90 border-t-2 border-dashed border-primary md:top-10 md:w-[80%] md:rotate-0 lg:w-[75%]"></div>
                <div className="absolute top-115 w-full rotate-90 border-t-2 border-dashed border-primary md:hidden md:rotate-0"></div>
                <CardHowToOrder
                    number={'1'}
                    title={'Pilih Menu Favorit'}
                    subtitle={
                        'Temukan berbagai varian burger premium dan menu pendamping lezat di daftar menu kami.'
                    }
                />

                <CardHowToOrder
                    number={'2'}
                    title={'Selesaikan Pesanan'}
                    subtitle={
                        'Atur topping sesukamu, isi detail pengiriman, dan klik tombol pesan sekarang.'
                    }
                />

                <CardHowToOrder
                    number={'3'}
                    title={'Nikmati Burgermu!'}
                    subtitle={
                        'Duduk santai saja. Burger hangat yang super juicy siap meluncur langsung ke depan pintumu!'
                    }
                />
            </div>
        </div>
    );
};

export default HowToOrderSection;
