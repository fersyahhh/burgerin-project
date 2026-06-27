const MenuHeader = () => {
    return (
        <div className="relative mt-40 h-auto w-full text-center font-hanken md:text-left lg:mt-50">
            {/* Blur Component */}
            <div className="pointer-events-none absolute top-0 -left-70 h-100 w-160 rounded-full bg-primary/15 blur-[120px] lg:w-400"></div>
            <span className="absolute -top-15 right-0 hidden font-playfair text-[11rem] font-bold text-dark italic opacity-10 md:block">
                MENU
            </span>

            <h1 className="mx-auto w-[90%] text-5xl font-bold text-dark md:ml-0 md:text-6xl lg:w-[60%] xl:text-8xl">
                Burger Andalan{' '}
                <span className="font-playfair text-primary italic underline">
                    Terbaik Kami
                </span>
            </h1>
            <p className="mt-3 text-secondary md:w-[80%] md:text-lg xl:w-[70%]">
                Perpaduan sempurna antara daging premium, roti brioche lembut,
                dan saus spesial rahasia yang menghadirkan pengalaman menikmati
                burger di level berbeda.
            </p>
        </div>
    );
};

export default MenuHeader;
