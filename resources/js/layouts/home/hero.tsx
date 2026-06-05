import heroImage from '@/assets/hero-img.jpg';

const HeroSection = () => {
    return (
        <div className="relative mt-25 h-140 w-full overflow-hidden rounded-4xl lg:mt-30">
            <img
                src={heroImage}
                className="h-full w-full object-cover object-center"
                alt="Burgerin Image"
            />
            <div className="absolute inset-0 w-full bg-black/60 px-6 py-8 md:px-10 md:py-20">
                <h1 className="font-hanken text-3xl font-bold md:text-6xl lg:w-[70%] lg:text-7xl">
                    Gigitan Sempurna. Kelezatan Nyata.
                </h1>
                <h2 className="mt-1 font-playfair text-3xl font-bold text-primary italic md:text-4xl lg:w-[70%] lg:text-5xl">
                    Buka Bungkusnya, Rasakan Kebahagiaannya!
                </h2>
                <p className="mt-6 font-hanken text-slate-300 md:w-[60%] lg:text-lg">
                    Rasakan ledakan rasa pamungkas dengan burger premium buatan
                    tangan kami. Dibuat segar, dikirim cepat, dan dirancang
                    untuk memuaskan.
                </p>
                <div className="mt-10 flex flex-col gap-4 md:w-100 md:flex-row">
                    <button className="w-full rounded-full bg-primary py-3 text-center font-hanken text-lg font-bold transition-all duration-500 hover:-translate-y-1 hover:bg-neutral hover:text-dark md:w-1/2">
                        Pesan Sekarang
                    </button>
                    <button className="w-full rounded-full border-2 border-white py-3 text-center font-hanken text-lg font-bold transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-neutral hover:text-dark md:w-1/2">
                        Lihat Menu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
