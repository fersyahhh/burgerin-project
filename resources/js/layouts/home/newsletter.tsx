const NewsLetterSection = () => {
    return (
        <div className="relative mt-30 h-auto w-full overflow-hidden rounded-3xl bg-dark px-6 py-8 font-hanken md:rounded-4xl md:px-20 md:py-16 lg:rounded-[4rem] lg:px-50 lg:py-25 xl:rounded-[6rem] xl:py-30">
            <div className="absolute -top-25 -right-25 h-50 w-50 rounded-full bg-primary/20 md:h-55 md:w-55 lg:h-60 lg:w-60 xl:h-65 xl:w-65"></div>
            <header className="text-center">
                <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
                    Yuk, Masuk Komunitas Burgerin!
                </h1>
                <h2 className="mt-4 text-slate-300">
                    Dapatkan Diskon 20% untuk pesanan pertamamu dan jadilah yang
                    pertama mencoba menu-menu baru kami sebelum rilis!
                </h2>
            </header>

            <div>
                <form
                    action=""
                    className="mt-8 flex flex-col gap-4 md:flex-row"
                >
                    <input
                        className="w-full rounded-full border border-neutral/30 bg-neutral/20 px-5 py-4 transition-all duration-300 ease-in-out outline-none placeholder:text-slate-100 focus:ring-1 focus:ring-neutral"
                        type="email"
                        placeholder="Enter your email address"
                    />
                    <button
                        type="submit"
                        className="w-full rounded-full bg-primary py-4 transition-all lg:text-lg duration-500 font-bol ease-in-out hover:bg-neutral hover:text-dark md:w-[60%]"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            <div>
                <p className="mt-4 text-center text-sm text-slate-400">
                    No spam, just burger news. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
};

export default NewsLetterSection;
