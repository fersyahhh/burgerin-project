import GetInTouch from '@/components/get-in-touch';
import LegalFooter from '@/components/legal-footer';
import QuickLinks from '@/components/quick-links';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-30 h-full w-full rounded-t-4xl bg-dark px-10 py-13 font-hanken md:rounded-t-[3rem] xl:rounded-t-[4rem] 2xl:rounded-t-[5rem] 2xl:py-20 2xl:px-40 md:px-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:justify-between lg:grid-cols-4">
                <div>
                    <h1 className="text-4xl font-bold md:text-5xl">Burgerin<span className='text-primary'>.</span></h1>
                    <p className="mt-3 text-sm text-slate-300 md:text-base">
                        Menghadirkan kelezatan burger terbaik dengan bahan segar
                        pilihan dan cita rasa berani sejak 2024.
                    </p>
                </div>
                <QuickLinks />
                <LegalFooter />
                <GetInTouch />
            </div>
            <div className="mx-auto mt-15 w-full">
                <hr className="text-white/20" />
                <p className="mt-4 text-center text-xs lg:text-sm text-slate-400">
                    &copy; {year} Burgerin. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
