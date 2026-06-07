import { Head } from '@inertiajs/react';
import CardNavlink from '@/components/card-navlink';
import { useMenu } from '@/contexts/menu-context';
import Footer from '@/layouts/footer';
import BestSellerSection from '@/layouts/home/best-seller';
import HeroSection from '@/layouts/home/hero';
import HowToOrderSection from '@/layouts/home/how-to-order';
import NewsLetterSection from '@/layouts/home/newsletter';
import TestimonialSection from '@/layouts/home/testimonials';
import WhyChooseSection from '@/layouts/home/why-choose';
import Navbar from '@/layouts/navbar';

const Home = () => {
    const { isOpen, closeMenu } = useMenu();

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
            {/* Title Website */}
            <Head title="Burgerin | Laper? Burgerin Aja Yuk" />

            {/* Header Home */}
            <div className="flex h-10 w-full items-center justify-center bg-primary">
                <p className="font-hanken text-xs font-bold md:text-sm lg:text-base">
                    Gratis Ongkir khusus pemesanan di atas Rp 100rb!
                </p>
            </div>

            {/* Backdrop */}
            <div
                onClick={closeMenu}
                className={`${isOpen == true ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} absolute inset-0 z-998 w-full bg-black/50 transition-all duration-300 ease-in-out`}
            ></div>

            {/* Container Main */}
            <div className="relative container">
                {/* Navbar */}
                <div className="fixed top-8 right-0 left-0 z-997 mx-auto max-w-[inherit] px-4 md:px-8">
                    <Navbar />
                </div>

                {/* Content */}
                <HeroSection />
                <BestSellerSection />
                <WhyChooseSection />
                <HowToOrderSection />
                <TestimonialSection />
                <NewsLetterSection />

                {/* Card NavLink On Mobile/Tablet Device */}
                <div
                    className={`${isOpen == true ? 'right-0' : '-right-full'} fixed top-0 z-999 w-[80%] transition-all duration-300 ease-in-out md:w-1/2`}
                >
                    <CardNavlink />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
