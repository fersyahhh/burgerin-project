import { Head } from '@inertiajs/react';
import DiscontOngkir from '@/components/discont-ongkir';
import Footer from '@/layouts/footer';
import BestSellerSection from '@/layouts/home/best-seller';
import HeroSection from '@/layouts/home/hero';
import HowToOrderSection from '@/layouts/home/how-to-order';
import NewsLetterSection from '@/layouts/home/newsletter';
import TestimonialSection from '@/layouts/home/testimonials';
import WhyChooseSection from '@/layouts/home/why-choose';
import Navbar from '@/layouts/navbar';

const Home = () => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
            {/* Title Website */}
            <Head title="Burgerin | Laper? Burgerin Aja Yuk" />

            <DiscontOngkir />

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
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
